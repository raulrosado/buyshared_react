import axiosInstance  from "./axios_config"
export const postList = (request,header) => axiosInstance.post(`v1/api/list/addList`,request,header)