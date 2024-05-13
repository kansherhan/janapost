import http from "../plugins/http.js";

export class BranchService {
  async getAllBranches(languageCode) {
    const response = await http.post("/service/public/branch_listV2", {
      start: 0,
      keyWord: "",
      length: -1,
      filter: { type: "filter", country: languageCode },
    });

    return response.data.data.rows;
  }
}

export default new BranchService();
