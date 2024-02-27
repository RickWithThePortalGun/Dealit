import { create } from "apisauce";

const apiClient=create({
    baseURL:'http://172.20.10.5:9000/api/', timeout:2000
})

export default apiClient;