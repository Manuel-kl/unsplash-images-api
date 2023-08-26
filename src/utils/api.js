import axios from "axios";

const accessToken = process.env.VUE_APP_UNSPLASH_API_KEY;
console.log(accessToken);
export const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com",

  headers: {
    Authorization: `Client-ID ${accessToken}`,
  },
});
