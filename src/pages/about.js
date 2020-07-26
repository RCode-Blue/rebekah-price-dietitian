import React from "react";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import About from "../components/about/About";
import Expect from "../components/Expect";
import Rates from "../components/Rates";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <a name="about"></a>
      <About />
      <Expect />
      <Rates />
      <Footer />
    </Layout>
  );
}
