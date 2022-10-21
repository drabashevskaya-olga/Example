import axios from "axios";

axios.defaults.baseURL = `https://test.saitlabs.net/`;
axios.defaults.headers.common["Authorization"] = `Bearer ${
  localStorage.getItem("token") || ""
}`;

const POST = (slug, doc) => axios.post(slug, doc);
const GET = (slug, query = {}, config = {}) => axios.get(slug, query, config);

export { POST, GET };
