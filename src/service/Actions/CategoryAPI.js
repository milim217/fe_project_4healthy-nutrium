import AxiosList from "./AxiosList";


const CategoryAPI = {
  
  getAll() {
    const url = `/category`;
    return AxiosList.normalAxios.get(url);
  }

}
export default CategoryAPI