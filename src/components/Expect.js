import React from "react";

import FetchExpectDescription from "../queries/fetchExpectDescription";

import "../styles/main.scss";
import "../styles/expect.scss";

const Description = () => {
  const description = FetchExpectDescription();
  if (description) {
    const htmlContent = description.markdownRemark.html;

    return (
      <div className="expect__description">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      </div>
    );
  }

  return <div className="">description</div>;
};

const Expect = () => {
  return (
    <section className="expect section-text section-layout">
      <a name="expect"></a>
      <Description />
    </section>
  );
};
export default Expect;
