import imgCrema from "../../asent/img/fondo/crema.jpg";
import imgMascarilla from "../../asent/img/fondo/mascarilla.jpg";
import imgSerum from "../../asent/img/fondo/serum.jpg";

const KEY = "productos";

function seed() {
  const exists = localStorage.getItem(KEY);
  if (!exists) {
    const initial = [
      { id: "p1", nombre: "Crema Facial", descripcion: "Hidratación diaria", precio: 15990, imagen: imgCrema },
      { id: "p2", nombre: "Mascarilla Detox", descripcion: "Purifica y revitaliza", precio: 12990, imagen: imgMascarilla },
      { id: "p3", nombre: "Serum Capilar", descripcion: "Reparación intensiva", precio: 19990, imagen: imgSerum },
    ];
    localStorage.setItem(KEY, JSON.stringify(initial));
    return;
  }

  try {
    const list = JSON.parse(exists);
    const needsFix = Array.isArray(list) && list.some(p => !p.imagen);
    if (needsFix) {
      const imgs = [imgCrema, imgMascarilla, imgSerum];
      const fixed = list.map((p, i) => ({
        ...p,
        imagen: p.imagen || imgs[i % imgs.length],
      }));
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
