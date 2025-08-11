import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Image,
  Badge,
  Button,
  Form,
  Alert,
} from "react-bootstrap";
import { BsCartPlus } from "react-icons/bs";

function FoodDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  console.log(id);
  // Dữ liệu mẫu
  const petFoods = {
    1: {
      id: 1,
      name: "Pate Mèo Dạng Thạch Nekko Jelly 70g",
      price: 15000,
      originalPrice: 20000,
      brand: "Nekko",
      category: "Mèo",
      description:
        "Pate mềm, thơm ngon, bổ sung vitamin và khoáng chất cho mèo. Thành phần tự nhiên, an toàn cho sức khỏe thú cưng.",
      images: [
        "https://images.unsplash.com/photo-1612531386530-f8c2dbe001b5?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=400&auto=format&fit=crop",
      ],
      isNew: true,
      inStock: true,
    },
    2: {
      id: 2,
      name: "Hạt Cho Chó Con Royal Canin 2kg",
      price: 320000,
      originalPrice: 380000,
      brand: "Royal Canin",
      category: "Chó",
      description:
        "Thức ăn hạt dành cho chó con, giàu protein, canxi, và dưỡng chất giúp phát triển khỏe mạnh.",
      images: [
        "https://images.unsplash.com/photo-1606220588913-318a34fbe1d6?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1601758123927-1965d887e32e?q=80&w=400&auto=format&fit=crop",
      ],
      isNew: false,
      inStock: true,
    },
    3: {
      id: 3,
      name: "Snack Thưởng Cho Mèo Ciao Churu",
      price: 45000,
      originalPrice: 60000,
      brand: "Ciao",
      category: "Mèo",
      description:
        "Snack dạng kem mềm cho mèo, vị ngon hấp dẫn, bổ sung nước và vitamin.",
      images: [
        "https://images.unsplash.com/photo-1624353365286-95f85a08c786?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1629904853904-d5640e9c2b52?q=80&w=400&auto=format&fit=crop",
      ],
      isNew: true,
      inStock: false,
    },
  };

  const product = petFoods[id];

  // Nếu không tìm thấy sản phẩm
  if (!product) {
    return (
      <Container className="my-5">
        <Alert variant="danger">Không tìm thấy sản phẩm!</Alert>
      </Container>
    );
  }
 const handleAddToCart = (item, qty) => {
  console.log("Đã thêm sản phẩm vào giỏ hàng:", item.name);
  console.log("Số lượng là:", qty);
  // Ở đây bạn có thể thêm logic push vào giỏ hàng hoặc lưu localStorage
};
  return (
    <Container className="my-5">
      <Row>
        {/* Hình ảnh */}
        <Col md={6}>
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            fluid
            rounded
            className="mb-3"
          />
          <div className="d-flex gap-2">
            {product.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`thumb-${index}`}
                thumbnail
                style={{
                  cursor: "pointer",
                  border:
                    selectedImage === index ? "2px solid #ffc107" : "none",
                }}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </Col>

        {/* Thông tin sản phẩm */}
        <Col md={6}>
          <h3>{product.name}</h3>
          <div className="mb-2">
            {product.isNew && (
              <Badge bg="success" className="me-2">
                Mới
              </Badge>
            )}
            {!product.inStock && <Badge bg="danger">Hết hàng</Badge>}
          </div>
          <h4 className="text-danger">
            {product.price.toLocaleString("vi-VN")}₫
          </h4>
          <small className="text-muted text-decoration-line-through">
            {product.originalPrice.toLocaleString("vi-VN")}₫
          </small>
          <p className="mt-3">
            <strong>Thương hiệu:</strong> {product.brand}
          </p>
          <p>{product.description}</p>

          {/* Chọn số lượng */}
          <Form.Group className="mb-3" style={{ maxWidth: 150 }}>
            <Form.Label>Số lượng</Form.Label>
            <Form.Control
              type="number"
              value={quantity}
              min={1}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            />
          </Form.Group>

          <Link
            className="btn btn-warning text-white mt-auto"
            onClick={() => handleAddToCart(product, quantity)}
          >
            <BsCartPlus className="me-2" />
            Đặt lịch
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default FoodDetail;
