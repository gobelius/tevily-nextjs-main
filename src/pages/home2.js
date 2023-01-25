import AboutTwo from "@/components/AboutTwo/AboutTwo";
import BannerTwo from "@/components/BannerTwo/BannerTwo";
import BookNow from "@/components/BookNow/BookNow";
import BrandTwo from "@/components/BrandTwo/BrandTwo";
import CounterOne from "@/components/CounterOne/CounterOne";
import DestinationsTwo from "@/components/DestinationsTwo/DestinationsTwo";
import Layout from "@/components/Layout/Layout";
import NewsTwo from "@/components/NewsTwo/NewsTwo";
import PopularToursTwo from "@/components/PopularTours/PopularToursTwo";
import SingaporeTour from "@/components/SingaporeTour/SingaporeTour";
import ThreeIconBox from "@/components/ThreeIconBox/ThreeIconBox";
import TourTypes from "@/components/TourTypes/TourTypes";
import VideoTwo from "@/components/VideoTwo/VideoTwo";
import React from "react";

const Home2 = () => {
  return (
    <Layout pageTitle='Home Two'>
      <BannerTwo />
      <ThreeIconBox />
      <PopularToursTwo />
      <SingaporeTour />
      <VideoTwo />
      <CounterOne />
      <DestinationsTwo />
      <AboutTwo />
      <TourTypes />
      <BrandTwo />
      {/* <NewsTwo /> */}
      <BookNow />
    </Layout>
  );
};

export default Home2;
