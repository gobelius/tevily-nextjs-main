import bookNow from "@/data/bookNow";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const { bg, subtitle, title } = bookNow;

const BookNow = () => {
  return (
    <section className="book-now">
      <div
        className="book-now-shape"
        style={{ backgroundImage: ` url(${bg.src})` }}
      ></div>
      <Container>
        <Row>
          <Col xl={12}>
            <div className="book-now__inner">
              <div className="book-now__left">
                <p>{subtitle}</p>
                <h2>{title}</h2>
              </div>
              <div className="book-now__right">
                <a href="#" className="thm-btn book-now__btn">
                  Book tour now
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BookNow;
