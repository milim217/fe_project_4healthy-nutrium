import AxiosList from "./AxiosList";


const UserAPI = {
  
  getByEmail(email) {
    const url = `/user/` + email;
    return AxiosList.normalAxios.get(url);
  },

}
export default UserAPI;