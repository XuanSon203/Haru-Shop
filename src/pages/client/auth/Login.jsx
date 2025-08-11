import React, { useState } from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash, FaFacebookF, FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="p-4 shadow rounded bg-white" style={{ width: "100%", maxWidth: "500px" }}>
        <h3 className="text-center fw-bold mb-2">Đăng Nhập</h3>
        <p className="text-center text-muted mb-4">Chào mừng bạn quay trở lại HRSports</p>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Nhập email của bạn" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mật khẩu</Form.Label>
            <InputGroup>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu"
              />
              <InputGroup.Text onClick={togglePassword} style={{ cursor: "pointer" }}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <Form.Check label="Ghi nhớ đăng nhập" />
            <a href="#" className="text-decoration-none">Quên mật khẩu?</a>
          </div>

          <Button variant="secondary" className="w-100 mb-3 fw-bold">Đăng Nhập</Button>
        </Form>

        <hr />

        <div className="text-center mb-3">
          Chưa có tài khoản? <NavLink to="/register" className="text-primary fw-semibold">Đăng ký ngay</NavLink>
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

export default Login;
