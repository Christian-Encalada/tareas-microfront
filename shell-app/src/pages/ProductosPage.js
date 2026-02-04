import React from 'react';
import styled from 'styled-components';
// Importamos los componentes del microfrontend de productos
import ProductList from '../microfrontends/ProductList';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const PageTitle = styled.h1`
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 15px;
`;

const PageDescription = styled.p`
  color: #666;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
`;

const InfoBox = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  text-align: center;
`;

function ProductosPage() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>🛍️ Catálogo de Productos</PageTitle>
        <PageDescription>
          Este microfrontend usa Styled Components con estilos completamente aislados.
          Los estilos no interfieren con otros módulos.
        </PageDescription>
      </PageHeader>
      
      <InfoBox>
        💡 <strong>Microfrontend de Productos</strong> - Estilos encapsulados con hash único
      </InfoBox>
      
      <ProductList />
    </PageContainer>
  );
}

export default ProductosPage;
