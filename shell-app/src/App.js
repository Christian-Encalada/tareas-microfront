import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ProductosPage from './pages/ProductosPage';
import UsuariosPage from './pages/UsuariosPage';
import { GlobalStyles, AppContainer } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/usuarios" element={<UsuariosPage />} />
        </Routes>
      </AppContainer>
    </>
  );
}

export default App;
