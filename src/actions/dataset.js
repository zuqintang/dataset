import api from "../api";

export const search = param => () => api.dataset.search(param);
export const searchSetChildren = param => () =>
  api.dataset.searchSetChildren(param);
