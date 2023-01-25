import destinationsOne from "@/data/destinationsOne";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleDestination from "./SingleDestination";

const DestinationsOne = () => {
  return (
    <section className="destinations-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Destination lists</span>
          <h2 className="section-title__title">Go Exotic Places</h2>
        </div>
        <Row className="masonary-layout">
          {destinationsOne.slice(0, 5).map((destination) => (
            <SingleDestination key={destination.id} destination={destination} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DestinationsOne;
