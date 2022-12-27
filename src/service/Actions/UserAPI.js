import AxiosList from "./AxiosList";
import axios from "axios";
import axiosInstance from "./CustomAxios";
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
  getAll() {
    const url = `/user`;
    return axiosInstance.get(url);
  },

  getByEmail(email) {
    const url = `/user/` + email;
    return axiosInstance.get(url);
  },

  getRegisterUser(code) {
    const url = `/user/email-register/` + code;
    return axiosInstance.get(url);
  },

  getForgotUser(code) {
    const url = `/user/forgot/` + code;
    return axiosInstance.get(url);
  },

  getSearched(key) {
    const url = `/user/search/` + key;
    return axiosInstance.get(url);
  },

  sendRegisterCode(email) {
    const url = `/user/email-register`;
    return axiosInstance.post(url, email);
  },

  sendForgotCode(email) {
    const url = `/user/forgot`;
    return axiosInstance.post(url, email);
  },

  addUser(user) {
    const url = `/user`;
    return axiosInstance.post(url, user);
  },

  addNutrientExpert(user) {
    const url = `/user//nutrient-expert`;
    return axiosInstance.post(url, user);
  },

  updateUser(user) {
    const url = `/user/`+ user.id;
    return axiosInstance.post(url, user);
  },

  checkOldPassword(id,oldPassword) {
    const url = `/user/check-old-password/` + id;
    return axiosInstance.post(url, oldPassword);
  },

  addNutrient(user) {
    const url = `/user/nutrient-expert`;
    return axiosInstance.post(url, user);
  },

  update(user) {
    const url = `/user/` + user.id;
    return axiosInstance.put(url, user);
  },

  deactive(uid) {
    const url = `/user/` + uid+ `/delete`;
    return axiosInstance.post(url);
  },

  active(uid) {
    const url = `/user/` + uid + `/active`;
    return axiosInstance.post(url);
  },

};
export default UserAPI;
