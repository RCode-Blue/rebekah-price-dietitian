import React from "react";

import FetchRates from "../queries/fetchRates";

import "../styles/main.scss";
import "../styles/rates.scss";

const RenderRates = (props) => {
  // console.log(props);
  const { description, duration, medium, rate } = props.node.frontmatter;
  const { html, id } = props.node;
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
};

const Rates = () => {
  const data = FetchRates();
  if (data) {
    const {
      allMarkdownRemark: { nodes },
    } = data;
    return (
      <section className="rates section-text section-layout">
        <h3>Rates</h3>
        {nodes.map((node) => {
          return (
            <div key={node.id}>
              <RenderRates node={node} />
            </div>
          );
        })}
      </section>
    );
  }
  return <div className="">rates</div>;
};
export default Rates;
