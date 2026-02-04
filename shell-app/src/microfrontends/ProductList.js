import React from 'react';
import styled from 'styled-components';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 20px;
`;

const CardProducto = styled.div`
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

const ProductImage = styled.div`
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

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: white;
`;

const ProductPrice = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #FFD700;
`;

const ProductDescription = styled.p`
  font-size: 0.95rem;
  margin-bottom: 15px;
  opacity: 0.9;
  line-height: 1.5;
`;

const BotonComprar = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
  }
`;

const products = [
  {
    id: 1,
    name: 'Laptop Pro',
    price: '$1,299.99',
    description: 'Potente laptop para desarrollo y diseño profesional',
    icon: '💻'
  },
  {
    id: 2,
    name: 'Smartphone X',
    price: '$899.99',
    description: 'Último modelo con cámara de 108MP y 5G',
    icon: '📱'
  },
  {
    id: 3,
    name: 'Auriculares Pro',
    price: '$299.99',
    description: 'Cancelación de ruido activa y sonido premium',
    icon: '🎧'
  },
  {
    id: 4,
    name: 'Smartwatch Elite',
    price: '$449.99',
    description: 'Monitor de salud y fitness con GPS integrado',
    icon: '⌚'
  }
];

function ProductList() {
  const handleCompra = (productName) => {
    alert(`¡Has agregado "${productName}" al carrito! 🛒`);
  };

  return (
    <ProductGrid>
      {products.map((product) => (
        <CardProducto key={product.id}>
          <ProductImage>{product.icon}</ProductImage>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>{product.price}</ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>
          <BotonComprar onClick={() => handleCompra(product.name)}>
            Comprar Ahora
          </BotonComprar>
        </CardProducto>
      ))}
    </ProductGrid>
  );
}

export default ProductList;
