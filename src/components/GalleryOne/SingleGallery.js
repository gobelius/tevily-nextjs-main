import React from "react";
import { Image } from "react-bootstrap";

const SingleGallery = ({ image = "" }) => {
  return (
    <li className="animated fadeInUp">
      <div className="gallery-one__img-box">
        <Image src={require(`@/images/gallery/${image}`).default.src} alt="" />
        <div className="gallery-one__iocn">
          <a href={`@/images/gallery/${image}`}>
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </li>
  );
};

export default SingleGallery;
