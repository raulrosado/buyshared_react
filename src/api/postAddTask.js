import axiosInstance  from "./axios_config"
export const postAddTask = (request,header) => axiosInstance.post(`v1/api/task/addTask`,request,header)