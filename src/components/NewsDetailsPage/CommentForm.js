import React from "react";
import { Col, Row } from "react-bootstrap";

const inputs = ["name", "email", "message"];

const CommentForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const data = {};
    inputs.forEach((input) => (data[input] = fromData.get(input)));
    console.log(data);
  };

  return (
    <div className="comment-form">
      <h3 className="comment-form__title">Leave a Comment</h3>
      <form onSubmit={handleSubmit} className="comment-one__form">
        <Row>
          <Col xl={6}>
            <div className="comment-form__input-box">
              <input type="text" placeholder="Your name" name="name" />
            </div>
          </Col>
          <Col xl={6}>
            <div className="comment-form__input-box">
              <input type="email" placeholder="Email address" name="email" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <div className="comment-form__input-box">
              <textarea name="message" placeholder="Write Comment"></textarea>
            </div>
            <button type="submit" className="thm-btn comment-form__btn">
              Submit Comment
            </button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default CommentForm;
