import api from "./api";

export const getHorarios = () => api.get("/horario");
export const getHorarioById = (id) => api.get(`/horario/${id}`);
export const createHorario = (data) => api.post("/horario", data);
export const updateHorario = (id, data) => api.put(`/horario/${id}`, data);
export const deleteHorario = (id) => api.delete(`/horario/${id}`);
