import React from "react";

import Layout from "../components/Layout";
import Banner from "../components/banner/Banner";
import Navbar from "../components/Navbar";
import FrontPage from "../components/FrontPage";
import ContactForm from "../components/ContactForm";
import Footer from "../components/footer/Footer";
import Attribution from "../components/footer/Attribution";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Navbar />
      <FrontPage />
      <ContactForm />
      <Footer />
      <Attribution />
    </Layout>
  );
}
