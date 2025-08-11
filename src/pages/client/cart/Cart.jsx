import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, InputGroup } from 'react-bootstrap';
import CartItem from './CartItem';

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const item = {
    name: 'Pate Mèo Dạng Thạch Nekko Jelly 70g',
    description: 'Cá Ngừ / 1 Gói',
    brand: 'Nekko',
    price: 15000,
    image: 'https://via.placeholder.com/100',
  };

  const handleIncrease = () => setQuantity(q => q + 1);
  const handleDecrease = () => setQuantity(q => (q > 1 ? q - 1 : 1));
  const handleRemove = () => alert('Xóa sản phẩm khỏi giỏ');

  const total = quantity * item.price;

  return (
    <Container className="my-5">
      <Row className="g-4">
        <Col md={8}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h5 className="mb-4">Sản phẩm</h5>
              <CartItem
                item={item}
                quantity={quantity}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                onRemove={handleRemove}
              />
            </Card.Body>
          </Card>
        </Col>

        {/* Tổng tiền */}
        <Col md={4}>
          <Card className="shadow-sm border-0 position-sticky" style={{ top: 24 }}>
            <Card.Body>
              <h5 className="mb-4">Tổng số tiền</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Tạm tính</span>
                <span>{total.toLocaleString('vi-VN')}₫</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Phí vận chuyển</span>
                <span className="text-success">Miễn phí</span>
              </div>
              <InputGroup className="mb-3">
                <Form.Control placeholder="Nhập mã khuyến mãi" aria-label="Mã khuyến mãi" />
                <Button variant="outline-secondary">Áp dụng</Button>
              </InputGroup>
              <hr />
              <div className="d-flex justify-content-between fw-bold mb-3">
                <span>Tổng</span>
                <span>{total.toLocaleString('vi-VN')}₫</span>
              </div>
              <div className="d-grid gap-2">
                <Button variant="dark">Đi đến trang thanh toán</Button>
                <Button variant="warning" className="text-white">
                  Tiếp tục mua sắm
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
