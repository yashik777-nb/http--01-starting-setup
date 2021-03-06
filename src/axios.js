import axios from "axios";

const instance = axios.create({
  baseUrl: "https://jsonplaceholder.typicode.com",
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN";

export default instance;
