import axios from "axios";

const API = axios.create({
  baseURL: "https://rehabserver.vercel.app/", // ✅ same as your backend port
});

export default API;
