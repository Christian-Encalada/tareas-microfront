import React, { useState } from 'react';
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

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const ModalTitle = styled.h2`
  color: #11998e;
  margin-bottom: 20px;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  color: #333;
  margin-bottom: 8px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: #11998e;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: #11998e;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

const Button = styled.button`
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  
  &.primary {
    background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(17, 153, 142, 0.3);
    }
  }
  
  &.secondary {
    background: #e0e0e0;
    color: #666;
    
    &:hover {
      background: #d0d0d0;
    }
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
  const [userList, setUserList] = useState(users);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({});

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
      projects: user.projects
    });
  };

  const handleSave = () => {
    setUserList(userList.map(user => 
      user.id === editingUser.id 
        ? { ...user, ...formData }
        : user
    ));
    
    // Emitir evento de usuario actualizado
    const event = new CustomEvent('usuario-actualizado', {
      detail: { ...editingUser, ...formData }
    });
    window.dispatchEvent(event);
    
    // Mostrar notificación de éxito
    alert(`✅ ¡Perfil de ${formData.name} actualizado exitosamente!`);
    setEditingUser(null);
  };

  const handleCancel = () => {
    setEditingUser(null);
    setFormData({});
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <>
      <UserGrid>
        {userList.map((user) => (
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
            
            <BotonEditar onClick={() => handleEdit(user)}>
              Editar Perfil
            </BotonEditar>
          </PerfilUsuario>
        ))}
      </UserGrid>

      {editingUser && (
        <Modal onClick={handleCancel}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalTitle>✏️ Editar Perfil de Usuario</ModalTitle>
            
            <FormGroup>
              <Label>Nombre Completo</Label>
              <Input 
                type="text" 
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Ej: Ana García"
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Email</Label>
              <Input 
                type="email" 
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Ej: ana@ejemplo.com"
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Rol</Label>
              <Select 
                value={formData.role}
                onChange={(e) => handleInputChange('role', e.target.value)}
              >
                <option value="Administrador">Administrador</option>
                <option value="Desarrollador">Desarrollador</option>
                <option value="Diseñador">Diseñador</option>
                <option value="Product Manager">Product Manager</option>
                <option value="QA Tester">QA Tester</option>
              </Select>
            </FormGroup>
            
            <FormGroup>
              <Label>Proyectos Activos</Label>
              <Input 
                type="number" 
                value={formData.projects}
                onChange={(e) => handleInputChange('projects', parseInt(e.target.value) || 0)}
                min="0"
              />
            </FormGroup>
            
            <ButtonGroup>
              <Button className="secondary" onClick={handleCancel}>
                Cancelar
              </Button>
              <Button className="primary" onClick={handleSave}>
                💾 Guardar Cambios
              </Button>
            </ButtonGroup>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

export default UserList;
