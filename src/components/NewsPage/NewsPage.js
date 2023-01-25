import newsPage from "@/data/newsPage";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleNewsOne from "../NewsOne/SingleNewsOne";

const NewsPage = () => {
  return (
    <section className="news-one">
      <Container>
        <Row>
          {newsPage.map((news) => (
            <Col
              xl={4}
              lg={6}
              md={6}
              key={news.id}
              className="animated fadeInUp"
            >
              <SingleNewsOne news={news} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default NewsPage;
