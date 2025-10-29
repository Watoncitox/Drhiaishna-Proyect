import React, { useEffect, useState } from "react";
import NavbarAdmin from "../../../components/Navbar/Navbar-admin";
import "./productos-crud.css";
import FormProducto from "./components/FormProducto";
import TablaProductos from "./components/TablaProductos";
import { getProductos, createProducto, updateProducto, deleteProducto } from "../../../services/productsService";

export default function ProductosCRUD() {
  const [list, setList] = useState([]);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => { setList(getProductos()); }, []);

  const handleSave = (producto) => {
    if (editItem) {
      updateProducto(editItem.id, { ...editItem, ...producto });
    } else {
      const id = `p${Date.now()}`;
      createProducto({ id, ...producto });
    }
    setList(getProductos());
    setEditItem(null);
  };

  const handleDelete = (id) => {
    deleteProducto(id);
    setList(getProductos());
  };

  return (
    <>
      {/* Si en App.js ya muestras Navbar por rol, puedes quitar esta línea */}
      <NavbarAdmin />
      <div className="productos-crud-page container mt-5 pt-5">
        <h2>Productos (CRUD)</h2>
        <FormProducto onSave={handleSave} editItem={editItem} />
        <TablaProductos data={list} onEdit={setEditItem} onDelete={handleDelete} />
      </div>
    </>
  );
}
