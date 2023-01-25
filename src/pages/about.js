import AboutPage from "@/components/AboutPage/AboutPage";
import BookNow from "@/components/BookNow/BookNow";
import BrandTwo from "@/components/BrandTwo/BrandTwo";
import CounterOne from "@/components/CounterOne/CounterOne";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import TeamOne from "@/components/TeamOne/TeamOne";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";
import VideoTwo from "@/components/VideoTwo/VideoTwo";
import React from "react";

const About = () => {
  return (
    <Layout pageTitle="About">
      <PageHeader title="About" outerPage="Pages" />
      <AboutPage />
      <BookNow />
      <TestimonialOne aboutPage />
      <VideoTwo />
      <CounterOne />
      <TeamOne />
      <BrandTwo brandThree />
    </Layout>
  );
};

export default About;
