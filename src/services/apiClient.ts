import axios from "axios";

export const apiClient = axios.create({
    baseURL: "http://grocerieseasy.net"
})