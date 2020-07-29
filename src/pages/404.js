import React from "react";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/Footer";
import Err404 from "../components/404";

export default function Error404() {
  return (
    <Layout>
      <Navbar />
      <Err404 />
      <Footer />
    </Layout>
  );
}
