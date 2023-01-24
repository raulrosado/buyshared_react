import axiosInstance  from "./axios_config"
export const getList = (id_user) => axiosInstance.get('v1/api/list')