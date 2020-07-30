import React from "react";

import FetchAttribution from "../../queries/fetchAttributionContent";
import "../../styles/main.scss";
import "../../styles/attribution.scss";

const Attribution = () => {
  const data = FetchAttribution();
  if (data) {
    return (
      <div className="attrib">
        <div className="attrib__header">Copyright Attribution</div>
        <div className="attrib__list">
          {data.attribution.nodes.map((node) => {
            const { id } = node;
            const {
              contributor,
              contributor_url,
              location,
              resource_type,
              resource_url,
              website,
            } = node.frontmatter;

            return (
              <div className="attrib__list__row" key={id}>
                <i className="fas fa-asterisk"></i>
                <div>
                  <span className="first-cap">{location}</span>{" "}
                  <span>{resource_type}</span> by{" "}
                  <a href={contributor_url} target="_blank">
                    {contributor}
                  </a>{" "}
                  from{" "}
                  <a href={resource_url} target="_blank">
                    {website}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return <div className="attrib">attribution</div>;
};

export default Attribution;
