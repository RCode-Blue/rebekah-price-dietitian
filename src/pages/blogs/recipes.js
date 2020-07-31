import React from "react";

import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import BlogList from "../../components/blogs/contentfulBlogList";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <BlogList type="recipes" />
    </Layout>
  );
}
