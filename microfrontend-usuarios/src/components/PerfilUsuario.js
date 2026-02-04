import styled from 'styled-components';

// Componente estilizado para el perfil de usuario
export const PerfilUsuario = styled.div`
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: white;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const UserAvatar = styled.div`
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin: 0 auto 20px;
  border: 4px solid rgba(255, 255, 255, 0.5);
`;

export const UserName = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 8px;
  text-align: center;
  color: white;
`;

export const UserEmail = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  opacity: 0.9;
  text-align: center;
`;

export const UserRole = styled.span`
  display: inline-block;
  background: rgba(255, 255, 255, 0.3);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const UserInfo = styled.div`
  margin: 15px 0;
  padding: 15px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
`;

export const InfoLabel = styled.p`
  font-size: 0.85rem;
  opacity: 0.8;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const InfoValue = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
`;
