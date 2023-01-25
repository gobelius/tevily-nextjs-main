import loader from "@/images/loader.png";
import React from "react";
import { Image } from "react-bootstrap";

const Preloader = ({ loading }) => {
  return (
    <div
      style={{ opacity: loading ? 1 : 0, zIndex: loading ? 9999 : -1 }}
      className="preloader"
    >
      <Image className="preloader__image" width={60} src={loader.src} alt="" />
    </div>
  );
};

export default Preloader;
