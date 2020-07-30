import React from "react";

import FetchRates from "../queries/fetchRates";

import "../styles/main.scss";
import "../styles/rates.scss";

const RenderRates = (props) => {
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
      <section className="section-text section-wrap section-bg-mint">
        <div className="rates">
          <h3>Rates</h3>
          {nodes.map((node) => {
            return (
              <div key={node.id}>
                <RenderRates node={node} />
              </div>
            );
          })}
        </div>
      </section>
    );
  }
  return (
    <div>
      <i class="fas fa-spinner fa-spin fa-3x"></i>
    </div>
  );
};
export default Rates;
