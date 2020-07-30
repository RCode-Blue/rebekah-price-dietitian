import { graphql, useStaticQuery } from "gatsby";

import FetchRecipes from "./fetchContentfulRecipes";
import FetchBlogs from "./fetchContentfulBlogs";
import FetchTest from "./fetchContentfulTest";
import FetchAllBlogs from "./fetchContentfulAll";

const FetchContentfulBlogsMain = (type) => {
  switch (type) {
    case "recipes":
      // console.log("--recipes--");
      return FetchRecipes();

    case "blog":
      // console.log("--blog--");
      return FetchBlogs();

    case "test":
      // console.log("--test--");
      return FetchTest();

    default:
      // console.log("--default--");
      return FetchAllBlogs();
  }
};

export default FetchContentfulBlogsMain;
