import axiosInstance  from "./axios_config"
export const delList = (id_list,header) => axiosInstance.delete(`v1/api/list/delList/${id_list}`,header)