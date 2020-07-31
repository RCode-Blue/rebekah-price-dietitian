import { graphql, useStaticQuery } from "gatsby";

import FetchRecipes from "./fetchContentfulRecipes";
import FetchBlogs from "./fetchContentfulBlogs";
import FetchTest from "./fetchContentfulTest";
import FetchAllBlogs from "./fetchContentfulAll";

const FetchContentfulBlogsMain = (type) => {
  switch (type) {
    case "recipes":
      return FetchRecipes();

    case "blog":
      return FetchBlogs();

    case "test":
      return FetchTest();

    default:
      return FetchAllBlogs();
  }
};

export default FetchContentfulBlogsMain;
