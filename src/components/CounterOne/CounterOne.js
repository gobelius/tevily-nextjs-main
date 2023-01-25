import counterOne from "@/data/counterOne";
import React from "react";
import VisibilityCountUp from "../VisibilityCountUp/VisibilityCountUp";

const CounterOne = () => {
  return (
    <div className="counter-one">
      <div className="counter-one__container">
        <ul className="list-unstyled counters-one__box">
          {counterOne.map(({ id, text, count }) => (
            <li key={id} className="counter-one__single animated fadeInUp">
              <h3 className="odometer">
                <VisibilityCountUp count={count} />
              </h3>
              <p className="counter-one__text">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CounterOne;
