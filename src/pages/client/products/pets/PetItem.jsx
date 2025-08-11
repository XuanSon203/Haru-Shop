import React, { useState } from "react";
import { Card, Button, Badge, Stack } from "react-bootstrap";
import { BsCartPlus, BsStarFill, BsStarHalf } from "react-icons/bs";

function PetItem({ item, onAddToCart, onView }) {
  const [hovered, setHovered] = useState(false);

  const defaultItem = {
    name: "Mèo Anh Lông Ngắn",
    description: "2 tháng tuổi, đã tiêm phòng",
    price: 3500000,
    image: "https://via.placeholder.com/288x180?text=Pet",
    rating: 4.5,
    isNew: true,
  };

  const product = item || defaultItem;

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating - fullStars >= 0.5;
    const stars = [];
    for (let i = 0; i < fullStars; i += 1) stars.push(<BsStarFill key={`full-${i}`} className="text-warning me-1" />);
    if (hasHalf) stars.push(<BsStarHalf key="half" className="text-warning me-1" />);
    return stars;
  };

  const handleAdd = () => {
    if (onAddToCart) onAddToCart(product);
  };

  const handleView = () => {
    if (onView) onView(product);
  };

  return (
    <Card
      className="m-4 border-0 shadow-sm"
      style={{
        width: "18rem",
        transform: hovered ? "translateY(-3px)" : "none",
        transition: "all .2s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card.Img variant="top" src={product.image} alt={product.name} style={{ objectFit: "cover", height: 180 }} />
      <Card.Body>
        <Stack direction="horizontal" className="justify-content-between align-items-start mb-2">
          <div>
            <Card.Title as="h6" className="mb-1">
              {product.name}
            </Card.Title>
            <div className="text-muted small">{product.description}</div>
          </div>
          {product.isNew && (
            <Badge bg="success" className="ms-2">Mới</Badge>
          )}
        </Stack>

        <div className="d-flex align-items-center mb-2">
          {renderRating(product.rating)}
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="h5 mb-0 text-danger">
            {product.price.toLocaleString("vi-VN")}₫
          </div>
        </div>

        <div className="d-grid gap-2">
          <Button variant="warning" className="text-white" onClick={handleAdd}>
            <BsCartPlus className="me-2" /> Thêm vào giỏ
          </Button>
          <Button variant="outline-secondary" onClick={handleView}>Xem chi tiết</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PetItem;
