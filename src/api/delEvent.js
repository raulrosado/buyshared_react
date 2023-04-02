import axiosInstance  from "./axios_config"
export const delEvent = (id_Event,header) => axiosInstance.delete(`v1/api/event/delEvent/${id_Event}`,header)