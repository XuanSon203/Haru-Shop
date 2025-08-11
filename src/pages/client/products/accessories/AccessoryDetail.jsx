import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Form,
  Alert,
} from "react-bootstrap";
import {
  BsStarFill,
  BsStarHalf,
  BsCartPlus,
  BsHeart,
  BsShare,
} from "react-icons/bs";
import { Link, Links, useParams } from "react-router-dom";

function AccessoryDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const { id } = useParams();

  const accessories = {
    1: {
      id: 1,
      name: "Vòng cổ chó cao cấp",
      price: 150000,
      originalPrice: 200000,
      brand: "PetSafe",
      category: "Phụ kiện chó",
      description:
        "Vòng cổ chó cao cấp với thiết kế thời trang, chất liệu da thật bền bỉ. Có thể điều chỉnh kích thước phù hợp với mọi giống chó. An toàn và thoải mái cho thú cưng.",
      images: [
        "https://images.unsplash.com/photo-1601758064135-0c2f77f7d74a?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1604908176997-431664c7e1d5?q=80&w=400&auto=format&fit=crop",
      ],
      specs: {
        "Thương hiệu": "PetSafe",
        "Chất liệu": "Da thật",
        "Kích thước": "Điều chỉnh được",
        "Màu sắc": "Đen, Nâu, Đỏ",
        "Phù hợp": "Mọi giống chó",
      },
      rating: 4.7,
      reviewCount: 89,
      inStock: true,
      isNew: true,
      isHot: false,
    },
    2: {
      id: 2,
      name: "Chuồng mèo 3 tầng",
      price: 850000,
      originalPrice: 1200000,
      brand: "CatHome",
      category: "Phụ kiện mèo",
      description:
        "Chuồng mèo 3 tầng cao cấp với thiết kế hiện đại, nhiều không gian vui chơi và nghỉ ngơi. Chất liệu gỗ tự nhiên an toàn, dễ lắp ráp và vệ sinh.",
      images: [
        "https://images.unsplash.com/photo-1604908176997-431664c7e1d5?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1601758064135-0c2f77f7d74a?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=400&auto=format&fit=crop",
      ],
      specs: {
        "Thương hiệu": "CatHome",
        "Chất liệu": "Gỗ tự nhiên",
        "Kích thước": "80x60x120cm",
        "Màu sắc": "Nâu gỗ",
        "Số tầng": "3 tầng",
      },
      rating: 4.8,
      reviewCount: 156,
      inStock: true,
      isNew: false,
      isHot: true,
    },
    3: {
      id: 3,
      name: "Balo vận chuyển thú cưng",
      price: 450000,
      originalPrice: 600000,
      brand: "PetTravel",
      category: "Vận chuyển",
      description:
        "Balo vận chuyển thú cưng với thiết kế thông minh, có lỗ thông khí và đệm êm ái. Phù hợp cho việc di chuyển an toàn và thoải mái cho thú cưng.",
      images: [
        "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1601758064135-0c2f77f7d74a?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1604908176997-431664c7e1d5?q=80&w=400&auto=format&fit=crop",
      ],
      specs: {
        "Thương hiệu": "PetTravel",
        "Chất liệu": "Vải bền",
        "Kích thước": "L, M, S",
        "Màu sắc": "Xanh, Đen, Đỏ",
        "Trọng lượng tối đa": "10kg",
      },
      rating: 4.6,
      reviewCount: 73,
      inStock: true,
      isNew: true,
      isHot: false,
    },
  };

  const product = accessories[id] || accessories[1];

  const reviews = [
    {
      id: 1,
      user: "Nguyễn Văn A",
      rating: 5,
      date: "2024-01-15",
      comment: "Chất lượng rất tốt, thú cưng nhà mình rất thích!",
    },
    {
      id: 2,
      user: "Trần Thị B",
      rating: 4,
      date: "2024-01-10",
      comment: "Sản phẩm đẹp và bền, đáng mua.",
    },
    {
      id: 3,
      user: "Lê Văn C",
      rating: 5,
      date: "2024-01-05",
      comment: "Giao hàng nhanh, sản phẩm chất lượng cao!",
    },
  ];

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating - fullStars >= 0.5;
    const stars = [];
    for (let i = 0; i < fullStars; i++)
      stars.push(<BsStarFill key={`full-${i}`} className="text-warning" />);
    if (hasHalf) stars.push(<BsStarHalf key="half" className="text-warning" />);
    return stars;
  };

  const handleAddToCart = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <Container className="my-5">
      {showAlert && (
        <Alert
          variant="success"
          dismissible
          onClose={() => setShowAlert(false)}
        >
          Đã thêm phụ kiện vào giỏ hàng!
        </Alert>
      )}

      <Row>
        {/* Hình ảnh sản phẩm */}
        <Col lg={6}>
          <div className="mb-3">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="img-fluid rounded"
              style={{ width: "100%", height: 400, objectFit: "cover" }}
            />
          </div>
          <Row className="g-2">
            {product.images.map((img, index) => (
              <Col xs={3} key={index}>
                <img
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className={`img-fluid rounded cursor-pointer ${
                    selectedImage === index ? "border border-primary" : ""
                  }`}
                  style={{ height: 80, objectFit: "cover" }}
                  onClick={() => setSelectedImage(index)}
                />
              </Col>
            ))}
          </Row>
        </Col>

        {/* Thông tin sản phẩm */}
        <Col lg={6}>
          <div className="mb-3">
            {product.isNew && (
              <Badge bg="success" className="me-2">
                Mới
              </Badge>
            )}
            {product.isHot && (
              <Badge bg="danger" className="me-2">
                Hot
              </Badge>
            )}
            <Badge bg="secondary">{product.category}</Badge>
          </div>

          <h2 className="mb-3">{product.name}</h2>

          <div className="mb-3">
            <div className="d-flex align-items-center gap-2 mb-2">
              {renderRating(product.rating)}
              <span className="text-muted">
                ({product.reviewCount} đánh giá)
              </span>
            </div>
          </div>

          <div className="mb-3">
            <span className="text-danger h4 fw-bold">
              {product.price.toLocaleString("vi-VN")}₫
            </span>
            {product.originalPrice > product.price && (
              <>
                <span className="text-muted text-decoration-line-through ms-2">
                  {product.originalPrice.toLocaleString("vi-VN")}₫
                </span>
                <Badge bg="danger" className="ms-2">
                  -{discount}%
                </Badge>
              </>
            )}
          </div>

          <div className="mb-4">
            <p className="text-muted">{product.description}</p>
          </div>

          {/* Số lượng */}
          <div className="mb-4">
            <Form.Label>Số lượng</Form.Label>
            <div className="d-flex align-items-center gap-3">
              <div className="d-flex align-items-center border rounded">
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  -
                </Button>
                <span className="px-3">{quantity}</span>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </Button>
              </div>
              <span className="text-muted">
                Còn {product.inStock ? "nhiều" : "hết"} hàng
              </span>
            </div>
          </div>

          {/* Nút hành động */}
          <div className="d-grid gap-3 mb-4">
            {/* Hàng 1: Thêm vào giỏ hàng + Mua ngay */}
            <div className="d-flex gap-2 justify-content-center">
              <Link
                className="btn btn-outline-primary flex-fill"
                onClick={handleAddToCart}
              >
                <BsCartPlus className="me-2" />
                Thêm vào giỏ hàng
              </Link>
              <Link
                className="btn btn-outline-info flex-fill"
                onClick={handleAddToCart}
              >
                <BsCartPlus className="me-2" />
                Mua ngay
              </Link>
            </div>
          </div>

          {/* Thông số kỹ thuật */}
          <Card className="mb-4">
            <Card.Header>Thông số kỹ thuật</Card.Header>
            <Card.Body>
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="d-flex justify-content-between py-1">
                  <span className="text-muted">{key}:</span>
                  <span>{value}</span>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Đánh giá */}
      <Row className="mt-5">
        <Col>
          <h4 className="mb-4">Đánh giá từ khách hàng</h4>
          {reviews.map((review) => (
            <Card key={review.id} className="mb-3">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <h6 className="mb-1">{review.user}</h6>
                    <div className="d-flex align-items-center gap-2">
                      {renderRating(review.rating)}
                      <small className="text-muted">{review.date}</small>
                    </div>
                  </div>
                </div>
                <p className="mb-0">{review.comment}</p>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default AccessoryDetail;
