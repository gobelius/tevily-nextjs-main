import videoOne from "@/data/videoOne";
import dynamic from "next/dynamic";
import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import JarallaxImage from "../Jarallax/JarallaxImage";
import VideoModal from "../VideoModal/VideoModal";

const Jarallax = dynamic(() => import("@/components/Jarallax/Jarallax"), {
  ssr: false,
});

const { bg, videoId, tagline, title, iconBoxes } = videoOne;

const VideoOne = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="video-one">
        <Jarallax className="video-one-bg" speed={0.2} imgPosition="50% 0%">
          <JarallaxImage src={bg.src} />
        </Jarallax>
        <Container>
          <Row>
            <Col xl={6} lg={6}>
              <div className="video-one__left">
                <div className="video-one__video-link">
                  <div
                    style={{ cursor: "pointer", width: "min-content" }}
                    onClick={() => setOpen(true)}
                    className="video-popup"
                  >
                    <div className="video-one__video-icon">
                      <span className="icon-play-button"></span>
                      <i className="ripple"></i>
                    </div>
                  </div>
                </div>
                <p className="video-one__tagline">{tagline}</p>
                <h2 className="video-one__title">{title}</h2>
              </div>
            </Col>
            <Col xl={6} lg={6}>
              <div className="video-one__right">
                <ul className="list-unstyled video-one__four-icon-boxes">
                  {iconBoxes.map(({ id, icon, title }) => (
                    <li key={id}>
                      <div className="video-one__icon-box">
                        <span className={icon}></span>
                      </div>
                      <h4 className="video-one__icon-box-title">
                        <a href="#">
                          {title.split("\n").map((t, i) => (
                            <Fragment key={i}>
                              <span>{t}</span>
                              <br />
                            </Fragment>
                          ))}
                        </a>
                      </h4>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default VideoOne;
