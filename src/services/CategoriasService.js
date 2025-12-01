import api from "./api";

export const getCategorias = () => api.get("/categoria");
export const getCategoriaById = (id) => api.get(`/categoria/${id}`);
export const createCategoria = (data) => api.post("/categoria", data);
export const updateCategoria = (id, data) => api.put(`/categoria/${id}`, data);
export const deleteCategoria = (id) => api.delete(`/categoria/${id}`);
