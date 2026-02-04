import React from 'react';
import styled from 'styled-components';
// Importamos los componentes del microfrontend de usuarios
import UserList from '../microfrontends/UserList';

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
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  text-align: center;
`;

function UsuariosPage() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>👥 Gestión de Usuarios</PageTitle>
        <PageDescription>
          Este microfrontend también usa Styled Components independiente.
          Ambos microfrontends coexisten sin conflictos de estilos.
        </PageDescription>
      </PageHeader>
      
      <InfoBox>
        💡 <strong>Microfrontend de Usuarios</strong> - Estilos encapsulados con hash único
      </InfoBox>
      
      <UserList />
    </PageContainer>
  );
}

export default UsuariosPage;
