import React from "react";

import FetchExpectDescription from "../queries/fetchExpectDescription";
import RatesData from "../queries/fetchRates";

import "../styles/main.scss";
import "../styles/expect.scss";
import FetchRates from "../queries/fetchRates";

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

const Rates = () => {
  const rates = FetchRates();

  if (rates) {
    console.log(rates.allMarkdownRemark.nodes);

    return (
      <div className="expect__rates">
        <h3>Rates</h3>
        {rates.allMarkdownRemark.nodes.map((node) => {
          const { description, duration, medium, rate } = node.frontmatter;
          const { html, id } = node;
          return (
            <div className="rate" key={id}>
              <div className="rate__header">{description}</div>
              <div className="rate__detail">
                <span>Duration:</span>
                <span>{duration}</span>
              </div>
              <div className="rate__detail">
                <span>Medium:</span>
                <span>{medium}</span>
              </div>
              <div className="rate__detail">
                <span>Rate:</span>
                <span>{rate}</span>
              </div>
              <div
                className="rate__more"
                dangerouslySetInnerHTML={{ __html: html }}
              ></div>
            </div>
          );
        })}
      </div>
    );
  }
  return <div className="">rates</div>;
};

const Expect = () => {
  return (
    <div className="expect section-text section-layout">
      <Description />
      <Rates />
    </div>
  );
};
export default Expect;
