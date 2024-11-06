import axios from "axios";
import config from "./config.json";

const httpService = (url, method, data = null) => {
    const token = localStorage.getItem("loginToken");

    const headers = {
        "Content-Type": "application/json"
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    return axios({
        url: config.onlineApi + url,
        method,
        data,
        headers
    });
}

export default httpService;
