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

  getRegisterUser(code) {
    const url = `/user/email-register/` + code;
    return AxiosList.normalAxios.get(url);
  },

  getForgotUser(code) {
    const url = `/user/forgot/` + code;
    return AxiosList.normalAxios.get(url);
  },

  getSearched(key) {
    const url = `/user/search/` + key;
    return AxiosList.normalAxios.get(url);
  },

  sendRegisterCode(email) {
    const url = `/user/email-register`;
    return AxiosList.normalAxios.post(url, email);
  },

  sendForgotCode(email) {
    const url = `/user/forgot`;
    return AxiosList.normalAxios.post(url, email);
  },

  addUser(user) {
    const url = `/user`;
    return AxiosList.normalAxios.post(url, user);
  },

  addNutrientExpert(user) {
    const url = `/user//nutrient-expert`;
    return AxiosList.normalAxios.post(url, user);
  },

  updateUser(user) {
    const url = `/user/`+ user.id;
    return AxiosList.normalAxios.post(url, user);
  },

  checkOldPassword(id,oldPassword) {
    const url = `/user/check-old-password/` + id;
    return AxiosList.normalAxios.post(url, oldPassword);
  },

  addNutrient(user) {
    const url = `/user/nutrient-expert`;
    return AxiosList.normalAxios.post(url, user);
  },

  update(user) {
    const url = `/user/` + user.id;
    return AxiosList.normalAxios.put(url, user);
  },

  deactive(uid) {
    const url = `/user/` + uid+ `/delete`;
    return AxiosList.normalAxios.post(url);
  },

  active(uid) {
    const url = `/user/` + uid + `/active`;
    return AxiosList.normalAxios.post(url);
  },
};
export default UserAPI;
