import { createContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducers/AuthReducer";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "./UrlAPI";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt from "jwt-decode";

export const AuthContext = createContext();

const UserAPI = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: false,
    isAuthenticated: true,
    userName: null,
    UserRole: null,
  });

  // Authenticate user
  // const loadUser = async () => {
  //   if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
  //     setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
  //   }
  // };

  // useEffect(() => loadUser(), []);

  // Login
  const loginUser = (userForm) => {
    try {
      var querystring = require("querystring");
      axios
        .post(`${apiUrl}/login`, querystring.stringify(userForm), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then(function (response) {
          const user = jwt(response.data.access_token);
          if (response.data.access_token != null) {
            if (user.role === "ADMIN") {
              localStorage.setItem(
                LOCAL_STORAGE_TOKEN_NAME,
                response.data.access_token
              );
              dispatch({
                type: "SET_AUTH_ADMIN",
                payload: {
                  isAuthenticated: true,
                  userName: user.sub,
                },
              });
              console.log("Account ADMIN");
            } else if (user.role === "USER") {
              localStorage.setItem(
                LOCAL_STORAGE_TOKEN_NAME,
                response.data.access_token
              );
              dispatch({
                type: "SET_AUTH_USER",
                payload: {
                  isAuthenticated: true,
                  userName: user.sub,
                },
              });
              console.log("Account USER");
            } else {
              localStorage.setItem(
                LOCAL_STORAGE_TOKEN_NAME,
                response.data.access_token
              );
              dispatch({
                type: "SET_AUTH_NUTRIENT_EXPERT",
                payload: {
                  isAuthenticated: true,
                  userName: user.sub,
                },
              });
              console.log("Account NUTRIENT_EXPERT");
            }
          }
          console.log(response);
        });
    } catch (error) {}
  };

  // Register
  const registerUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/register`, userForm);
      if (response.data.success)
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );

      // await loadUser();

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // Logout
  const logoutUser = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    dispatch({
      type: "SET_AUTH",
      payload: { isAuthenticated: false, userName: null },
    });
  };

  // Context data
  const authContextData = { loginUser, registerUser, logoutUser, authState };

  // Return provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserAPI;
