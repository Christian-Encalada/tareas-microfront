import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  &.active {
    background: rgba(255, 255, 255, 0.3);
    font-weight: 700;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

function Navigation() {
  return (
    <Nav>
      <NavContainer>
        <Logo>
          🏢 Shell App
        </Logo>
        <NavLinks>
          <StyledNavLink to="/" end>
            🏠 Inicio
          </StyledNavLink>
          <StyledNavLink to="/productos">
            🛍️ Productos
          </StyledNavLink>
          <StyledNavLink to="/usuarios">
            👥 Usuarios
          </StyledNavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navigation;
