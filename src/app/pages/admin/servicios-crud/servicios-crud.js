import React, { useState } from 'react';
import { Container, Button, Table, Alert, Form } from 'react-bootstrap';
import NavbarAdmin from '../../../components/Navbar/Navbar-admin';
import './servicios-crud.css';
// Nota: Asume que las clases de Bootstrap ya están disponibles en tu proyecto.


// 💄 Datos de ejemplo (simulan ser cargados desde una API)
const initialServices = [
    { id: 1, name: 'Facial Piel de Seda', price: 75.00, duration: '90 min', available: 15, active: true },
    { id: 2, name: 'Maquillaje de Evento Premium', price: 120.00, duration: '120 min', available: 5, active: true },
    { id: 3, name: 'Corte y Coloración Tendencia', price: 90.00, duration: '150 min', available: 20, active: false },
    { id: 4, name: 'Manicura Spa y Gelish', price: 45.00, duration: '60 min', available: 30, active: true },
    { id: 5, name: 'Lifting y Laminado Total', price: 65.00, duration: '75 min', available: 10, active: true },
];

const ServiciosCRUD = () => {
    // Estado para la lista de servicios (editable)
    const [services, setServices] = useState(initialServices);
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
        // En una aplicación real, aquí enviarías 'services' al backend (API)
        console.log('Datos a guardar:', services);
        
        // Simulación de una llamada API exitosa
        setMessage({ type: 'success', text: '¡Cambios guardados exitosamente en el sistema!' });
        
        // Opcional: Deshabilitar el mensaje después de unos segundos
        setTimeout(() => setMessage(null), 5000); 
    };
    
    // --- Funciones de Gestión (Simulación de CRUD de ejemplo) ---
    // NOTA: Estas funciones son placeholders. Implementa la lógica real de modal/formulario aquí.

    const handleNew = () => {
        setMessage({ type: 'info', text: 'Simulación: Abrir formulario para CREAR un nuevo servicio.' });
    };

    const handleDelete = (id) => {
        if(window.confirm(`¿Estás seguro de ELIMINAR el servicio con ID ${id}?`)) {
             const newServices = services.filter(service => service.id !== id);
             setServices(newServices);
             setMessage({ type: 'warning', text: `Servicio ID ${id} eliminado temporalmente de la vista.` });
        }
    };
    // ------------------------------------------------------------------

    return (
        <Container className="my-5">
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
    );
};

export default ServiciosCRUD;