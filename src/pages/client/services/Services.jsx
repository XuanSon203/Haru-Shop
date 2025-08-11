import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { BsCalendar, BsGeoAlt, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      id: 1,
      name: "Tắm gội & Cắt tỉa lông",
      price: 150000,
      image:
        "https://images.unsplash.com/photo-1601758064135-0c2f77f7d74a?q=80&w=400&auto=format&fit=crop",
      category: "Chăm sóc",
      rating: 4.8,
      location: "Hà Nội",
      isHot: true,
    },
    {
      id: 2,
      name: "Khám thú y tổng quát",
      price: 300000,
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=400&auto=format&fit=crop",
      category: "Y tế",
      rating: 4.9,
      location: "Hà Nội",
      isHot: false,
    },
    {
      id: 3,
      name: "Huấn luyện chó cơ bản",
      price: 500000,
      image:
        "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=400&auto=format&fit=crop",
      category: "Huấn luyện",
      rating: 4.7,
      location: "Hà Nội",
      isHot: true,
    },
    {
      id: 4,
      name: "Chụp ảnh thú cưng",
      price: 200000,
      image:
        "https://images.unsplash.com/photo-1604908176997-431664c7e1d5?q=80&w=400&auto=format&fit=crop",
      category: "Nghệ thuật",
      rating: 4.6,
      location: "Hà Nội",
      isHot: false,
    },
    {
      id: 5,
      name: "Dịch vụ trông thú cưng",
      price: 100000,
      image:
        "https://images.unsplash.com/photo-1601758064135-0c2f77f7d74a?q=80&w=400&auto=format&fit=crop",
      category: "Chăm sóc",
      rating: 4.5,
      location: "Hà Nội",
      isHot: false,
    },
    {
      id: 6,
      name: "Tiêm phòng & Tẩy giun",
      price: 250000,
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=400&auto=format&fit=crop",
      category: "Y tế",
      rating: 4.8,
      location: "Hà Nội",
      isHot: true,
    },
  ];

  const renderRating = (rating) => {
    return (
      <div className="d-flex align-items-center">
        <BsStarFill className="text-warning me-1" />
        <span className="small">{rating}</span>
      </div>
    );
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4">Dịch vụ thú cưng</h2>

      {/* Categories */}
      <div className="mb-4">
        <h5>Danh mục dịch vụ</h5>
        <div className="d-flex gap-2 mb-4">
          <Badge bg="primary" className="px-3 py-2">
            Tất cả
          </Badge>
          <Badge bg="light" text="dark" className="px-3 py-2">
            Chăm sóc
          </Badge>
          <Badge bg="light" text="dark" className="px-3 py-2">
            Y tế
          </Badge>
          <Badge bg="light" text="dark" className="px-3 py-2">
            Huấn luyện
          </Badge>
          <Badge bg="light" text="dark" className="px-3 py-2">
            Nghệ thuật
          </Badge>
        </div>
      </div>

      <Row className="g-4">
        {services.map((service) => (
          <Col key={service.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 border-0 shadow-sm">
              <div style={{ position: "relative" }}>
                <Card.Img
                  variant="top"
                  src={service.image}
                  alt={service.name}
                  style={{ height: 200, objectFit: "cover" }}
                />
                {service.isHot && (
                  <Badge
                    bg="danger"
                    className="position-absolute"
                    style={{ top: 8, right: 8 }}
                  >
                    Hot
                  </Badge>
                )}
                <Badge
                  bg="secondary"
                  className="position-absolute"
                  style={{ top: 8, left: 8 }}
                >
                  {service.category}
                </Badge>
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title as="h6" className="mb-2">
                  <Link
                    to={`/services/${service.id}`}
                    className="text-decoration-none text-dark"
                  >
                    {service.name}
                  </Link>
                </Card.Title>

                <div className="mb-2">{renderRating(service.rating)}</div>

                <div className="text-muted small mb-2">
                  <BsGeoAlt className="me-1" />
                  {service.location}
                </div>

                <div className="text-danger fw-bold mb-3">
                  {service.price.toLocaleString("vi-VN")}₫
                </div>

                <Link
                  to={`/services/${service.id}`}
                  className="btn btn-warning text-white mt-auto"
                >
                  <BsCalendar className="me-2" />
                  Đặt lịch
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;
