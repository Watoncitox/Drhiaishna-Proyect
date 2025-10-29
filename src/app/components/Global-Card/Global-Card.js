import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Global-Card.css';

export default function GlobalCard({ image, title, subtitle, description, ctaText, ctaLink, external }) {
  return (
    <Card className="global-card h-100 shadow-sm border-0">
      {image && (
        <div className="global-card-img-wrap">
          <Card.Img variant="top" src={image} className="global-card-img" />
        </div>
      )}
      <Card.Body className="text-center">
        {title && <Card.Title className="global-card-title">{title}</Card.Title>}
        {subtitle && <Card.Subtitle className="mb-2 text-muted global-card-subtitle">{subtitle}</Card.Subtitle>}
        {description && <Card.Text className="mt-3 global-card-desc">{description}</Card.Text>}
        {ctaText && ctaLink && (
          <div className="mt-3">
            <Button
              variant="outline-primary"
              href={ctaLink}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
            >
              {ctaText}
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

GlobalCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.node,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  external: PropTypes.bool,
};

GlobalCard.defaultProps = {
  external: true,
};
