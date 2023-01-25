import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import ToursListPage from "@/components/ToursListPage/ToursListPage";
import React from "react";

const ToursList = () => {
  return (
    <Layout pageTitle="Tours List">
      <PageHeader title="Tours List" page="Tours" />
      <ToursListPage />
    </Layout>
  );
};

export default ToursList;
