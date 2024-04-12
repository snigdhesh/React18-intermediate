import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080"
})

class APIClient{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = () => axiosInstance.get(this.endpoint).then(res=> res.data)
    post = <T>(t:T) => axiosInstance.post(this.endpoint,t).then(res=> res.data)
    delete = (id:number) => axiosInstance.delete(this.endpoint+"/"+id).then(res => res.status) //Here API doesn't return any response body on DELETE operation, hence aiming for status
}

export default APIClient