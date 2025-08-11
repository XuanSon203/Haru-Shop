import Container from "react-bootstrap/Container";
import Header from "../partial/client/Header";
import { Outlet } from "react-router-dom";
import Footer from "../partial/client/Footer";
import '../../styles/client/LayoutClient.css'
function LayoutClient() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Container className="flex-grow-1 mt-4">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default LayoutClient;
