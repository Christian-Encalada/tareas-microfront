import React from 'react';
import styled from 'styled-components';
import { 
  PerfilUsuario, 
  UserAvatar, 
  UserName, 
  UserEmail, 
  UserRole, 
  UserInfo, 
  InfoLabel, 
  InfoValue 
} from './PerfilUsuario';
import { BotonEditar } from './BotonEditar';

const UserGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
  margin-top: 20px;
`;

const RoleContainer = styled.div`
  text-align: center;
  margin-bottom: 15px;
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
