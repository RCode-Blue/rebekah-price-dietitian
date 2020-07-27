import React from "react";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Disorders from "../components/services_/disorders";
import Programs from "../components/services_/programs";
import Footer from "../components/footer/Footer";
import Clinics from "../components/Clinics";
import Attribution from "../components/footer/Attribution";

export default function Services() {
  return (
    <Layout>
      <Navbar />
      <Disorders />
      <Programs />
      <Clinics />
      <Footer />
      <Attribution />
    </Layout>
  );
}
