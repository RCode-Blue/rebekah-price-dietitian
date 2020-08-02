import React from "react";

import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import MainBlogList from "../../components/blogs/ContentfulBlogList";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <MainBlogList type="recipes" />
    </Layout>
  );
}
