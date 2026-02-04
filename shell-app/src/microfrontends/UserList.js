import React from 'react';
import styled from 'styled-components';

const UserGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
  margin-top: 20px;
`;

const PerfilUsuario = styled.div`
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

const UserAvatar = styled.div`
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

const UserName = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 8px;
  text-align: center;
  color: white;
`;

const UserEmail = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  opacity: 0.9;
  text-align: center;
`;

const UserRole = styled.span`
  display: inline-block;
  background: rgba(255, 255, 255, 0.3);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 15px;
`;

const UserInfo = styled.div`
  margin: 15px 0;
  padding: 15px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
`;

const InfoLabel = styled.p`
  font-size: 0.85rem;
  opacity: 0.8;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const InfoValue = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
`;

const RoleContainer = styled.div`
  text-align: center;
  margin-bottom: 15px;
`;

const BotonEditar = styled.button`
  background-color: #28a745;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: #218838;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.3);
  }

  &::before {
    content: '✏️';
  }
`;

const users = [
  {
    id: 1,
    name: 'Ana García',
    email: 'ana.garcia@ejemplo.com',
    role: 'Administrador',
    icon: '👩‍💼',
    joinDate: '15 Ene 2024',
    projects: 12
  },
  {
    id: 2,
    name: 'Carlos Ruiz',
    email: 'carlos.ruiz@ejemplo.com',
    role: 'Desarrollador',
    icon: '👨‍💻',
    joinDate: '03 Mar 2024',
    projects: 8
  },
  {
    id: 3,
    name: 'María López',
    email: 'maria.lopez@ejemplo.com',
    role: 'Diseñador',
    icon: '👩‍🎨',
    joinDate: '22 Feb 2024',
    projects: 15
  },
  {
    id: 4,
    name: 'Juan Pérez',
    email: 'juan.perez@ejemplo.com',
    role: 'Product Manager',
    icon: '👨‍💼',
    joinDate: '10 Abr 2024',
    projects: 6
  }
];

function UserList() {
  const handleEdit = (userName) => {
    alert(`Editando perfil de: ${userName} ✏️`);
  };

  return (
    <UserGrid>
      {users.map((user) => (
        <PerfilUsuario key={user.id}>
          <UserAvatar>{user.icon}</UserAvatar>
          <UserName>{user.name}</UserName>
          <UserEmail>{user.email}</UserEmail>
          <RoleContainer>
            <UserRole>{user.role}</UserRole>
          </RoleContainer>
          
          <UserInfo>
            <InfoLabel>Fecha de ingreso</InfoLabel>
            <InfoValue>{user.joinDate}</InfoValue>
          </UserInfo>
          
          <UserInfo>
            <InfoLabel>Proyectos activos</InfoLabel>
            <InfoValue>{user.projects}</InfoValue>
          </UserInfo>
          
          <BotonEditar onClick={() => handleEdit(user.name)}>
            Editar Perfil
          </BotonEditar>
        </PerfilUsuario>
      ))}
    </UserGrid>
  );
}

export default UserList;
