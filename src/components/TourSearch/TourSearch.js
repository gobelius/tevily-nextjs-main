import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TourSearchForm from "../TourSearchForm/TourSearchForm";

const TourSearch = () => {
  return (
    <section className="tour-search">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="tour-search-box">
              <TourSearchForm />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TourSearch;
