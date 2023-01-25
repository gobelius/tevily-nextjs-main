import React, { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

const ReviewScoreBar = ({ review = {} }) => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  const { percent, title } = review;

  return (
    <ReactVisibilitySensor
      offset={{ top: 10 }}
      delayedCall={true}
      onChange={onVisibilityChange}
    >
      <div className="tour-details__review-score__bar">
        <div className="tour-details__review-score__bar-top">
          <h3>{title}</h3>
          <p>{countStart ? percent : 0}%</p>
        </div>
        <div className="tour-details__review-score__bar-line">
          <span
            className="animated slideInLeft"
            style={{ width: `${countStart ? percent : 0}%` }}
          ></span>
        </div>
      </div>
    </ReactVisibilitySensor>
  );
};

export default ReviewScoreBar;
