import teamOne from "@/data/teamOne";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleTeam from "./SingleTeam";

const { bg, tagline, title, teams } = teamOne;

const TeamOne = () => {
  return (
    <section className="team-one">
      <div
        className="team-one-map"
        style={{ backgroundImage: ` url(${bg.src})` }}
      ></div>
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">{tagline}</span>
          <h2 className="section-title__title">{title}</h2>
        </div>
        <Row>
          {teams.map((team) => (
            <SingleTeam team={team} key={team.id} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TeamOne;
