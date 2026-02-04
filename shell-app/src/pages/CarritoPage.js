import React from 'react';
import styled from 'styled-components';
import CarritoList from '../microfrontends/CarritoList';

const PageContainer = styled.div`
  padding: 2rem;
`;

const PageTitle = styled.h1`
  color: white;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

function CarritoPage() {
  return (
    <PageContainer>
      <PageTitle>🛒 Mi Carrito de Compras</PageTitle>
      <CarritoList />
    </PageContainer>
  );
}

export default CarritoPage;
