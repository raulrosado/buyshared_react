import axiosInstance  from "./axios_config"
export const postModificTask = (id_task,header) => axiosInstance.get(`v1/api/task/complet/${id_task}`,header)