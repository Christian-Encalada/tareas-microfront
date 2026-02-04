import styled from 'styled-components';

// Componente estilizado para la tarjeta de producto
export const CardProducto = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: white;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  margin-bottom: 15px;
`;

export const ProductTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: white;
`;

export const ProductPrice = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #FFD700;
`;

export const ProductDescription = styled.p`
  font-size: 0.95rem;
  margin-bottom: 15px;
  opacity: 0.9;
  line-height: 1.5;
`;
