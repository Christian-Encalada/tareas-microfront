import React, { useState } from 'react';
import styled from 'styled-components';
import { useCarrito } from '../context/CarritoContext';

const CarritoContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
`;

const Titulo = styled.h2`
  color: #f5576c;
  margin-bottom: 20px;
  font-size: 28px;
  text-align: center;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ListaProductos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ProductoItem = styled.div`
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  box-shadow: 0 4px 15px rgba(240, 147, 251, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

const ProductoInfo = styled.div`
  flex: 1;
`;

const ProductoNombre = styled.h3`
  margin: 0 0 8px 0;
  font-size: 20px;
`;

const ProductoPrecio = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #FFD700;
`;

const CantidadBadge = styled.span`
  background: rgba(255, 255, 255, 0.3);
  padding: 5px 12px;
  border-radius: 20px;
  margin-left: 10px;
  font-size: 14px;
`;

const BotonEliminar = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #c82333;
    transform: scale(1.05);
  }
`;

const MensajeVacio = styled.p`
  text-align: center;
  color: #999;
  font-size: 18px;
  padding: 40px;
`;

const Total = styled.div`
  margin-top: 25px;
  padding-top: 20px;
  border-top: 2px solid #f5576c;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalTexto = styled.h3`
  color: #f5576c;
  font-size: 24px;
  margin: 0;
`;

const Notificacion = styled.div`
  position: fixed;
  top: 80px;
  right: 20px;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  color: white;
  padding: 15px 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  z-index: 2000;
  animation: slideInRight 0.3s ease;

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

function CarritoList() {
  const { productos, eliminarProducto: eliminarDelContext, calcularTotal } = useCarrito();
  const [notificacion, setNotificacion] = useState(null);

  const mostrarNotificacion = (mensaje) => {
    setNotificacion(mensaje);
    setTimeout(() => setNotificacion(null), 3000);
  };

  const handleEliminar = (id) => {
    const producto = productos.find(p => p.id === id);
    if (producto) {
      if (producto.cantidad > 1) {
        mostrarNotificacion(`➖ ${producto.name} (cantidad: ${producto.cantidad - 1})`);
      } else {
        mostrarNotificacion(`🗑️ ${producto.name} eliminado del carrito`);
      }
    }
    eliminarDelContext(id);
  };

  return (
    <CarritoContainer>
      <Titulo>🛒 Carrito de Compras</Titulo>
      
      {productos.length === 0 ? (
        <MensajeVacio>Tu carrito está vacío. ¡Agrega productos desde la página de Productos!</MensajeVacio>
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
                <BotonEliminar onClick={() => handleEliminar(producto.id)}>
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

export default CarritoList;
