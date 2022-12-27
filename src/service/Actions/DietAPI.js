import AxiosList from "./AxiosList";


const DietInfoAPI = {

  getDietOptions(data) {
    const url = `/diet/options`;
    return AxiosList.authAxios.post(url,data);
  },
  
  save(data) {
    const url = `/diet`;
    return AxiosList.authAxios.post(url,data);
  },

  getByUserID(uid) {
    const url = `/diet/` +uid;
    return AxiosList.authAxios.get(url);
  }

}
export default DietInfoAPI