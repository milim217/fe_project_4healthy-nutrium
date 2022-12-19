import AxiosList from "./AxiosList";


const DietInfoAPI = {

  getDietOptions(data) {
    const url = `/diet/options`;
    return AxiosList.normalAxios.post(url,data);
  },
  
  save(data) {
    const url = `/diet`;
    return AxiosList.normalAxios.post(url,data);
  },

  getByUserID(uid) {
    const url = `/diet/` +uid;
    return AxiosList.normalAxios.get(url);
  }

}
export default DietInfoAPI