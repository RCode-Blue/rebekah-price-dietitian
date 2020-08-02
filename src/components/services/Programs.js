import React, { useState } from "react";

import FetchPrograms from "../../queries/fetchPrograms";

import "../../styles/main.scss";
import "../../styles/shared/shared.scss";
import "../../styles/programs.scss";

const Programs = () => {
  const data = FetchPrograms();

  if (data) {
    const {
      allMarkdownRemark: { nodes: programs },
    } = data;

    const [val, setVal] = useState(0);
    const {
      frontmatter: { title: title },
      html,
      id,
    } = programs[val];

    return (
      <section className="programs section-text section-wrap">
        <h3>Programs</h3>
        <div className="programs__titles">
          {programs.map((program, index) => {
            return (
              <button
                className={`${
                  index === val ? "btn btn__active__melon" : "btn btn__passive"
                }`}
                key={program.id}
                onClick={() => {
                  setVal(index);
                }}
              >
                {program.frontmatter.title}
              </button>
            );
          })}
        </div>
        <article className="programs__details">
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </article>
      </section>
    );
  }

  return <div>Program</div>;
};

export default Programs;
