import React, { useState } from 'react';
import { Card, Badge } from 'react-bootstrap';

function CategoryItem({ category, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);

  const fallbackCategory = {
    name: 'Danh mục',
    image: 'https://via.placeholder.com/400x260?text=Category',
    itemsCount: 0,
    description: ''
  };

  const data = category || fallbackCategory;

  const handleClick = () => {
    if (onSelect) onSelect(data);
  };

  return (
    <Card
      className="border-0 shadow-sm h-100"
      style={{
        cursor: 'pointer',
        transform: isHovered ? 'translateY(-4px)' : 'none',
        transition: 'all .2s ease-in-out'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div style={{ position: 'relative' }}>
        <Card.Img
          variant="top"
          src={data.image}
          alt={data.name}
          style={{ objectFit: 'cover', height: 180 }}
        />
        {Number.isFinite(data.itemsCount) && (
          <Badge bg="dark" className="position-absolute" style={{ right: 8, top: 8 }}>
            {data.itemsCount}
          </Badge>
        )}
      </div>
      <Card.Body>
        <Card.Title as="h6" className="mb-1">{data.name}</Card.Title>
        {data.description && (
          <Card.Text className="text-muted small mb-0">{data.description}</Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}

export default CategoryItem;