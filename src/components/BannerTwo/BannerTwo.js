import bannerTwo from "@/data/bannerTwo";
import React from "react";
import BackgroundSlider from "react-background-slider";
import { Col, Container, Row } from "react-bootstrap";
import TourSearchForm from "../TourSearchForm/TourSearchForm";

const { subTitle, title, bottomText, slides } = bannerTwo;

const BannerTwo = () => {
  return (
    <section className="banner-two">
      <BackgroundSlider
        className="banner-bg-slide"
        images={slides}
        duration={10}
        transition={2}
      />
      <div className="banner-bg-slide-overly"></div>
      <Container>
        <Row>
          <Col xl={12}>
            <div className="banner-two__content">
              <p className="banner-two__sub-title">{subTitle}</p>
              <h2 className="banner-two__title">{title}</h2>
              <div className="tour-search-box">
                <TourSearchForm />
                <p className="banner-two__bottom-text">{bottomText}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerTwo;
