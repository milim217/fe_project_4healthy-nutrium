import AxiosList from "./AxiosList";

const IngredientAPI = {
  getAll(data) {
    const url = `/ingredient`;
    return AxiosList.normalAxios.get(url);
  },

  getById(id) {
    const url = `/ingredient/` + id;
    return AxiosList.normalAxios.get(url);
  },

  add(data) {
    const url = `/ingredient`;
    return AxiosList.normalAxios.post(url, data);
  },

  update(data) {
    const url = `/ingredient/` + data.id;
    return AxiosList.normalAxios.post(url, data);
  },

  changeStatus(id) {
    const url = `/ingredient/` + id + `/changeStatus`;
    return AxiosList.normalAxios.post(url);
  },

  search(key) {
    const url = `/ingredient/search/` + key;
    return AxiosList.normalAxios.get(url);
  },
};
export default IngredientAPI;
