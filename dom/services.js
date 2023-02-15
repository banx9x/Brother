import axios from "axios";

export function getUsers() {
    return axios.request({
        url: "https://api.github.com/users",
        method: "GET",
    });
}
