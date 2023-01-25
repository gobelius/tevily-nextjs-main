import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TourDetailsLeft from "./TourDetailsLeft";
import TourDetailsSidebar from "./TourDetailsSidebar";

const TourDetailsTwo = () => {
  return (
    <section className='tour-details-two'>
      <Container>
        <Row style={{ alignItems: "baseline" }} className='h-100'>
          <Col
            xl={8}
            lg={7}
            style={{ position: "sticky", top: "2rem", alignSelf: "flex-start" }}
          >
            <TourDetailsLeft />
          </Col>
          <Col xl={4} lg={5}>
            <TourDetailsSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TourDetailsTwo;
