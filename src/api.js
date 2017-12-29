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
    searchDatagroups: ({ limit, keyword, offset, datasetID }) =>
      axios
        .post(
          "/Dataset/searchDatagroups",
          qs.stringify({
            limit,
            keyword,
            offset,
            datasetID
          })
        )
        .then(res => res.data),
    searchElements: ({ limit, keyword, offset, datasetID }) =>
      axios
        .post(
          "/Dataset/searchElements",
          qs.stringify({
            limit,
            keyword,
            offset,
            datasetID
          })
        )
        .then(res => res.data)
  }
};
