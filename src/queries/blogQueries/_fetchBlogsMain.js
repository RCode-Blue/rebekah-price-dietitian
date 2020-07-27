import { graphql, useStaticQuery } from "gatsby";

import FetchRecipes from "./fetchRecipes";
import FetchBlogs from "./fetchBlogs";
import FetchAllBlogs from "./fetchAll";

const FetchBlogsMain = (type) => {
  switch (type) {
    case "recipes":
      return FetchRecipes();
    // break;

    case "blog":
      return FetchBlogs();
    // break;

    default:
      return FetchAllBlogs();
    // break;
  }
};

export default FetchBlogsMain;
