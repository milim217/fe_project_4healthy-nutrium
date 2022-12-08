import AxiosList from "./AxiosList";
import axios from "axios";
import { apiUrl } from "./UrlAPI";

const UserAPI = {
  login(userForm) {
    const querystring = require("querystring");
    return axios.post(`${apiUrl}/login`, querystring.stringify(userForm), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  },
  getAll(data) {
    const url = `/user`;
    return AxiosList.normalAxios.get(url);
  },

  getByEmail(email) {
    const url = `/user/` + email;
    return AxiosList.normalAxios.get(url);
  },

  sendRegisterCode(email) {
    const url = `/user/email-register`;
    return AxiosList.normalAxios.post(url, email);
  },

  getRegisterUser(code) {
    const url = `/user/email-register/` + code;
    return AxiosList.normalAxios.get(url);
  },

  sendForgotCode(email) {
    const url = `/user/forgot`;
    return AxiosList.normalAxios.post(url, email);
  },

  getForgotUser(code) {
    const url = `/user/forgot/` + code;
    return AxiosList.normalAxios.get(url);
  },

  addUser(user) {
    const url = `/user`;
    return AxiosList.normalAxios.post(url, user);
  },

  addNutrient(user) {
    const url = `/user/nutrient-expert`;
    return AxiosList.normalAxios.post(url, user);
  },

  update(user) {
    const url = `/user/` + user.id;
    return AxiosList.normalAxios.post(url, user);
  },
};
export default UserAPI;
