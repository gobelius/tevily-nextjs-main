import React from "react";
import { Image } from "react-bootstrap";

const SingleTestimonial = ({ testimonial }) => {
  let names = testimonial.company_response.split(" ");

  const { profile_image, review_body } = testimonial;

  return (
    <div>
      <div style={{ userSelect: "none" }} className='testimonial-one__single'>
        <div className='testimonial-one__img'>
          <Image src={profile_image} alt='' />
        </div>
        <div className='testimonail-one__content'>
          <div className='testimonial-one__top-revivew-box'>
            {Array.from(Array(5)).map((_, i) => (
              <i key={i} className='fa fa-star'></i>
            ))}
          </div>
          <p className='testimonial-one__text line-clamp'>{review_body}</p>
          <div className='testimonial-one__client-info'>
            <h3 className='testimonial-one__client-name'>
              {names[1].split(",")[0]}
            </h3>
            {/* <p className='testimonial-one__client-title'>{"role"}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
