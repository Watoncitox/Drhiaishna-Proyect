import imgP1 from "../assets/img/fondo/Productos/p1.jpg";
import imgP2 from "../assets/img/fondo/Productos/p2.jpg";
import imgP3 from "../assets/img/fondo/Productos/p3.jpg";

const KEY = "productos_v3"; 

function seed() {
  const exists = localStorage.getItem(KEY);
  if (!exists) {
    const initial = [
      { id: "p1", nombre: "Crema Facial",       descripcion: "Hidratación diaria",       precio: 15990, imagen: imgP1 },
      { id: "p2", nombre: "Mascarilla Detox",   descripcion: "Purifica y revitaliza",     precio: 12990, imagen: imgP2 },
      { id: "p3", nombre: "Serum Capilar",      descripcion: "Reparación intensiva",      precio: 19990, imagen: imgP3 },
    ];
    localStorage.setItem(KEY, JSON.stringify(initial));
    return;
  }

  try {
    const list = JSON.parse(exists);
    const imgs = [imgP1, imgP2, imgP3];
    const needsFix = Array.isArray(list) && list.some(p => !p?.imagen);
    if (needsFix) {
      const fixed = list.map((p, i) => ({ ...p, imagen: p.imagen || imgs[i % imgs.length] }));
      localStorage.setItem(KEY, JSON.stringify(fixed));
    }
  } catch {
    localStorage.removeItem(KEY);
    seed();
  }
}

export function getProductos() {
  seed();
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function getProducto(id) {
  return getProductos().find(p => p.id === id) || null;
}

export function createProducto(prod) {
  const list = getProductos();
  list.push(prod);
  localStorage.setItem(KEY, JSON.stringify(list));
  return prod;
}

export function updateProducto(id, patch) {
  const list = getProductos().map(p => p.id === id ? { ...p, ...patch } : p);
  localStorage.setItem(KEY, JSON.stringify(list));
  return list.find(p => p.id === id);
}

export function deleteProducto(id) {
  const list = getProductos().filter(p => p.id !== id);
  localStorage.setItem(KEY, JSON.stringify(list));
}
