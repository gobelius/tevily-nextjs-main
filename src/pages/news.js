import Layout from "@/components/Layout/Layout";
import NewsPage from "@/components/NewsPage/NewsPage";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const News = () => {
  return (
    <Layout pageTitle="News">
      <PageHeader title="Latest News" page="News" />
      <NewsPage />
    </Layout>
  );
};

export default News;
