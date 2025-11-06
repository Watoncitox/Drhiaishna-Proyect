import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ServicioCard({ titulo, imagen, link }) {
  const navigate = useNavigate();

  return (
    <Card className="service-card h-100 text-center border-0 shadow-sm">
      {imagen && (
        <div style={{ overflow: 'hidden' }}>
          <Card.Img variant="top" src={imagen} alt={titulo} style={{ height: 200, objectFit: 'cover' }} />
        </div>
      )}
      <Card.Body>
        <Card.Title className="text-danger fw-bold">{titulo}</Card.Title>
        <div className="mt-3">
          <Button variant="outline-danger" onClick={() => navigate(link)}>
            Ver más detalles
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

ServicioCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  imagen: PropTypes.string,
  link: PropTypes.string,
};

ServicioCard.defaultProps = {
  imagen: '',
  link: '#',
};
