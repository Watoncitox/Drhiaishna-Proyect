// src/app/components/Card/Card-Usuario/Card-Usuario.js
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import CardBase from "../CardBase";
import "./Card-Usuario.css";

export default function CardUsuario({ usuario, onSave }) {
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    nombre: usuario?.nombre || "",
    email: usuario?.email || "",
    telefono: usuario?.telefono || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(form);
    setEditMode(false);
  };

  if (!editMode) {
    return (
      <CardBase
        image="/path/to/profile.jpg"
        title={form.nombre || "Usuario"}
        text={`${form.email} • ${form.telefono}`}
        buttonText="Editar"
        onButtonClick={() => setEditMode(true)}
        className="card-usuario"
      />
    );
  }

  return (
    <div className="card-usuario p-3 shadow-sm rounded-4">
      <h5 className="fw-bold mb-3">Editar Usuario</h5>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control name="nombre" value={form.nombre} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" value={form.email} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control name="telefono" value={form.telefono} onChange={handleChange} />
        </Form.Group>
        <Button variant="success" onClick={handleSave} className="w-100 rounded-pill">
          Guardar Cambios
        </Button>
      </Form>
    </div>
  );
}
