import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Cargar carrito desde localStorage
  useEffect(() => {
    const saved = localStorage.getItem("carrito");
    if (saved) setCarrito(JSON.parse(saved));
  }, []);

  // Guardar carrito
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const addToCart = (producto) => {
    setCarrito((prev) => {
      const exists = prev.find((p) => p.id === producto.id);
      if (exists) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...producto, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => setCarrito([]);

  return (
    <CartContext.Provider value={{ carrito, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
