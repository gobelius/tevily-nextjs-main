import galleryOne from "@/data/galleryOne";
import React, { useState, useCallback } from "react";
import SingleGallery from "./SingleGallery";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const { bg, galleryData } = galleryOne;

const GalerijaZaDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <section className='galerija-za-details'>
      <div className='gallery-one__container-box clearfix'>
        {/* <ul className='list-unstyled gallery-one__content clearfix'>
          {galleryData.map((image, index) => (
            <SingleGallery key={index} image={image} />
          ))}
        </ul> */}
        <Gallery photos={galleryData} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={galleryData.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>{" "}
      </div>
    </section>
  );
};

export default GalerijaZaDetails;
