import tourTypes from "@/data/tourTypes";
import React from "react";
import { Container } from "react-bootstrap";

const { bg, tagline, title, lists } = tourTypes;

const TourTypes = () => {
  return (
    <section className="tour-types">
      <Container>
        <div
          className="tour-types-map"
          style={{ backgroundImage: ` url(${bg.src})` }}
        ></div>
        <div className="section-title text-center">
          <span className="section-title__tagline">{tagline}</span>
          <h2 className="section-title__title">{title}</h2>
        </div>
        <ul className="list-unstyled tour-types_list">
          {lists.map(({ id, icon, title }) => (
            <li key={id} className="tour-types__single animated fadeInUp">
              <div className="tour-types__content">
                <div className="tour-types__icon">
                  <span className={icon}></span>
                </div>
                <h4 className="tour-types__title">{title}</h4>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default TourTypes;
