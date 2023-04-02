import axiosInstance  from "./axios_config"
export const getList = (id_user,header) => axiosInstance.get(`v1/api/list/user/${id_user}`,header)