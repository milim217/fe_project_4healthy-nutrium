import AxiosList from "./AxiosList";

const CategoryAPI = {
  getAll() {
    const url = `/category`;
    return AxiosList.normalAxios.get(url);
  },

  getById(id) {
    const url = `/category/` + id;
    return AxiosList.normalAxios.get(url);
  },
};
export default CategoryAPI;
