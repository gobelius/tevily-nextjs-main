import { destinationsDetailsRight } from "@/data/destinationsDetails";
import React, { Fragment } from "react";
import { Image } from "react-bootstrap";

const {
  title,
  lists,
  discount: { image, percent, title: discountTitle },
} = destinationsDetailsRight;

const DestinationsDetailsRight = () => {
  return (
    <div className="destinations-details__right">
      <div className="tour-details-two__last-minute tour-details-two__last-minute-2">
        <h3 className="tour-details-two__sidebar-title">{title}</h3>
        <ul className="tour-details-two__last-minute-list list-unstyled">
          {lists.map(({ id, image, price, title, subtitle }) => (
            <li key={id}>
              <div className="tour-details-two__last-minute-image">
                <Image
                  src={require(`@/images/resources/${image}`).default.src}
                  alt=""
                />
              </div>
              <div className="tour-details-two__last-minute-content">
                <h6>${price}</h6>
                <h5>{title}</h5>
                <p>{subtitle}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="destinations-details__discount">
        <Image src={image.src} alt="" />
        <div className="destinations-details__discount-content">
          <h2>{percent}</h2>
          <h4>
            {discountTitle.split("\n").map((t, i) => (
              <Fragment key={i}>
                <span>{t}</span> <br />
              </Fragment>
            ))}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default DestinationsDetailsRight;
