import React from "react";

import FetchAttribution from "../../queries/fetchAttributionContent";
import { useState } from "react";

import "../../styles/main.scss";
import "../../styles/attribution.scss";

const RenderArrow = (props) => {
  if (props.display === true) {
    return <i className="fa fa-caret-up"></i>;
  }
  return <i className="fa fa-caret-down"></i>;
};

const RenderAttribList = (props) => {
  if (props.display === true) {
    return (
      <div className="attrib__list">
        {props.data.attribution.nodes.map((node) => {
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
    );
  }

  return <div></div>;
};

const Attribution = () => {
  const [showAttr, setShowAttr] = useState(false);
  const data = FetchAttribution();

  if (data) {
    return (
      <div className="attrib">
        <div className="attrib__header">
          <span>Copyright Attribution</span>
          <span>
            <button
              className="btn-attrib"
              onClick={() => {
                setShowAttr(!showAttr);
              }}
            >
              <RenderArrow display={showAttr} />
            </button>
          </span>
        </div>

        <RenderAttribList data={data} display={showAttr} />
      </div>
    );
  }

  return <div className="attrib">attribution</div>;
};

export default Attribution;
