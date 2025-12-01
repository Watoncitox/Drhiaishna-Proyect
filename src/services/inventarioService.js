import api from "./api";

export const getInventario = () => api.get("/inventario");
export const getInventarioById = (id) => api.get(`/inventario/${id}`);
export const createInventario = (data) => api.post("/inventario", data);
export const updateInventario = (id, data) => api.put(`/inventario/${id}`, data);
export const deleteInventario = (id) => api.delete(`/inventario/${id}`);
