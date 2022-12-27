import AxiosList from "./AxiosList";

const FoodAPI = {
  getAll(data) {
    const url = `/food`;
    return AxiosList.authAxios.get(url);
  },

  getById(id) {
    const url = `/food/`+id;
    return AxiosList.authAxios.get(url);
  },

  add(food) {
    const url = `/food`;
    return AxiosList.authAxios.post(url,food);
  },

  update(food) {
    const url = `/food/`+food.id;
    return AxiosList.authAxios.post(url,food);
  },

  changeStatus(id) {
    const url = `/food/`+id+`/changeStatus`;
    return AxiosList.authAxios.post(url);
  },

  search(data) {
    const url = `/food/search`;
    return AxiosList.authAxios.post(url,data);
  },

  searchActive(data) {
    const url = `/food/search-active`;
    return AxiosList.authAxios.post(url,data);
  },

  getActive() {
    const url = `/food/active`;
    return AxiosList.authAxios.get(url);
  },
};
export default FoodAPI;
