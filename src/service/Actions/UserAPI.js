import AxiosList from "./AxiosList";
import { truncate } from "fs";

const UserAPI = {
  
  getByEmail(email) {
    const url = `/user/` + email;
    return AxiosList.normalAxios.get(url);
  }

}
export default UserAPI;