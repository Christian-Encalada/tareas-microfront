import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ProductosPage from './pages/ProductosPage';
import UsuariosPage from './pages/UsuariosPage';
import CarritoPage from './pages/CarritoPage';
import { GlobalStyles, AppContainer } from './styles/GlobalStyles';
import { CarritoProvider } from './context/CarritoContext';

function App() {
  return (
    <CarritoProvider>
      <GlobalStyles />
      <AppContainer>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/usuarios" element={<UsuariosPage />} />
          <Route path="/carrito" element={<CarritoPage />} />
        </Routes>
      </AppContainer>
    </CarritoProvider>
  );
}

export default App;
