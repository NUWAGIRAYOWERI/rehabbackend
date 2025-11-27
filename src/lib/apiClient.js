import axios from "axios";

const API = axios.create({
  baseURL: "https://rehabserver.onrender.com", // ✅ same as your backend port
});

export default API;
