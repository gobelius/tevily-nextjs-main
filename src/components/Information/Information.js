import information from "@/data/information";
import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

const { address, phones, mails } = information;

const Information = () => {
  return (
    <section className="information">
      <Container>
        <Row>
          <Col xl={4} lg={4}>
            <div className="information__single">
              <div className="information__icon">
                <span className="icon-place"></span>
              </div>
              <div className="information__text">
                <p>
                  {address.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      <span>{t}</span> <br />
                    </Fragment>
                  ))}
                </p>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={4}>
            <div className="information__single">
              <div className="information__icon">
                <span className="icon-phone-call"></span>
              </div>
              <div className="information__text">
                <h4>
                  {phones.map((phone, index) => (
                    <Fragment key={index}>
                      <a
                        href={`tel:${phone}`}
                        className={`information__number-${index + 1}`}
                      >
                        {phone}
                      </a>
                      <br />
                    </Fragment>
                  ))}
                </h4>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={4}>
            <div className="information__single">
              <div className="information__icon">
                <span className="icon-at"></span>
              </div>
              <div className="information__text">
                <h4>
                  {mails.map((mail, index) => (
                    <Fragment key={index}>
                      <a
                        href={`mailto:${mail}`}
                        className={`information__mail-${index + 1}`}
                      >
                        {mail}
                      </a>
                      <br />
                    </Fragment>
                  ))}
                </h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Information;
