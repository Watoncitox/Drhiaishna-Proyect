import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './servicio.css'; 

// 💄 Datos estáticos (solo lectura para el cliente)
const beautyServices = [
    {
        id: 1,
        title: 'Facial Piel de Seda',
        description: 'Un tratamiento profundo y personalizado con vapores de ozono y mascarillas con extractos naturales, ideal para hidratar y revitalizar la piel.',
        price: '$19.990',
        icon: '✨',
    },
    {
        id: 2,
        title: 'Maquillaje de Evento Premium',
        description: 'Maquillaje profesional con aerógrafo para bodas, graduaciones o eventos especiales. Incluye prueba previa y pestañas postizas de mink.',
        price: '$50.000',
        icon: '💄',
    },
    {
        id: 3,
        title: 'Corte y Coloración de Tendencia',
        description: 'Diagnóstico capilar, corte de autor y aplicación de balayage o mechas. Trabajamos con tintes orgánicos para el máximo cuidado.',
        price: 'Desde $31.990',
        icon: '💇‍♀️',
    },
    {
        id: 4,
        title: 'Manicura Spa y Gelish',
        description: 'Un ritual de relajación para tus manos con exfoliación, masaje y aplicación de esmalte semipermanente (Gelish) de larga duración.',
        price: '$40.000',
        icon: '💅',
    },

    {
        id: 5,
        title: 'Lifting y Laminado Total',
        description: 'Combina el Lifting de pestañas para un efecto de alargamiento natural y el Laminado de cejas para un diseño perfecto y voluminoso.',
        price: '$120.500',
        icon: '👁️',
    },
];

const ServiciosPage = () => {
    
    return (
        // Se elimina el fragmento <> y se deja solo <main> si es el único elemento devuelto.
        <main className="container-fluid p-0">

            {/* Sección de Encabezado (Hero) */}
            <header className="services-hero-section">
                <Container>
                    <h1 className="display-3 fw-bold text-dark"> Servicios de Belleza</h1>
                    <p className="lead text-secondary">
                        Transforma tu look y cuida de ti con nuestros tratamientos de lujo, diseñados para realzar tu belleza natural.
                    </p>
                </Container>
            </header>

            {/* Sección de la Cuadrícula de Servicios */}
            <Container className="mt-5 mb-5">
                {/* xs={1} md={2} lg={4} -> Ahora usamos Row/Col de Bootstrap para 4 columnas en desktop */}
                <Row xs={1} md={2} lg={4} className="g-4"> 
                    
                    {beautyServices.map(service => (
                        <Col key={service.id}>
                            {/* Tarjeta de Servicio */}
                            <Card className={`h-100 shadow-sm border-0 text-center p-3 service-card ${service.id === 5 ? 'new-service' : ''}`}>
                                <Card.Body>
                                    <div className="mb-3">
                                        {/* Ícono/Emoji */}
                                        <span className="service-icon">{service.icon}</span>
                                    </div>
                                    <Card.Title className="fw-bold mt-2">{service.title}</Card.Title>
                                    <Card.Text className="text-secondary">{service.description}</Card.Text>
                                </Card.Body>
                                <Card.Footer className="bg-white border-0">
                                    <p className="mb-0 fs-5 fw-bold text-success">{service.price}</p>
                                    <Button variant="outline-dark" size="sm" className="mt-2" disabled>
                                        Ver Detalles
                                    </Button>
                                    <small className="text-muted d-block mt-1">Llama para reservar</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}

                </Row>
            </Container>

            {/* Sección de Llamada a la Acción (CTA) */}
            <section className="services-cta-section">
                <h2 className="mb-3">¿Lista para tu Transformación?</h2>
                <p className="lead mb-4">Agenda tu cita con nuestros expertos hoy mismo.</p>
                <Button variant="light" size="lg" className="fw-bold">Contactar Ahora</Button>
            </section>
        </main>
    );
};

export default ServiciosPage;