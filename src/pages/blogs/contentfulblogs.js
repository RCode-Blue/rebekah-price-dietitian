import React from "react";

import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import ContentfulBlogList from "../../components/blogs/BlogList";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <ContentfulBlogList type="" />
    </Layout>
  );
}
