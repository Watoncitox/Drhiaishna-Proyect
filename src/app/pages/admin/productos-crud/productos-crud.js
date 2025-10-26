import React, { useEffect, useState } from "react";
import NavbarAdmin from "../../../components/Navbar/Navbar-admin";
import { Table, Button, Modal, Form } from "react-bootstrap";
import { getProductos, createProducto, updateProducto, deleteProducto } from "../../../services/productsService";

function uid() {
  return "p" + Math.random().toString(36).slice(2,8);
}

export default function ProductosCRUD() {
  const [productos, setProductos] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ id: "", nombre: "", descripcion: "", precio: 0, imagen: "" });

  useEffect(() => { setProductos(getProductos()); }, []);

  const openNuevo = () => {
    setForm({ id: "", nombre: "", descripcion: "", precio: 0, imagen: "" });
    setShow(true);
  };
  const openEditar = (p) => { setForm(p); setShow(true); };

  const guardar = () => {
    if (!form.nombre || !form.precio) return;
    if (form.id) {
      updateProducto(form.id, form);
    } else {
      createProducto({ ...form, id: uid() });
    }
    setProductos(getProductos());
    setShow(false);
  };

  const eliminar = (id) => {
    if (window.confirm("¿Eliminar producto?")) {
      deleteProducto(id);
      setProductos(getProductos());
    }
  };

  return (
    <>
      <NavbarAdmin />
      <div className="container mt-5 pt-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Productos (CRUD)</h2>
          <Button onClick={openNuevo}>Nuevo</Button>
        </div>
        <Table bordered hover responsive>
          <thead className="table-light">
            <tr>
              <th>Nombre</th><th>Descripción</th><th>Precio</th><th>Imagen</th><th></th>
            </tr>
          </thead>
          <tbody>
            {productos.map(p => (
              <tr key={p.id}>
                <td>{p.nombre}</td>
                <td className="small text-muted">{p.descripcion}</td>
                <td>${p.precio.toLocaleString("es-CL")}</td>
                <td className="small">{p.imagen}</td>
                <td className="text-end">
                  <Button size="sm" variant="outline-secondary" className="me-2" onClick={() => openEditar(p)}>Editar</Button>
                  <Button size="sm" variant="outline-danger" onClick={() => eliminar(p.id)}>Eliminar</Button>
                </td>
              </tr>
            ))}
            {productos.length===0 && <tr><td colSpan="5" className="text-center text-muted">Sin productos</td></tr>}
          </tbody>
        </Table>
      </div>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton><Modal.Title>{form.id ? "Editar producto" : "Nuevo producto"}</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Nombre</Form.Label>
              <Form.Control value={form.nombre} onChange={e => setForm({...form, nombre: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" rows={2} value={form.descripcion} onChange={e => setForm({...form, descripcion: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="number" value={form.precio} onChange={e => setForm({...form, precio: Number(e.target.value)})} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>URL Imagen (opcional)</Form.Label>
              <Form.Control value={form.imagen} onChange={e => setForm({...form, imagen: e.target.value})} placeholder="/img/card/100.png" />
              <Form.Text className="text-muted">Puedes usar rutas relativas a /public</Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Cancelar</Button>
          <Button onClick={guardar}>Guardar</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
