import axiosInstance  from "./axios_config"
export const getDetailEvent = (idList,header) => axiosInstance.get(`v1/api/event/${idList}`,header)