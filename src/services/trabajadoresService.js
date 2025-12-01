import api from "./api";

export const getTrabajadores = () => api.get("/trabajador");
export const getTrabajadorById = (id) => api.get(`/trabajador/${id}`);
export const createTrabajador = (data) => api.post("/trabajador", data);
export const updateTrabajador = (id, data) => api.put(`/trabajador/${id}`, data);
export const deleteTrabajador = (id) => api.delete(`/trabajador/${id}`);
