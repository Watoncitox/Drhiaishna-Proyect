import api from "./api";

export const getPromociones = () => api.get("/api/promociones");
export const getPromocionById = (id) => api.get(`/api/promociones/${id}`);
export const createPromocion = (data) => api.post("/api/promociones", data);
export const updatePromocion = (id, data) => api.put(`/api/promociones/${id}`, data);
export const deletePromocion = (id) => api.delete(`/api/promociones/${id}`);
