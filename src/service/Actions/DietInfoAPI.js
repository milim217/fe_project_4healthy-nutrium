import AxiosList from "./AxiosList";


const DietInfoAPI = {
  
  save(data) {
    const url = `/diet`;
    return AxiosList.normalAxios.get(url);
  }

}
export default DietInfoAPI