import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/MainSliderTwo/MainSliderTwo";
import JajceDetailsPage from "@/components/TourDetails/JajceDetailsPage";
import TourDetailsPage from "@/components/TourDetails/TourDetailsPage";
import React from "react";

const TourDetails = () => {
  return (
    <Layout pageTitle='Tours Details'>
      <MainSliderTwo />
      <JajceDetailsPage />
    </Layout>
  );
};

export default TourDetails;
