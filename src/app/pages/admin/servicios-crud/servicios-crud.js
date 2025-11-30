import React, { useState, useEffect } from 'react';
import { Container, Button, Table, Alert, Form } from 'react-bootstrap';
import HeroBanner from '../../../components/Hero/HeroBanner';
import { servicesService } from '../../../services/servicesService';
// NavbarAdmin is provided globally by App.js when the user is admin.
import './servicios-crud.css';
// Nota: Asume que las clases de Bootstrap ya están disponibles en tu proyecto.


const ServiciosCRUD = () => {
    // Estado para la lista de servicios (editable)
    const [services, setServices] = useState([]);
    useEffect(() => {
        setServices(servicesService.getServices());
        const off = servicesService.onChange((list) => setServices(list));
        return off;
    }, []);
    // Estado para mostrar mensajes al administrador
    const [message, setMessage] = useState(null);

    /**
     * Maneja los cambios en los campos de Precio y Stock de la tabla.
     * @param {number} id - ID del servicio que se está modificando.
     * @param {string} field - Campo que se está actualizando ('price' o 'available').
     * @param {string} value - Nuevo valor.
     */
    const handleChange = (id, field, value) => {
        const parsedValue = field === 'price' ? parseFloat(value) : parseInt(value, 10);
        
        // Evita NaN o valores negativos para stock
        if (isNaN(parsedValue) || parsedValue < 0) {
            // Permite un campo vacío temporalmente para la edición de precio
            if (field === 'price' && value === '') return; 
            if (field === 'available' && value === '') return; 
            
            setMessage({ type: 'danger', text: 'El valor debe ser numérico y no negativo.' });
            return;
        }

        const updatedServices = services.map(service => 
            service.id === id ? { ...service, [field]: parsedValue } : service
        );
        setServices(updatedServices);
        setMessage(null); // Limpia el mensaje si el cambio es válido
    };

    /**
     * Simula el guardado de los cambios a la base de datos.
     */
    const handleSaveChanges = () => {
        try {
            servicesService.saveServices(services);
            setMessage({ type: 'success', text: '¡Cambios guardados exitosamente en el sistema!' });
            setTimeout(() => setMessage(null), 4000);
        } catch (e) {
            setMessage({ type: 'danger', text: 'Error al guardar los cambios.' });
        }
    };
    
    // --- Funciones de Gestión (Simulación de CRUD de ejemplo) ---
    // NOTA: Estas funciones son placeholders. Implementa la lógica real de modal/formulario aquí.

    const handleNew = () => {
        const id = `new-${Date.now()}`;
        const nuevo = { id, name: 'Nuevo servicio', price: 0, duration: '60', available: 0, active: false, category: 'cosmetologia' };
        servicesService.createService(nuevo);
        setMessage({ type: 'success', text: 'Servicio creado (temporal). Edita sus campos y guarda.' });
        setTimeout(() => setMessage(null), 3000);
    };

    const handleDelete = (id) => {
        if (window.confirm(`¿Estás seguro de ELIMINAR el servicio con ID ${id}?`)) {
            servicesService.deleteService(id);
            setMessage({ type: 'warning', text: `Servicio ID ${id} eliminado.` });
            setTimeout(() => setMessage(null), 3000);
        }
    };
    // ------------------------------------------------------------------

    return (
        <>
            <div className="page-hero admin-hero container-fluid py-5">
                <HeroBanner title="Servicios (Admin)" subtitle="Gestiona los servicios ofrecidos" gradient="rgba(0,0,0,0.45)" showButton={false} />
            </div>

            <Container className="my-4 pt-4">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h1 className="fw-bold text-dark">Gestión de Servicios 💅</h1>
                    <Button variant="success" onClick={handleNew}>
                        + Añadir Nuevo
                    </Button>
                </header>

            {/* Muestra mensajes de estado */}
            {message && <Alert variant={message.type} className="text-center">{message.text}</Alert>}

            <div className="shadow-lg rounded bg-white p-4">
                <Table striped bordered hover responsive className="text-center align-middle">
                    <thead>
                        <tr className="bg-light">
                            <th>ID</th>
                            <th>Servicio</th>
                            <th style={{ width: '150px' }}>Precio ($)</th>
                            <th style={{ width: '100px' }}>Stock</th>
                            <th>Duración</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service) => (
                            <tr key={service.id}>
                                <td>{service.id}</td>
                                <td className="text-start fw-medium">{service.name}</td>
                                
                                {/* Campo editable: Precio */}
                                <td>
                                    <Form.Control
                                        type="number"
                                        step="0.01"
                                        value={service.price}
                                        onChange={(e) => handleChange(service.id, 'price', e.target.value)}
                                        className="text-center"
                                    />
                                </td>
                                
                                {/* Campo editable: Stock */}
                                <td>
                                    <Form.Control
                                        type="number"
                                        value={service.available}
                                        onChange={(e) => handleChange(service.id, 'available', e.target.value)}
                                        className="text-center"
                                    />
                                </td>
                                
                                <td>{service.duration}</td>
                                
                                <td>
                                    {/* Indicador de estado */}
                                    <span className={`badge ${service.active ? 'bg-success' : 'bg-danger'}`}>
                                        {service.active ? 'Disponible' : 'Desactivado'}
                                    </span>
                                </td>
                                
                                <td>
                                    <div className="d-flex justify-content-center gap-2">
                                        {/* NOTA: En React no se usa window.confirm() o alert(), 
                                                pero lo dejo para la simulación */}
                                        <Button variant="outline-danger" size="sm" onClick={() => handleDelete(service.id)}>
                                            Eliminar
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            
            <div className="mt-4 text-end">
                <Button 
                    variant="primary" 
                    size="lg" 
                    onClick={handleSaveChanges}
                    disabled={!!message && message.type === 'danger'} // Deshabilita si hay errores
                >
                    Guardar Cambios
                </Button>
            </div>

            {services.length === 0 && (
                <div className="alert alert-info mt-4 text-center">
                    No hay servicios registrados. ¡Crea el primero!
                </div>
            )}
        </Container>
        </>
    );
};

export default ServiciosCRUD;