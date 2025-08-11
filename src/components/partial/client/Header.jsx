import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavLink from "react-bootstrap/esm/NavLink";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../../assets/Math1.jpg";
import "../../../styles/client/LayoutClient.css";

function Header() {
  const cartCount = 3; // demo, sau này lấy từ Redux/Context

  return (
   <>
    <Navbar expand="lg" className="bg-body-light w-100 p-0">
      <Container className="header w-100">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="logo"
            style={{ width: "50px", height: "50px" }}
          />
          <NavLink className="menu-button">HRSports</NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            {/* Menu chính */}
            <Link className="menu-button" to="/">Trang chủ</Link>
            <Link className="menu-button" to="/foods">Đồ ăn</Link>
            <Link className="menu-button" to="/accessories">Phụ kiện</Link>
            <Link className="menu-button" to="/services">Dịch vụ</Link>
            <Link className="menu-button" to="/pets">Thú cưng</Link>
            {/* Giỏ hàng */}
            <Nav.Link
              as={Link}
              to="/cart"
              className="position-relative d-flex align-items-center "
            >
              <FaShoppingCart size={20} />
              {cartCount > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "0.7rem" }}
                >
                  {cartCount}
                </span>
              )}
            </Nav.Link>

            {/* Tài khoản */}
            <NavDropdown title="Tài khoản" className="menu-button">
              <NavDropdown.Item as={Link} to="/login">Đăng nhập</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/register">Đăng ký</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/settings">Cài đặt</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  );
}

export default Header;
