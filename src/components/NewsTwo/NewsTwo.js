import newsTwo from "@/data/newsTwo";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleNewsOne from "../NewsOne/SingleNewsOne";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  loop: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: true,
  controlsContainer: ".news-two .tns-controls",
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    0: {
      items: 1,
      gutter: 0,
    },
    576: {
      items: 2,
      gutter: 30,
    },
    768: {
      items: 3,
      gutter: 30,
    },
  },
};

const { tagline, title, description, newsData } = newsTwo;

const NewsTwo = () => {
  return (
    <section className="news-two">
      <Container>
        <Row>
          <Col xl={4}>
            <div className="news-two_left">
              <div className="section-title text-left">
                <span className="section-title__tagline">{tagline}</span>
                <h2 className="section-title__title">{title}</h2>
              </div>
              <p className="news-two__text">{description}</p>
              <div className="tns-controls">
                <button className="tns-prev">
                  <span className="icon-right-arrow left"></span>
                </button>
                <button className="tns-next">
                  <span className="icon-right-arrow"></span>
                </button>
              </div>
            </div>
          </Col>
          <Col xl={8}>
            <div className="news-two__right">
              <div className="news-two__carousel">
                <TinySlider settings={settings}>
                  {newsData.map((news) => (
                    <SingleNewsOne newsTwo key={news.id} news={news} />
                  ))}
                </TinySlider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsTwo;
