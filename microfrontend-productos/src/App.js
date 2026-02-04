import React from 'react';
import ProductList from './components/ProductList';
import { GlobalStyles, Container, Header } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header>🛍️ Microfrontend de Productos</Header>
        <ProductList />
      </Container>
    </>
  );
}

export default App;
