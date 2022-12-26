import AxiosList from "./AxiosList";

const FoodAPI = {
  getAll(data) {
    const url = `/food`;
    return AxiosList.normalAxios.get(url);
  },

  getById(id) {
    const url = `/food/`+id;
    return AxiosList.normalAxios.get(url);
  },

  add(food) {
    const url = `/food`;
    return AxiosList.normalAxios.post(url,food);
  },

  update(food) {
    const url = `/food/`+food.id;
    return AxiosList.normalAxios.post(url,food);
  },

  changeStatus(id) {
    const url = `/food/`+id+`/changeStatus`;
    return AxiosList.normalAxios.post(url);
  },

  search(data) {
    const url = `/food/search`;
    return AxiosList.normalAxios.post(url,data);
  },
};
export default FoodAPI;
