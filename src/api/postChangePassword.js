import axiosInstance  from "./axios_config"
export const postChangePassword = (request,header) => axiosInstance.post(`v1/api/user/postChangePassword`,request,header)