import jwt from "jwt-decode";
import UserAPI from "../Actions/UserAPI";

const AuthUtil = {

  getUserFromToken() {
    try {
      let token = JSON.parse(localStorage.getItem("token"));
      let tokenUser = jwt(token);
      return UserAPI.getByEmail(tokenUser.sub);
    } catch (error) {
      return null;
    }

  }

}


export default AuthUtil;
