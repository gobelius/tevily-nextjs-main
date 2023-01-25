import singaporeTour from "@/data/singaporeTour";
import React, { Fragment } from "react";
import VisibilityCountUp from "../VisibilityCountUp/VisibilityCountUp";

const { bg1, bg2, title, text, trustedBy } = singaporeTour;

const SingaporeTour = () => {
  return (
    <div className="singapore-tour">
      <div className="singapore-tour__container">
        <div className="singapore-tour__left">
          <div
            className="singapore-tour-bg"
            style={{ backgroundImage: ` url(${bg1.src})` }}
          ></div>
        </div>
        <div className="singapore-tour__right">
          <div
            className="singapore-tour-right-shape"
            style={{ backgroundImage: ` url(${bg2.src})` }}
          ></div>
          <div className="singapore-tour__content">
            <h2 className="singapore-tour__title">{title}</h2>
            <p className="singapore-tour__text">
              {text.split("\n").map((t, i) => (
                <Fragment key={i}>
                  <span>{t}</span> <br />
                </Fragment>
              ))}
            </p>
            <a href="#" className="thm-btn singapore-tour__btn">
              View Deals
            </a>
          </div>
          <div className="singapore-tour__trusted">
            <p>Trusted by</p>
            <h2 className="odometer">
              <VisibilityCountUp count={trustedBy} />
            </h2>
            <div className="singapore-tour__trusted-icon">
              <i className="fas fa-sort-up"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingaporeTour;
