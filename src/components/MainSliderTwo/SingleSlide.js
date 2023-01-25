import React from "react";
import { Container } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

const SingleSlide = ({ slide = {} }) => {
  const { bg } = slide;

  return (
    <SwiperSlide>
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      ></div>
      <Container>
        <div className="swiper-slide-inner">
          <div className="tour-details-slider_icon">
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fa fa-heart"></i>
            </a>
          </div>
        </div>
      </Container>
    </SwiperSlide>
  );
};

export default SingleSlide;
