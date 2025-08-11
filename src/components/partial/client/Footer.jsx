import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-3">
      <Container>
        <Row className="mb-4">
          {/* Logo và mô tả */}
          <Col md={3} sm={12}>
            <h4 className="logo-text">Sport<span className="text-primary">Booking</span></h4>
            <p>Hệ thống đặt sân thể thao hàng đầu Việt Nam. Đặt sân dễ dàng, chơi thoải mái.</p>
            <div className="social-icons d-flex gap-3">
            
            </div>
          </Col>

          {/* Dịch vụ */}
          <Col md={3} sm={6}>
            <h5>Dịch Vụ</h5>
            <ul className="footer-links">
              <li><a href="#">Đặt Sân Bóng Đá</a></li>
              <li><a href="#">Đặt Sân Cầu Lông</a></li>
              <li><a href="#">Đặt Sân Tennis</a></li>
              <li><a href="#">Đặt Sân Bóng Rổ</a></li>
            </ul>
          </Col>

          {/* Hỗ trợ */}
          <Col md={3} sm={6}>
            <h5>Hỗ Trợ</h5>
            <ul className="footer-links">
              <li><a href="#">Hướng Dẫn Đặt Sân</a></li>
              <li><a href="#">Chính Sách Hủy</a></li>
              <li><a href="#">Câu Hỏi Thường Gặp</a></li>
              <li><a href="#">Liên Hệ Hỗ Trợ</a></li>
            </ul>
          </Col>

          {/* Liên hệ */}
          <Col md={3} sm={12}>
            <h5>Liên Hệ</h5>
            <ul className="footer-links">
              <li>0123 456 789</li>
              <li>info@sportbooking.vn</li>
              <li>123 Đường ABC, Quận 1, TP.HCM</li>
            </ul>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row>
          <Col className="text-center text-secondary">
            © 2024 SportBooking. Tất cả quyền được bảo lưu.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
