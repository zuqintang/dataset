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
        .then(res => res.data)
  }
};
