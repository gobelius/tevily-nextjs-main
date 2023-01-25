import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ToursListLeft from "./ToursListLeft";
import ToursListRight from "./ToursListRight";

const ToursListPage = () => {
  return (
    <section className='tours-list'>
      <Container>
        <Row>
          {/* <Col xl={4} lg={5}>
            <ToursListLeft />
          </Col> */}
          <Col xl={8} lg={7}>
            <ToursListRight />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ToursListPage;
