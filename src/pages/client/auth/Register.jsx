import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { FaEye, FaEyeSlash, FaGoogle, FaFacebookF } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setError] = useState({});
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit =async (e) => {
  
    e.preventDefault();
 
};


  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div className="p-4 shadow rounded bg-white w-100 mb-4" style={{ maxWidth: "500px" }}>
        <h3 className="text-center fw-bold mb-1">Đăng Ký</h3>
        <p className="text-center text-muted mb-4">Tạo tài khoản HRSports miễn phí</p>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Họ và tên *</Form.Label>
            <Form.Control
              type="text"
              name="fullName"
              placeholder="Nhập họ và tên đầy đủ"
              value={form.fullName}
              onChange={handleChange}
              required
            />
            <Form.Text className="text-danger">{errors.fullName}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email *</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Nhập địa chỉ email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Form.Text className="text-danger">{errors.email}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Số điện thoại *</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              placeholder="Nhập số điện thoại"
              value={form.phone}
              onChange={handleChange}
              required
            />

           <Form.Text className="text-danger">{errors.phone}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mật khẩu *</Form.Label>
            <div className="input-group">
              <Form.Control
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Nhập mật khẩu (ít nhất 6 ký tự)"
                value={form.password}
                onChange={handleChange}
                required
              />
              <span className="input-group-text" onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Xác nhận mật khẩu *</Form.Label>
            <div className="input-group">
              <Form.Control
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                placeholder="Nhập lại mật khẩu"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
              <span className="input-group-text" onClick={() => setShowConfirm(!showConfirm)} style={{ cursor: 'pointer' }}>
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </Form.Group>

          <Form.Group className="form-check mb-3">
            <Form.Check
              type="checkbox"
              label={
                <span>
                  Tôi đồng ý với{' '}
                  <a href="#" className="text-primary">Điều khoản dịch vụ</a> và{' '}
                  <a href="#" className="text-primary">Chính sách bảo mật</a> của SportBooking
                </span>
              }
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="secondary" type="submit" className="w-100 fw-bold">
            Tạo Tài Khoản
          </Button>
        </Form>

        <hr />

        <div className="text-center mb-3">
          Đã có tài khoản? <NavLink to="/login" className="text-primary fw-semibold">Đăng nhập ngay</NavLink>
        </div>

        <div className="text-center mb-3 text-muted">Hoặc đăng nhập với</div>

        <Row className="g-2">
          <Col>
            <Button variant="light" className="w-100 border d-flex align-items-center justify-content-center gap-2">
              <FaGoogle color="red" /> Google
            </Button>
          </Col>
          <Col>
            <Button variant="light" className="w-100 border d-flex align-items-center justify-content-center gap-2">
              <FaFacebookF color="#1877f2" /> Facebook
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Register;
