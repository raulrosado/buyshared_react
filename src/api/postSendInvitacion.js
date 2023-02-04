import axiosInstance  from "./axios_config"
export const postSendInvitacion = (request,header) => axiosInstance.post(`v1/api/solicitudes/sendSolicitud`,request,header)