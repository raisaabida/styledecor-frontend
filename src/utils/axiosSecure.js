import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});


axiosSecure.interceptors.request.use((config) => {
  const token = localStorage.getItem("access-token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


axiosSecure.get("/test")
  .then(res => console.log(res.data))
  .catch(err => console.log(err));


export default axiosSecure;
