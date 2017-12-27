import api from "../api";

export const search = condition => () => api.dataset.search(condition);
export const delete1 = condition => () =>
  api.dataset.delete1(condition).then(res => res.data);
