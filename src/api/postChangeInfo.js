import axiosInstance  from "./axios_config"
export const postChangeInfo = (request,header) => axiosInstance.post(`v1/api/user/postChangeInfo`,request,header)