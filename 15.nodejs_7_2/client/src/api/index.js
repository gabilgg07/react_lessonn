import axios from "axios";

export default axios.create({
  // baseURL: "https://testing-api-app.herokuapp.com",
  baseURL: "http://localhost:5500/api",
});
