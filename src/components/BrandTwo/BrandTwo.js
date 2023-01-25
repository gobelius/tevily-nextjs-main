import brandTwo from "@/data/brandTwo";
import React from "react";
import { Container, Image } from "react-bootstrap";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay]);

const slideOptions = {
  spaceBetween: 100,
  slidesPerView: 5,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    0: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    375: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    575: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    767: {
      spaceBetween: 50,
      slidesPerView: 4,
    },
    991: {
      spaceBetween: 50,
      slidesPerView: 5,
    },
    1199: {
      spaceBetween: 100,
      slidesPerView: 5,
    },
  },
};

const BrandTwo = ({ brandThree = false }) => {
  return (
    <section className={brandThree ? "brand-two brand-three" : "brand-two"}>
      <Container>
        <Swiper className="thm-swiper__slider" {...slideOptions}>
          <div className="swiper-wrapper">
            {brandTwo.map((brand, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={require(`@/images/brand/${brand}`).default.src}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </Container>
    </section>
  );
};

export default BrandTwo;
