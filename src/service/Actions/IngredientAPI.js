import AxiosList from "./AxiosList";

const FoodAPI = {
  getAll(data) {
    const url = `/ingredient`;
    return AxiosList.normalAxios.get(url);
  },

  getById(id) {
    const url = `/ingredient/`+id;
    return AxiosList.normalAxios.get(url);
  },

  add(data) {
    const url = `/ingredient`;
    return AxiosList.normalAxios.post(url,data);
  },

  update(data) {
    const url = `/ingredient/`+data.id;
    return AxiosList.normalAxios.post(url,data);
  },

  delete(id) {
    const url = `/ingredient/`+id+`/delete`;
    return AxiosList.normalAxios.post(url);
  },
};
export default FoodAPI;
