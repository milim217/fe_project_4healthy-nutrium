import AxiosList from "./AxiosList";

const IngredientAPI = {
  getAll(data) {
    const url = `/ingredient`;
    return AxiosList.authAxios.get(url);
  },

  getById(id) {
    const url = `/ingredient/` + id;
    return AxiosList.authAxios.get(url);
  },

  add(data) {
    const url = `/ingredient`;
    return AxiosList.authAxios.post(url, data);
  },

  update(data) {
    const url = `/ingredient/` + data.id;
    return AxiosList.authAxios.post(url, data);
  },

  changeStatus(id) {
    const url = `/ingredient/` + id + `/changeStatus`;
    return AxiosList.authAxios.post(url);
  },

  searchActive(data) {
    const url = `/ingredient/search-active`;
    return AxiosList.authAxios.post(url,data);
  },

  getActive() {
    const url = `/ingredient/active`;
    return AxiosList.authAxios.get(url);
  },
};
export default IngredientAPI;
