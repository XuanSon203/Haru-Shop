import React from "react";
import Carousel from "react-bootstrap/Carousel";
import FiedImage from '../../assets/bongda.jpg';
import FieldTennis from '../../assets/tennis.jpg'
import FieldBadMiton from '../../assets/caulong.jpg'
function Carousels() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            style={{ height: "600px", objectFit: "cover" }}
            src={FiedImage}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Sân Bóng Đá</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            style={{ height: "600px", objectFit: "cover" }}
            src={FieldBadMiton}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Sân Cầu Lông</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "600px", objectFit: "cover" }}
            src={FieldTennis}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Sân Tennis</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Carousels;
