import axiosInstance  from "./axios_config"
export const postRegistroSocial = (request) => axiosInstance.post(`v1/api/socialRegistrer`,request)