import React from "react";
import { Image } from "react-bootstrap";

const CommentOne = ({ comments = [] }) => {
  return (
    <div className="comment-one">
      <h3 className="comment-one__title">{comments.length} Comments</h3>
      {comments.map(({ id, image, name, message }) => (
        <div className="comment-one__single" key={id}>
          <div className="comment-one__image">
            <Image src={require(`@/images/blog/${image}`).default.src} alt="" />
          </div>
          <div className="comment-one__content">
            <h3>{name}</h3>
            <p>{message}</p>
            <a href="#" className="thm-btn comment-one__btn">
              Reply
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentOne;
