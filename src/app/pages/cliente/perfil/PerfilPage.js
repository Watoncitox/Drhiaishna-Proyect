
import React, { useEffect } from 'react';
import { Container, Card, ListGroup, Button, Alert } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import './PerfilPage.css'; // 👈 Asegura que el CSS se importe
import { useAuth } from '../../../context/AuthContext';

const PerfilPage = () => {
    const { usuario, notify } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!usuario) navigate('/inicio-sesion');
    }, [navigate, usuario]);

    const handleChangePassword = () => {
        notify({ title: 'Info', body: 'Simulación: abrir cambio de contraseña', variant: 'info' });
    };

    if (!usuario) {
        return <Alert variant="info" className="text-center mt-5">Cargando perfil...</Alert>;
    }

    // Determina si es administrador (insensible a mayúsculas)
    const isAdmin = String(usuario.rol || '').toLowerCase() === 'admin';

    return (
        // perfil-container: Clase que centra el contenido horizontalmente y limita el ancho
        <Container className="my-5 perfil-container"> 
            
            <header className="perfil-header">
                <h1 className="mb-4">Hola, {usuario.nombre}!</h1>
            </header>
            
            {/* Tarjeta de Información General */}
            <Card className="perfil-card shadow-lg"> 
                <Card.Header className="perfil-card-header-main">
                    Detalles de tu Cuenta
                </Card.Header>
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="perfil-list-item"><strong>Email:</strong> {usuario.email}</ListGroup.Item>
                        <ListGroup.Item className="perfil-list-item"><strong>Nombre Completo:</strong> {usuario.nombre}</ListGroup.Item>
                        <ListGroup.Item className="perfil-list-item"><strong>Rol:</strong> {isAdmin ? 'Administrador' : 'Cliente'}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                
                <Card.Footer className="text-center bg-white border-0 p-3">
                    <Button variant="outline-dark" onClick={handleChangePassword}>
                        Cambiar Contraseña
                    </Button>
                </Card.Footer>
            </Card>

            {/* OPCIONES DE ADMINISTRADOR (CONDICIONAL) */}
            {isAdmin && (
                <Card className="perfil-card border-success shadow-lg"> 
                    <Card.Header className="admin-card-header">
                        Panel de Administración
                    </Card.Header>
                    <Card.Body>
                        <h5 className="mb-3">Accesos Rápidos:</h5>
                        <div className="admin-access-buttons">
                            {/* Botón de Gestión de Servicios */}
                            <Button as={NavLink} to="/admin/servicios" variant="success">
                                Gestionar Servicios
                            </Button>
                            {/* Botón de Gestión de Clientes */}
                            <Button as={NavLink} to="/admin/clientes" variant="info">
                                Gestionar Clientes
                            </Button>
                            <Button as={NavLink} to="/admin/productos" variant="warning">
                                Gestionar Productos
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            )}
        </Container>
    );
};

export default PerfilPage;