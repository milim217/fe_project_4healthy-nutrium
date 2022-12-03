import AxiosList from "./AxiosList";


const DietInfoAPI = {

  getDietOptions(data) {
    const url = `/diet/options`;
    return AxiosList.normalAxios.post(url,data);
  },
  
  save(data) {
    const url = `/diet`;
    return AxiosList.normalAxios.post(url,data);
  }

}
export default DietInfoAPI