import AxiosList from "./AxiosList";

const FoodAPI = {
  getAll(data) {
    const url = `/food`;
    return AxiosList.normalAxios.get(url);
  },
};
export default FoodAPI;
