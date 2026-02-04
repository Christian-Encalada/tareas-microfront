import styled from 'styled-components';

export const CarritoContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
`;

export const Titulo = styled.h2`
  color: #f5576c;
  margin-bottom: 20px;
  font-size: 28px;
  text-align: center;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const ListaProductos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ProductoItem = styled.div`
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

export const ProductoInfo = styled.div`
  flex: 1;
`;

export const ProductoNombre = styled.h3`
  margin: 0 0 8px 0;
  font-size: 20px;
`;

export const ProductoPrecio = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #FFD700;
`;

export const CantidadBadge = styled.span`
  background: rgba(255, 255, 255, 0.3);
  padding: 5px 12px;
  border-radius: 20px;
  margin-left: 10px;
  font-size: 14px;
`;

export const BotonEliminar = styled.button`
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

export const MensajeVacio = styled.p`
  text-align: center;
  color: #999;
  font-size: 18px;
  padding: 40px;
`;

export const Total = styled.div`
  margin-top: 25px;
  padding-top: 20px;
  border-top: 2px solid #f5576c;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalTexto = styled.h3`
  color: #f5576c;
  font-size: 24px;
  margin: 0;
`;

export const Notificacion = styled.div`
  position: fixed;
  top: 20px;
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
