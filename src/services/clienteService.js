import api from "./api";

export const getClientes = () => api.get("/api/clientes");
export const getClienteById = (id) => api.get(`/api/clientes/${id}`);
export const createCliente = (data) => api.post("/api/clientes", data);
export const updateCliente = (id, data) => api.put(`/api/clientes/${id}`, data);
export const deleteCliente = (id) => api.delete(`/api/clientes/${id}`);
