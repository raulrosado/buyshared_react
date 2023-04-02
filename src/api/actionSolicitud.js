import axiosInstance  from "./axios_config"
export const actionSolicitud = (request,header) => axiosInstance.post(`v1/api/solicitudes/actionSolicitud`,request,header)