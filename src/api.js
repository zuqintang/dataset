import axios from "axios";
import qs from "qs";
import { API_HOST } from "./types";

export default {
  user: {
    login: credentials =>
      axios.post("/api/auth", { credentials }).then(res => res.data.user)
  },
  dataset: {
    search: ({ study, limit, keyword, offset }) =>
      axios
        .post(
          API_HOST + "/Dataset/search",
          qs.stringify({
            study,
            limit,
            keyword,
            offset
          })
        )
        .then(res => res.data),
    searchSetChildren: param =>
      axios
        .post(API_HOST + "/Dataset/searchSetChildren", qs.stringify(param), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
          }
        })
        .then(res => res.data),
    save: param =>
      axios
        .post(API_HOST + "/Dataset/addSet", qs.stringify(param), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
          }
        })
        .then(res => res.data)
  }
};
