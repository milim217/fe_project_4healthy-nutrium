import AxiosList from "./AxiosList";

const CategoryAPI = {
  getAll() {
    const url = `/category`;
    return AxiosList.authAxios.get(url);
  },

  getById(id) {
    const url = `/category/` + id;
    return AxiosList.authAxios.get(url);
  },

  getActive() {
    const url = `/category/active`;
    return AxiosList.authAxios.get(url);
  },
};
export default CategoryAPI;
