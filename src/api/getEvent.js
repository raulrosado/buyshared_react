import axiosInstance  from "./axios_config"
export const getEvent = (id_user,header) => axiosInstance.get(`v1/api/event/user/${id_user}`,header)