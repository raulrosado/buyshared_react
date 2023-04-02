import axiosInstance  from "./axios_config"
export const getInfoSolicitud = (token,header) => axiosInstance.get(`v1/api/solicitudes/getInfo/${token}`,header)