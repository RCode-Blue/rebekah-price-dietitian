import React from "react";

import Layout from "../components/Layout";
import Banner from "../components/banner/Banner";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Navbar />
    </Layout>
  );
}
