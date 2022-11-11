import React from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import { AuthContext } from "../service/Actions/UserAPI";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const Auth = ({ authRoute }) => {
  const {
    authState: { authLoading, isAuthenticated, UserRole },
  } = useContext(AuthContext);

  let body;

  if (authLoading) {
    body = (
      <div className="d-flex justify-content-center mt-2">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (isAuthenticated) {
    if (UserRole === "ADMIN") {
      return <Redirect to="/admin" />;
    } else if (UserRole === "USER") {
      return <Redirect to="/home" />;
    } else {
      return <Redirect to="/nutrionexpert" />;
    }
  } else {
    body = (
      <>
        {authRoute === "login" && <LoginForm />}
        {authRoute === "register" && <RegisterForm />}
      </>
    );
  }

  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-all">
          <div className="landing-inner-second">{body}</div>
          <div className="landing-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
