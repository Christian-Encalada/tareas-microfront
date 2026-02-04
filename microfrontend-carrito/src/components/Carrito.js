import React, { useState, useEffect } from 'react';
import {
  CarritoContainer,
  Titulo,
  ListaProductos,
  ProductoItem,
  ProductoInfo,
  ProductoNombre,
  ProductoPrecio,
  BotonEliminar,
  MensajeVacio,
  Total,
  TotalTexto,
  CantidadBadge,
  Notificacion
} from './CarritoList';

function Carrito() {
  const [productos, setProductos] = useState([]);
  const [notificacion, setNotificacion] = useState(null);

  const mostrarNotificacion = (mensaje) => {
    setNotificacion(mensaje);
    setTimeout(() => setNotificacion(null), 3000);
  };

  useEffect(() => {
    const channel = new BroadcastChannel('carrito-channel');

    const handleProductoAgregado = (event) => {
      const producto = event.detail;
      
      setProductos(prevProductos => {
        const productoExistente = prevProductos.find(p => p.id === producto.id);
        
        if (productoExistente) {
          mostrarNotificacion(`➕ ${producto.name} (cantidad actualizada)`);
          return prevProductos.map(p =>
            p.id === producto.id
              ? { ...p, cantidad: p.cantidad + 1 }
              : p
          );
        } else {
          mostrarNotificacion(`🎉 ${producto.name} agregado al carrito`);
          return [...prevProductos, { ...producto, cantidad: 1 }];
        }
      });
    };

    const handleBroadcastMessage = (event) => {
      const { action, data } = event.data;
      if (action === 'producto-agregado') {
        handleProductoAgregado({ detail: data });
      }
    };

    window.addEventListener('producto-agregado', handleProductoAgregado);
    channel.addEventListener('message', handleBroadcastMessage);

    return () => {
      window.removeEventListener('producto-agregado', handleProductoAgregado);
      channel.close();
    };
  }, []);

  const eliminarProducto = (id) => {
    setProductos(prevProductos => {
      const producto = prevProductos.find(p => p.id === id);
      
      if (producto.cantidad > 1) {
        mostrarNotificacion(`➖ ${producto.name} (cantidad: ${producto.cantidad - 1})`);
        return prevProductos.map(p =>
          p.id === id
            ? { ...p, cantidad: p.cantidad - 1 }
            : p
        );
      } else {
        mostrarNotificacion(`🗑️ ${producto.name} eliminado del carrito`);
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
    <CarritoContainer>
      <Titulo>🛒 Carrito de Compras</Titulo>
      
      {productos.length === 0 ? (
        <MensajeVacio>Tu carrito está vacío. ¡Agrega productos para comenzar!</MensajeVacio>
      ) : (
        <>
          <ListaProductos>
            {productos.map((producto) => (
              <ProductoItem key={producto.id}>
                <ProductoInfo>
                  <ProductoNombre>
                    {producto.icon} {producto.name}
                    <CantidadBadge>x{producto.cantidad}</CantidadBadge>
                  </ProductoNombre>
                  <ProductoPrecio>{producto.price} c/u</ProductoPrecio>
                </ProductoInfo>
                <BotonEliminar onClick={() => eliminarProducto(producto.id)}>
                  Eliminar
                </BotonEliminar>
              </ProductoItem>
            ))}
          </ListaProductos>
          
          <Total>
            <TotalTexto>Total:</TotalTexto>
            <TotalTexto>${calcularTotal().toFixed(2)}</TotalTexto>
          </Total>
        </>
      )}

      {notificacion && <Notificacion>{notificacion}</Notificacion>}
    </CarritoContainer>
  );
}

export default Carrito;
