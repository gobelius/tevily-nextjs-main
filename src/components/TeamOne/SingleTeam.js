import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleTeam = ({ team = {} }) => {
  const { image, name, title, socials } = team;

  return (
    <Col xl={3} lg={6} md={6} className="animated fadeInLeft">
      <div className="team-one__single">
        <div className="team-one__img">
          <Image src={require(`@/images/team/${image}`).default.src} alt="" />
        </div>
        <div className="team-one__content">
          <h4 className="team-one__name">{name}</h4>
          <p className="team-one__title">{title}</p>
          <div className="team-one__social">
            {socials.map(({ id, href, icon }) => (
              <a href={href} key={id}>
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleTeam;
