import { useRef } from "react";
import SingleTour from "@/components/PopularTours/SingleTour";
import popularTours from "@/data/popularTours";
import { tourDetailsLeft } from "@/data/tourDetailsPage";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ReviewForm from "./ReviewForm";
import ReviewScoreBar from "./ReviewScoreBar";
import SingleComment from "./SingleComment";
import { tripAdvisorTestimonials } from "../../../public/testimonials.json";

const { overview, overviewList, faq, comments } = tourDetailsLeft;

const TourDetailsLeft = () => {
  const [active, setActive] = useState(1);
  const accordionRef = useRef(null);

  const slideInView = () => console.log(accordionRef.current);

  const mostarComments = tripAdvisorTestimonials.filter(
    (comment) =>
      comment.url ===
      "https://www.tripadvisor.com/ShowUserReviews-g294450-d17717632-r718300285-Mostar_Blagaj_Dervish_House_Pocitelj_Konjic_Day_Tour_from_Sarajevo-Sarajevo_Sar.html"
  );

  return (
    <div className='tour-details-two__left'>
      <div className='tour-details-two__overview'>
        <h3 className='tour-details-two__title'>Overview</h3>
        <p className='tour-details-two__overview-text'>{overview}</p>
        <div className='tour-details-two__overview-bottom'>
          <h3 className='tour-details-two-overview__title'>Included/Exclude</h3>
          <div className='tour-details-two__overview-bottom-inner'>
            <div className='tour-details-two__overview-bottom-left'>
              <ul className='list-unstyled tour-details-two__overview-bottom-list'>
                {overviewList.slice(0, 4).map((over, index) => (
                  <li key={index}>
                    <div className='icon'>
                      <i className='fa fa-check'></i>
                    </div>
                    <div className='text'>
                      <p>{over}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className='tour-details-two__overview-bottom-right'>
              <ul className='list-unstyled tour-details-two__overview-bottom-right-list'>
                {overviewList.slice(4).map((over, index) => (
                  <li key={index}>
                    <div className='icon'>
                      <i className='fa fa-times'></i>
                    </div>
                    <div className='text'>
                      <p>{over}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='tour-details-two__tour-plan'>
        <h3 className='tour-details-two__title'>Tour Plan</h3>
        <div className='accrodion-grp faq-one-accrodion'>
          {faq.map(({ id, title, text, lists }) => (
            <div
              className={`accrodion overflow-hidden${
                active === id ? " active" : ""
              }`}
              key={id}
            >
              <div
                onClick={() => {
                  setActive(id), slideInView();
                }}
                className='accrodion-title'
                ref={accordionRef}
              >
                <h4>
                  <span>Day {id}</span> {title}
                </h4>
              </div>
              <div
                className={`accrodion-content animated ${
                  active === id ? "slideInUp d-block" : "slideInDown d-none"
                }`}
              >
                <div className='inner'>
                  <p>{text}</p>
                  <ul className='list-unstyled'>
                    {lists.map((list, index) => (
                      <li key={index}>{list}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='tour-details-two__location'>
        {/* <h3 className='tour-details-two__title'>Mapa</h3> */}
      </div>

      <h3 className='tour-details-two__title review-scores__title'>Reviews</h3>
      {/* <div className='tour-details__review-score'>
        <div className='tour-details__review-score-ave'>
          <div className='my-auto'>
            <h3>{superb}</h3>
            <p>
              <i className='fa fa-star'></i> Super
            </p>
          </div>
        </div>
        <div className='tour-details__review-score__content'>
          {reviewScore.map((review) => (
            <ReviewScoreBar review={review} key={review.id} />
          ))}
        </div>
      </div> */}
      <div className='tour-details__review-comment'>
        {mostarComments.map((comment) => (
          <SingleComment comment={comment} key={comment.timestamp} />
        ))}
      </div>
      <div className='tour-details-two__related-tours'>
        <h3 className='tour-details-two__title'>Frequently bought together</h3>
        <Row>
          {popularTours.slice(0, 2).map((tour) => (
            <Col xl={6} key={tour.id}>
              <SingleTour tour={tour} userSelect />
            </Col>
          ))}
        </Row>
      </div>
      {/* <ReviewForm reviews={reviews} /> */}
    </div>
  );
};

export default TourDetailsLeft;
