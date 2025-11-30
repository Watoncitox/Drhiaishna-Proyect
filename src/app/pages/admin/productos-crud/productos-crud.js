import React, { useEffect, useState } from "react";
import "./productos-crud.css";
import HeroBanner from "../../../components/Hero/HeroBanner";
import { Container } from "react-bootstrap";
import TablaProductos from "./components/TablaProductos";
import { getProductos, createProducto, updateProducto, deleteProducto } from "../../../services/productsService";

export default function ProductosCRUD() {
  const [list, setList] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ nombre: "", descripcion: "", precio: "", imagen: "" });
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    setList(getProductos());
  }, []);

  const handleSave = (producto) => {
    // producto expected: { nombre, descripcion, precio, imagen }
    if (editItem) {
      updateProducto(editItem.id, { ...editItem, ...producto });
    } else {
      const id = `p${Date.now()}`;
      createProducto({ id, ...producto });
    }
    setList(getProductos());
    setEditItem(null);
    setShowModal(false);
    setForm({ nombre: "", descripcion: "", precio: "", imagen: "" });
    setFileName("");
  };

  const handleDelete = (id) => {
    if (!window.confirm("¿Eliminar este producto?")) return;
    deleteProducto(id);
    setList(getProductos());
  };

  const openNew = () => {
    setEditItem(null);
    setForm({ nombre: "", descripcion: "", precio: "", imagen: "" });
    setFileName("");
    setShowModal(true);
  };

  const openEdit = (p) => {
    setEditItem(p);
    setForm({ nombre: p.nombre || "", descripcion: p.descripcion || "", precio: p.precio || "", imagen: p.imagen || "" });
    setFileName("");
    setShowModal(true);
  };

  const handleFileChange = (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    setFileName(f.name);
    const reader = new FileReader();
    reader.onload = (ev) => {
      setForm((s) => ({ ...s, imagen: ev.target.result }));
    };
    reader.readAsDataURL(f);
  };

  const submitModal = (e) => {
    e.preventDefault();
    if (!form.nombre || form.precio === "" || form.precio === null) {
      alert("Nombre y precio son obligatorios");
      return;
    }
    const payload = { nombre: form.nombre, descripcion: form.descripcion, precio: Number(form.precio), imagen: form.imagen };
    handleSave(payload);
  };

  return (
    <>
      <div className="page-hero admin-hero container-fluid py-5">
        <HeroBanner title="Productos" subtitle="Administra el catálogo de productos" gradient="rgba(0,0,0,0.45)" showButton={false} />
      </div>

      <Container className="productos-crud-page mt-4 pt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Productos (CRUD)</h2>
          <div>
            <button className="btn btn-success me-2" onClick={openNew}>+ Añadir Producto</button>
          </div>
        </div>
        <TablaProductos data={list} onEdit={openEdit} onDelete={handleDelete} />

        {/* Modal de creación/edición */}
        <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" aria-hidden={!showModal}>
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <form className="modal-content" onSubmit={submitModal}>
              <div className="modal-header">
                <h5 className="modal-title">{editItem ? 'Editar producto' : 'Nuevo producto'}</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={()=>setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-md-8">
                    <input className="form-control" placeholder="Nombre" value={form.nombre} onChange={(e)=>setForm({...form, nombre:e.target.value})} />
                    <textarea className="form-control mt-2" placeholder="Descripción" rows={4} value={form.descripcion} onChange={(e)=>setForm({...form, descripcion:e.target.value})}></textarea>
                    <input type="number" className="form-control mt-2" placeholder="Precio" value={form.precio} onChange={(e)=>setForm({...form, precio:e.target.value})} />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Imagen para cliente</label>
                    <input type="file" accept="image/*" className="form-control" onChange={handleFileChange} />
                    {fileName && <small className="text-muted">{fileName}</small>}
                    {form.imagen && (
                      <div className="mt-3">
                        <img src={form.imagen} alt="preview" style={{ width: '100%', borderRadius: 8, boxShadow: '0 6px 20px rgba(0,0,0,0.08)' }} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-secondary" onClick={()=>setShowModal(false)}>Cancelar</button>
                <button type="submit" className="btn btn-primary">{editItem ? 'Actualizar' : 'Crear'}</button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}
