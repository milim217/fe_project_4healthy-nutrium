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

  delete(id) {
    const url = `/food/`+id+`/delete`;
    return AxiosList.normalAxios.post(url);
  },

  search(key) {
    const url = `/food/search/`+key;
    return AxiosList.normalAxios.get(url);
  },
};
export default FoodAPI;
