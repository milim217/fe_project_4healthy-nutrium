import AxiosList from "./AxiosList";

const FoodAPI = {
  getAll(data) {
    const url = `/ingredient`;
    return AxiosList.normalAxios.get(url);
  },
};
export default FoodAPI;
