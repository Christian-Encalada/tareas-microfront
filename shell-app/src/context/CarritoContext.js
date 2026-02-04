import React, { createContext, useState, useContext, useEffect } from 'react';

const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const channel = new BroadcastChannel('carrito-channel');

    const handleProductoAgregado = (event) => {
      const producto = event.detail;
      agregarProducto(producto);
    };

    const handleBroadcastMessage = (event) => {
      const { action, data } = event.data;
      if (action === 'producto-agregado') {
        agregarProducto(data);
      }
    };

    window.addEventListener('producto-agregado', handleProductoAgregado);
    channel.addEventListener('message', handleBroadcastMessage);

    return () => {
      window.removeEventListener('producto-agregado', handleProductoAgregado);
      channel.close();
    };
  }, []);

  const agregarProducto = (producto) => {
    setProductos(prevProductos => {
      const productoExistente = prevProductos.find(p => p.id === producto.id);
      
      if (productoExistente) {
        return prevProductos.map(p =>
          p.id === producto.id
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        );
      } else {
        return [...prevProductos, { ...producto, cantidad: 1 }];
      }
    });
  };

  const eliminarProducto = (id) => {
    setProductos(prevProductos => {
      const producto = prevProductos.find(p => p.id === id);
      
      if (producto.cantidad > 1) {
        return prevProductos.map(p =>
          p.id === id
            ? { ...p, cantidad: p.cantidad - 1 }
            : p
        );
      } else {
        return prevProductos.filter(p => p.id !== id);
      }
    });
  };

  const calcularTotal = () => {
    return productos.reduce((total, producto) => {
      const precio = parseFloat(producto.price.replace(/[$,]/g, ''));
      return total + (precio * producto.cantidad);
    }, 0);
  };

  return (
    <CarritoContext.Provider value={{ productos, agregarProducto, eliminarProducto, calcularTotal }}>
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarrito debe usarse dentro de CarritoProvider');
  }
  return context;
}
