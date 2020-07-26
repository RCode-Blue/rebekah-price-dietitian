import React, { useState } from "react";

import FetchDisorders from "../../queries/fetchDisorders";

import "../../styles/main.scss";
// import "../../styles/shared/shared.scss";
import "../../styles/disorders.scss";

const Disorders = () => {
  const data = FetchDisorders();

  if (data) {
    const {
      allMarkdownRemark: { nodes: disorders },
    } = data;

    const [val, setVal] = useState(0);
    const {
      frontmatter: { title: title },
      html,
      id,
    } = disorders[val];

    return (
      <section className="disorders section-text section-layout">
        <h3>Services</h3>

        <div className="disorders__titles">
          {disorders.map((disorder, index) => {
            return (
              <button
                className={`${
                  index === val ? "btn btn__active__mint" : "btn btn__passive"
                }`}
                key={disorder.id}
                onClick={() => {
                  setVal(index);
                }}
              >
                {disorder.frontmatter.title}
              </button>
            );
          })}
        </div>
        <article className="disorders__details">
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </article>
      </section>
    );
  }

  return <div>Disorder</div>;
};

export default Disorders;
