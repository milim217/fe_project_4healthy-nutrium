import AxiosList from "./AxiosList";


const JobAPI = {
  
  getAll(data) {
    const url = `/job`;
    return AxiosList.normalAxios.get(url);
  }

}
export default JobAPI