import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, Badge } from 'react-bootstrap';
import { BsCalendar, BsClock, BsGeoAlt, BsStarFill } from 'react-icons/bs';

function ServiceBooking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    petName: '',
    petType: '',
    petAge: '',
    serviceDate: '',
    serviceTime: '',
    notes: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const service = {
    id: 1,
    name: 'Tắm gội & Cắt tỉa lông',
    price: 150000,
    duration: '2-3 giờ',
    image: 'https://images.unsplash.com/photo-1601758064135-0c2f77f7d74a?q=80&w=400&auto=format&fit=crop',
    description: 'Dịch vụ tắm gội và cắt tỉa lông chuyên nghiệp cho thú cưng. Bao gồm tắm, sấy khô, cắt tỉa lông, cắt móng và làm sạch tai.',
    rating: 4.8,
    reviewCount: 45,
    location: 'Hà Nội',
    address: '123 Đường ABC, Quận 1, Hà Nội'
  };

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const petTypes = ['Chó', 'Mèo', 'Thỏ', 'Hamster', 'Khác'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating - fullStars >= 0.5;
    const stars = [];
    for (let i = 0; i < fullStars; i++) stars.push(<BsStarFill key={`full-${i}`} className="text-warning" />);
    if (hasHalf) stars.push(<BsStarFill key="half" className="text-warning" />);
    return stars;
  };

  return (
    <Container className="my-5">
      {showSuccess && (
        <Alert variant="success" dismissible onClose={() => setShowSuccess(false)}>
          Đặt lịch thành công! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
        </Alert>
      )}

      <Row>
        {/* Thông tin dịch vụ */}
        <Col lg={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={service.image} style={{ height: 200, objectFit: 'cover' }} />
            <Card.Body>
              <h5 className="mb-3">{service.name}</h5>
              
              <div className="mb-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  {renderRating(service.rating)}
                  <span className="text-muted">({service.reviewCount} đánh giá)</span>
                </div>
              </div>

              <div className="mb-3">
                <span className="text-danger h5 fw-bold">{service.price.toLocaleString('vi-VN')}₫</span>
                <Badge bg="info" className="ms-2">{service.duration}</Badge>
              </div>

              <p className="text-muted mb-3">{service.description}</p>

              <div className="mb-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <BsGeoAlt className="text-primary" />
                  <span>{service.location}</span>
                </div>
                <small className="text-muted">{service.address}</small>
              </div>

              <div className="d-flex align-items-center gap-2">
                <BsClock className="text-primary" />
                <span>Thời gian làm việc: 8:00 - 18:00</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Form đặt lịch */}
        <Col lg={8}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Đặt lịch dịch vụ</h5>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Họ và tên *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Số điện thoại *</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Tên thú cưng *</Form.Label>
                      <Form.Control
                        type="text"
                        name="petName"
                        value={formData.petName}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Loại thú cưng *</Form.Label>
                      <Form.Select
                        name="petType"
                        value={formData.petType}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Chọn loại thú cưng</option>
                        {petTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Tuổi thú cưng</Form.Label>
                      <Form.Control
                        type="text"
                        name="petAge"
                        value={formData.petAge}
                        onChange={handleInputChange}
                        placeholder="VD: 2 tuổi"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Ngày đặt lịch *</Form.Label>
                      <Form.Control
                        type="date"
                        name="serviceDate"
                        value={formData.serviceDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Giờ đặt lịch *</Form.Label>
                      <Form.Select
                        name="serviceTime"
                        value={formData.serviceTime}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Chọn giờ</option>
                        {timeSlots.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label>Ghi chú</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Mô tả thêm về thú cưng hoặc yêu cầu đặc biệt..."
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="warning" size="lg" type="submit" className="text-white">
                    <BsCalendar className="me-2" />
                    Đặt lịch ngay
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ServiceBooking;
