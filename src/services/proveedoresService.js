import api from "./api";

export const getProveedores = () => api.get("/api/proveedores");
export const getProveedorById = (id) => api.get(`/api/proveedores/${id}`);
export const createProveedor = (data) => api.post("/api/proveedores", data);
export const updateProveedor = (id, data) => api.put(`/api/proveedores/${id}`, data);
export const deleteProveedor = (id) => api.delete(`/api/proveedores/${id}`);
