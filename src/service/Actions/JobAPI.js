import AxiosList from "./AxiosList";


const JobAPI = {
  
  getAll(data) {
    const url = `/job`;
    return AxiosList.authAxios.get(url);
  }

}
export default JobAPI