import React from 'react';
import styled from 'styled-components';
import { CardProducto, ProductImage, ProductTitle, ProductPrice, ProductDescription } from './CardProducto';
import { BotonComprar } from './BotonComprar';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 20px;
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
