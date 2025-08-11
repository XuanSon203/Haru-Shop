import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { BsCartPlus } from "react-icons/bs";
import { useParams, Link } from "react-router-dom";
import React, { useState } from "react";

function FoodItem() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const petFoods = {
    1: {
      id: 1,
      name: "Pate Mèo Dạng Thạch Nekko Jelly 70g",
      price: 15000,
      originalPrice: 20000,
      brand: "Nekko",
      category: "Mèo",
      image:
        "https://images.unsplash.com/photo-1612531386530-f8c2dbe001b5?q=80&w=400&auto=format&fit=crop",
      isNew: true,
    },
    2: {
      id: 2,
      name: "Hạt Cho Chó Con Royal Canin 2kg",
      price: 320000,
      originalPrice: 380000,
      brand: "Royal Canin",
      category: "Chó",
      image:
        "https://images.unsplash.com/photo-1606220588913-318a34fbe1d6?q=80&w=400&auto=format&fit=crop",
      isNew: false,
    },
    3: {
      id: 3,
      name: "Snack Thưởng Cho Mèo Ciao Churu",
      price: 45000,
      originalPrice: 60000,
      brand: "Ciao",
      category: "Mèo",
      image:
        "https://images.unsplash.com/photo-1624353365286-95f85a08c786?q=80&w=400&auto=format&fit=crop",
      isNew: true,
    },
  };

  const product = petFoods[id] || petFoods[1];
  const handleAddToCart = async (item) => {
    console.log("Da add to Carr: " + item);
  };
  return (
    <Container className="my-5">
      <h2 className="mb-4">Đồ ăn thú cưng</h2>

      {/* Categories */}
      <div className="mb-4">
        <h5>Danh mục</h5>
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
            Snack
          </Badge>
        </div>
      </div>

      <Row className="g-4">
        {Object.values(petFoods).map((item) => (
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
                    to={`/food/${item.id}`}
                    className="text-decoration-none text-dark"
                    style={{ cursor: "pointer" }}
                  >
                    {item.name}
                  </Link>
                </Card.Title>
                <div className="text-danger fw-bold mb-3">
                  {item.price.toLocaleString("vi-VN")}₫
                </div>
                <div className="">

                  <Link
                  to={`/food/addCart/${item.id}`}
                  onClick={() => {
                    handleAddToCart(item);
                  }}
                  className="btn btn-outline-info text-black mt-auto mx-4"
                >
                  Mua ngay
                </Link>
                  <Link
                  to={`/food/addCart/${item.id}`}
                  onClick={() => {
                    handleAddToCart(item);
                  }}
                  className="btn btn-outline-primary text-black mt-auto"
                >
                  <BsCartPlus className="me-2" />
                </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FoodItem;
