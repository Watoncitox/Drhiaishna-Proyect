/** Simple localStorage-backed service for products */
const KEY = "productos";

function seed() {
  const exists = localStorage.getItem(KEY);
  if (!exists) {
    const initial = [
      { id: "p1", nombre: "Shampoo Kérastase", descripcion: "Nutre y fortalece", precio: 15990, imagen: "/img/card/100.png" },
      { id: "p2", nombre: "Acondicionador L'Oréal", descripcion: "Brillo y suavidad", precio: 12990, imagen: "/img/card/200.png" },
      { id: "p3", nombre: "Serum Capilar", descripcion: "Reparación intensiva", precio: 19990, imagen: "/img/card/300.png" },
    ];
    localStorage.setItem(KEY, JSON.stringify(initial));
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
