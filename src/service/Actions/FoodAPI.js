import AxiosList from "./AxiosList";


const FoodAPI = {
  
  getDiet(data) {
    const url = `/food/diet`;
    return AxiosList.normalAxios.post(url,data);
  }

}
export default FoodAPI