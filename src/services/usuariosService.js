import api from "./api";

export const getUsuarios = () => api.get("/api/usuarios");
export const getUsuarioById = (id) => api.get(`/api/usuarios/${id}`);
export const createUsuario = (data) => api.post("/api/usuarios", data);
export const updateUsuario = (id, data) => api.put(`/api/usuarios/${id}`, data);
