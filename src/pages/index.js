import React from "react";

import Layout from "../components/Layout";
import Banner from "../components/banner/Banner";
import Navbar from "../components/Navbar";
import FrontPage from "../components/FrontPage";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Navbar />
      <FrontPage />
    </Layout>
  );
}
