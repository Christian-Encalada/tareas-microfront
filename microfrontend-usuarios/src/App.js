import React from 'react';
import UserList from './components/UserList';
import { GlobalStyles, Container, Header } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header>👥 Microfrontend de Usuarios</Header>
        <UserList />
      </Container>
    </>
  );
}

export default App;
