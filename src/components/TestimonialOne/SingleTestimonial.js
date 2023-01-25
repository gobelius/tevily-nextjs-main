import React from "react";
import { Image } from "react-bootstrap";

const SingleTestimonial = ({ testimonial }) => {
  const {
    image,
    description,
    review,
    client: { name, role },
  } = testimonial;

  return (
    <div>
      <div style={{ userSelect: "none" }} className="testimonial-one__single">
        <div className="testimonial-one__img">
          <Image
            src={require(`@/images/testimonial/${image}`).default.src}
            alt=""
          />
        </div>
        <div className="testimonail-one__content">
          <div className="testimonial-one__top-revivew-box">
            {Array.from(Array(review)).map((_, i) => (
              <i key={i} className="fa fa-star"></i>
            ))}
          </div>
          <p className="testimonial-one__text">{description}</p>
          <div className="testimonial-one__client-info">
            <h3 className="testimonial-one__client-name">{name}</h3>
            <p className="testimonial-one__client-title">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
