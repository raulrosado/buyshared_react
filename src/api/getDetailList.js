import axiosInstance  from "./axios_config"
export const getDetailList = (idList,header) => axiosInstance.get(`v1/api/list/${idList}`,header)