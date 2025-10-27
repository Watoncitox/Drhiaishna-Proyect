const KEY = "productos";

function seed() {
  const exists = localStorage.getItem(KEY);
  if (!exists) {
    const initial = [
      { id: "p1", nombre: "Crema Facial", descripcion: "Hidratación Diaria", precio: 15990, imagen: "/img/products/p1.jpg" },
      { id: "p2", nombre: "Mascarilla Detox", descripcion: "Purifica y revitaliza", precio: 12990, imagen: "/img/products/p3.jpg" },
      { id: "p3", nombre: "Serum Capilar", descripcion: "Reparación intensiva", precio: 19990, imagen: "/img/products/p2.jpg" },
    ];
    localStorage.setItem(KEY, JSON.stringify(initial));
    return;
  }
  try {
    const list = JSON.parse(exists);
    const needsFix = Array.isArray(list) && list.some(p => !p.imagen);
    if (needsFix) {
      const fixed = list.map((p, i) => ({
        ...p,
        imagen: p.imagen || `/img/products/p${(i % 3) + 1}.jpg`,
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
