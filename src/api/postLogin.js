import axiosInstance  from "./axios_config"
export const postLogin = (request) => axiosInstance.post(`v1/api/login`,request)