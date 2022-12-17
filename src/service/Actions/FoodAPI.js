import AxiosList from "./AxiosList";

const FoodAPI = {
  getAll(data) {
    const url = `/food`;
    return AxiosList.authAxios.get(url);
  },

  getById(id) {
    const url = `/food/`+id;
    return AxiosList.normalAxios.get(url);
  },
};
export default FoodAPI;
