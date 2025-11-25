import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CardUsuario from '../../../components/Card/Card-Usuario/Card-Usuario';
import './usuario-admin.css';
import { useAuth } from '../../../context/AuthContext';

export default function UsuarioAdmin() {
  const { usuario, updateUsuario, logout, notify } = useAuth();
  const navigate = useNavigate();

  const handleSave = (updated) => {
    updateUsuario(updated);
    notify({ title: 'Guardado', body: 'Datos guardados correctamente', variant: 'success' });
  };

  const handleLogout = () => {
    logout();
    navigate('/inicio-sesion');
  };

  return (
    <Container className="mt-5 pt-5 usuario-admin-page">
      <h2 className="mb-4">Mi cuenta (Administrador)</h2>
      {usuario ? (
        <>
          <CardUsuario usuario={usuario} onSave={handleSave} />

          <section className="mt-4">
            <h5>Opciones</h5>
            <p className="text-muted">Aquí puedes cerrar sesión o realizar acciones relativas a tu cuenta.</p>
            <div>
              <Button variant="outline-danger" onClick={handleLogout}>Cerrar sesión</Button>
            </div>
          </section>
        </>
      ) : (
        <p className="text-muted">No se encontró información del usuario. Por favor inicia sesión.</p>
      )}
    </Container>
  );
}
