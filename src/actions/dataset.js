import api from "../api";

export const search = param => () => api.dataset.search(param);
export const searchDatagroups = param => () =>
  api.dataset.searchDatagroups(param);
export const searchElements = param => () => api.dataset.searchElements(param);
