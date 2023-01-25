import { destinationsDetailsLeft } from "@/data/destinationsDetails";
import React from "react";
import { Image } from "react-bootstrap";
import DestinationsDetailsFaq from "./DestinationsDetailsFaq";

const { image, discoverTitle, texts, overviewTitle, overviews, faqs } =
  destinationsDetailsLeft;

const DestinationsDetailsLeft = () => {
  return (
    <div className="destinations-details__left">
      <div className="destinations-details__img">
        <Image src={image.src} alt="" />
      </div>
      <div className="destinations-details__discover">
        <h3 className="destinations-details__title">{discoverTitle}</h3>
        {texts.map((text, index) => (
          <p
            key={index}
            className={`destinations-details__discover-text-${index + 1}`}
          >
            {text}
          </p>
        ))}
      </div>
      <div className="destinations-details__overview">
        <h3 className="destinations-details__title">{overviewTitle}</h3>
        <ul className="list-unstyled destinations-details__overview-list">
          {overviews.map(({ id, left, right }) => (
            <li key={id}>
              <div className="destinations-details__overview-left">
                <p>{left}</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{right}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <DestinationsDetailsFaq faqs={faqs} />
    </div>
  );
};

export default DestinationsDetailsLeft;
