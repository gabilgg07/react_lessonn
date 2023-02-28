import axios from "axios";

const unsplashKey = process.env.REACT_APP_API_ACCESS_U_KEY;

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${unsplashKey}`,
  },
});
