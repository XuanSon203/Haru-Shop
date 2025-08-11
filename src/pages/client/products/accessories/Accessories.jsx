import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

function Accessories() {
  const accessories = [
    {
      id: 1,
      name: "Vòng cổ chó cao cấp",
      price: 150000,
      image:
        "https://images.unsplash.com/photo-1601758064135-0c2f77f7d74a?q=80&w=400&auto=format&fit=crop",
      category: "Chó",
      isNew: true,
    },
    {
      id: 2,
      name: "Chuồng mèo 3 tầng",
      price: 850000,
      image:
        "https://images.unsplash.com/photo-1604908176997-431664c7e1d5?q=80&w=400&auto=format&fit=crop",
      category: "Mèo",
      isNew: false,
    },
    {
      id: 3,
      name: "Balo vận chuyển thú cưng",
      price: 450000,
      image:
        "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=400&auto=format&fit=crop",
      category: "Vận chuyển",
      isNew: true,
    },
    {
      id: 4,
      name: "Bát ăn tự động",
      price: 320000,
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=400&auto=format&fit=crop",
      category: "Dụng cụ",
      isNew: false,
    },
    {
      id: 5,
      name: "Đồ chơi cho mèo",
      price: 89000,
      image:
        "https://images.unsplash.com/photo-1601758064135-0c2f77f7d74a?q=80&w=400&auto=format&fit=crop",
      category: "Mèo",
      isNew: false,
    },
    {
      id: 6,
      name: "Dây xích chó thông minh",
      price: 280000,
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=400&auto=format&fit=crop",
      category: "Chó",
      isNew: true,
    },
  ];
  const handleAddToCart = (item) => {
    console.log("Đã thêm vào giỏ:", item);
    // Ở đây bạn có thể gọi API hoặc cập nhật state giỏ hàng
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4">Phụ kiện thú cưng</h2>

      {/* Categories */}
      <div className="mb-4">
        <h5>Danh mục phụ kiện</h5>
        <div className="d-flex gap-2 mb-4">
          <Badge bg="primary" className="px-3 py-2">
            Tất cả
          </Badge>
          <Badge bg="light" text="dark" className="px-3 py-2">
            Chó
          </Badge>
          <Badge bg="light" text="dark" className="px-3 py-2">
            Mèo
          </Badge>
          <Badge bg="light" text="dark" className="px-3 py-2">
            Vận chuyển
          </Badge>
          <Badge bg="light" text="dark" className="px-3 py-2">
            Dụng cụ
          </Badge>
        </div>
      </div>

      <Row className="g-4">
        {accessories.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 border-0 shadow-sm">
              <div style={{ position: "relative" }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.name}
                  style={{ height: 200, objectFit: "cover" }}
                />
                {item.isNew && (
                  <Badge
                    bg="success"
                    className="position-absolute"
                    style={{ top: 8, right: 8 }}
                  >
                    Mới
                  </Badge>
                )}
                <Badge
                  bg="secondary"
                  className="position-absolute"
                  style={{ top: 8, left: 8 }}
                >
                  {item.category}
                </Badge>
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title as="h6" className="mb-2">
                  <Link
                    to={`/accessories/${item.id}`}
                    className="text-decoration-none text-dark"
                    style={{ cursor: "pointer" }}
                  >
                    {item.name}
                  </Link>
                </Card.Title>
                <div className="text-danger fw-bold mb-3">
                  {item.price.toLocaleString("vi-VN")}₫
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Accessories;
