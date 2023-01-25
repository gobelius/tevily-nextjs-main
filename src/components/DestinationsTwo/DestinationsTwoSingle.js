import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const DestinationsTwoSingle = ({ destination = {}, col }) => {
  const { image, title, subtitle } = destination;

  return (
    <Col xl={col} lg={col}>
      <div className="destinations-two__top-single animated fadeInUp">
        <div className="destinations-two__top-img">
          <Image
            src={require(`@/images/resources/${image}`).default.src}
            alt=""
          />
          <div className="destinations-two__top-content">
            {subtitle && (
              <p className="destinations-two__top-sub-title">{subtitle}</p>
            )}
            <h2 className="destinations-two__top-title">
              <Link href="/destinations-details">{title}</Link>
            </h2>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default DestinationsTwoSingle;
