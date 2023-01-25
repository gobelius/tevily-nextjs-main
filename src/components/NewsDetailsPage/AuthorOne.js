import React from "react";
import { Image } from "react-bootstrap";

const AuthorOne = ({ author = {} }) => {
  const { image, name, description } = author;

  return (
    <div className="author-one">
      <div className="author-one__image">
        <Image src={image.src} alt="" />
      </div>
      <div className="author-one__content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AuthorOne;
