import React, { useState } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import './Card-Usuario.css';

export default function CardUsuario({ usuario, onSave }) {
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    nombre: usuario?.nombre || '',
    email: usuario?.email || '',
    telefono: usuario?.telefono || '',
    direccion: usuario?.direccion || '',
    cargo: usuario?.cargo || '',
    descripcion: usuario?.descripcion || '',
    imagen: usuario?.imagen || '',
  });
  const [fileError, setFileError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const guardar = () => {
    if (onSave) onSave({ ...usuario, ...form });
    setEditMode(false);
  };

  const handleFileChange = (e) => {
    setFileError('');
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    // validate type
    if (!f.type.startsWith('image/')) {
      setFileError('Formato no válido. Selecciona una imagen.');
      return;
    }
    // validate size (2 MB)
    const maxSize = 2 * 1024 * 1024;
    if (f.size > maxSize) {
      setFileError('Archivo demasiado grande. Máx 2 MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setForm((s) => ({ ...s, imagen: reader.result }));
    };
    reader.onerror = () => setFileError('Error leyendo el archivo.');
    reader.readAsDataURL(f);
  };

  const clearImage = () => {
    setForm((s) => ({ ...s, imagen: '' }));
    setFileError('');
  };

  return (
    <Card className="user-card shadow-sm">
      <Card.Body>
        <Row className="g-3">
          <Col md={4} className="text-center">
            {form.imagen ? (
              <img src={form.imagen} alt={form.nombre} className="user-avatar rounded-circle" />
            ) : (
              <div className="user-avatar placeholder rounded-circle">No Image</div>
            )}
            <div className="mt-3">
              <strong className="d-block">{form.nombre || 'Administrador'}</strong>
              <small className="text-muted d-block">{form.cargo || 'Administrador'}</small>
            </div>
          </Col>

          <Col md={8}>
            {!editMode ? (
              <div>
                <p><strong>Correo:</strong> {form.email}</p>
                <p><strong>Teléfono:</strong> {form.telefono || <span className="text-muted">No agregado</span>}</p>
                <p><strong>Dirección:</strong> {form.direccion || <span className="text-muted">No agregado</span>}</p>
                <p><strong>Descripción:</strong></p>
                <p className="text-muted">{form.descripcion || <em>Sin descripción</em>}</p>
                <div className="d-flex gap-2 mt-3">
                  <Button size="sm" onClick={() => setEditMode(true)}>Editar</Button>
                </div>
              </div>
            ) : (
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control name="nombre" value={form.nombre} onChange={handleChange} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>Correo</Form.Label>
                      <Form.Control name="email" value={form.email} onChange={handleChange} />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>Teléfono</Form.Label>
                      <Form.Control name="telefono" value={form.telefono} onChange={handleChange} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>Dirección</Form.Label>
                      <Form.Control name="direccion" value={form.direccion} onChange={handleChange} />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-2">
                  <Form.Label>Cargo</Form.Label>
                  <Form.Control name="cargo" value={form.cargo} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Imagen (URL)</Form.Label>
                  <Form.Control name="imagen" value={form.imagen} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Subir avatar</Form.Label>
                  <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
                  {fileError && <div className="text-danger small mt-1">{fileError}</div>}
                  {form.imagen && (
                    <div className="mt-2 avatar-preview-wrap">
                      <img src={form.imagen} alt="preview" className="avatar-preview rounded-circle" />
                      <div>
                        <Button size="sm" variant="outline-secondary" className="mt-2" onClick={clearImage}>Quitar imagen</Button>
                      </div>
                    </div>
                  )}
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control as="textarea" rows={3} name="descripcion" value={form.descripcion} onChange={handleChange} />
                </Form.Group>

                <div className="d-flex gap-2 mt-2">
                  <Button size="sm" variant="primary" onClick={guardar}>Guardar</Button>
                  <Button size="sm" variant="outline-secondary" onClick={() => setEditMode(false)}>Cancelar</Button>
                </div>
              </Form>
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
