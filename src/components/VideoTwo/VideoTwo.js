import videoTwo from "@/data/videoTwo";
import dynamic from "next/dynamic";
import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import JarallaxImage from "../Jarallax/JarallaxImage";
import VideoModal from "../VideoModal/VideoModal";

const Jarallax = dynamic(() => import("@/components/Jarallax/Jarallax"), {
  ssr: false,
});

const { bg, videoId, tagline, title } = videoTwo;

const VideoTwo = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="video-two">
        <Jarallax className="video-two-bg" speed={0.2} imgPosition="50% 0%">
          <JarallaxImage src={bg.src} />
        </Jarallax>
        <Container>
          <Row>
            <Col xl={12}>
              <div className="video-two__inner">
                <div className="video-one__video-link">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setOpen(true)}
                    className="video-popup"
                  >
                    <div className="video-one__video-icon">
                      <span className="icon-play-button"></span>
                      <i className="ripple"></i>
                    </div>
                  </a>
                </div>
                <p className="video-one__tagline">{tagline}</p>
                <h2 className="video-one__title">
                  {title.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      <span>{t}</span>
                      <br />
                    </Fragment>
                  ))}
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default VideoTwo;
