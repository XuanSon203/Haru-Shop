import React from 'react';
import { Row, Col, Image, Button, Badge } from 'react-bootstrap';
import { BsPlus, BsDash, BsTrash } from 'react-icons/bs';

const CartItem = ({ item, quantity, onIncrease, onDecrease, onRemove }) => {
  const total = item.price * quantity;

  return (
    <Row className="g-3 py-2 align-items-center">
      <Col xs={3} sm={2}>
        <Image src={item.image} alt={item.name} fluid rounded />
      </Col>
      <Col xs={9} sm={10}>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h6 className="mb-1">{item.name}</h6>
            <div className="mb-1">
              <small className="text-secondary">{item.description}</small>
            </div>
            {item.brand && (
              <Badge bg="light" text="dark" className="border">
                {item.brand}
              </Badge>
            )}
          </div>
          <div className="text-end">
            <div className="text-muted small">Đơn giá</div>
            <div className="fw-semibold">{item.price.toLocaleString('vi-VN')}₫</div>
          </div>
        </div>
        <Row className="align-items-center mt-3">
          <Col xs={7} md={5}>
            <div className="d-inline-flex align-items-center gap-2">
              <Button
                variant="light"
                className="border rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                style={{ width: 36, height: 36 }}
                onClick={onDecrease}
                aria-label="Giảm số lượng"
              >
                <BsDash size={18} />
              </Button>
              <div className="px-3 py-1 border rounded fw-semibold bg-white shadow-sm">
                {quantity}
              </div>
              <Button
                variant="light"
                className="border rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                style={{ width: 36, height: 36 }}
                onClick={onIncrease}
                aria-label="Tăng số lượng"
              >
                <BsPlus size={18} />
              </Button>
            </div>
          </Col>
          <Col xs={4} md={6} className="text-end fw-bold">
            {total.toLocaleString('vi-VN')}₫
          </Col>
          <Col xs={1} className="text-end">
            <Button
              variant="light"
              className="border-0 text-danger rounded-circle p-0 d-inline-flex align-items-center justify-content-center"
              style={{ width: 28, height: 28 }}
              onClick={onRemove}
              aria-label="Xóa sản phẩm"
              title="Xóa"
            >
              <BsTrash size={16} />
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CartItem;
