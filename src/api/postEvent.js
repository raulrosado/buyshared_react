import axiosInstance  from "./axios_config"
export const postEvent = (request,header) => axiosInstance.post(`v1/api/event/addEvent`,request,header)