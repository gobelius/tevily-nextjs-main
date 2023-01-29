import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const SingleComment = ({ comment = {} }) => {
  const {
    profile_image,
    date_of_stay,
    review_heading,
    review_body,
    company_response,
  } = comment;

  let name = company_response.split(" ")[1].split(",")[0];

  return (
    <div className='tour-details__review-comment-single'>
      <div className='tour-details__review-comment-top'>
        <div className='tour-details__review-comment-top-img'>
          <Image src={profile_image} alt='' />
        </div>
        <div className='tour-details__review-comment-top-content'>
          <h3>{name}</h3>
          <p>{date_of_stay}</p>
        </div>
      </div>
      <div className='tour-details__review-comment-content'>
        <h3>{review_heading}</h3>
        <p>{review_body}</p>
      </div>
      {/* <div className="tour-details__review-form-stars">
        <Row>
          <Col md={4}>
            <p>
              <span>Services</span>
              {Array.from(Array(5)).map((_, i) => (
                <i
                  key={i}
                  className={`fa fa-star${i < services ? " active" : ""}`}
                ></i>
              ))}
            </p>
            <p>
              <span>Locations</span>
              {Array.from(Array(5)).map((_, i) => (
                <i
                  key={i}
                  className={`fa fa-star${i < locations ? " active" : ""}`}
                ></i>
              ))}
            </p>
          </Col>
          <Col md={4}>
            <p>
              <span>Amenities</span>
              {Array.from(Array(5)).map((_, i) => (
                <i
                  key={i}
                  className={`fa fa-star${i < amenities ? " active" : ""}`}
                ></i>
              ))}
            </p>
            <p>
              <span>Prices</span>
              {Array.from(Array(5)).map((_, i) => (
                <i
                  key={i}
                  className={`fa fa-star${i < prices ? " active" : ""}`}
                ></i>
              ))}
            </p>
          </Col>
          <Col md={4}>
            <p>
              <span>Food</span>
              {Array.from(Array(5)).map((_, i) => (
                <i
                  key={i}
                  className={`fa fa-star${i < food ? " active" : ""}`}
                ></i>
              ))}
            </p>
          </Col>
        </Row>
      </div> */}
    </div>
  );
};

export default SingleComment;
