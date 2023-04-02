import axiosInstance  from "./axios_config"
export const postChangePictur = (request,header) => axiosInstance.post(`v1/api/user/postChangePictur`,request,header)