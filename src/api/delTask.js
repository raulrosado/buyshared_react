import axiosInstance  from "./axios_config"
export const delTask = (id_task,header) => axiosInstance.delete(`v1/api/task/delTask/${id_task}`,header)