import axios from "axios";
import qs from "qs";

export default {
  user: {
    login: credentials =>
      axios.post("/api/auth", { credentials }).then(res => res.data.user)
  },
  dataset: {
    search: ({ studyTpId, limit, keyword, offset }) =>
      axios
        .post(
          "/Dataset/search",
          qs.stringify({
            studyTpId,
            limit,
            keyword,
            offset
          })
        )
        .then(res => res.data),
    searchSetChildren: ({ limit, keyword, offset, datasetID, activeItem }) =>
      axios
        .post(
          "/Dataset/searchSetChildren",
          qs.stringify({
            limit,
            keyword,
            offset,
            datasetID,
            activeItem
          })
        )
        .then(res => res.data),
    save: param =>
      axios
        .post("/Dataset/save", qs.stringify(param), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
          }
        })
        .then(res => res.data)
  }
};
