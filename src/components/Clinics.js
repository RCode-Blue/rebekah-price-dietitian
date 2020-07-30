import React, { useState } from "react";

import FetchClinics from "../queries/fetchClinics";

import "../styles/main.scss";
import "../styles/clinics.scss";

const Clinics = () => {
  const data = FetchClinics();

  if (data) {
    const {
      allMarkdownRemark: { nodes: clinics },
    } = data;

    const [val, setVal] = useState(0);
    const {
      frontmatter: {
        address1,
        address2,
        clinic_name,
        postcode,
        state,
        suburb,
        clinic_url,
        time1,
        time2,
        notes,
      },
      html,
      id,
    } = clinics[val];

    return (
      <section className="clinics section-text section-wrap">
        <h3 name="locations">Locations</h3>
        <div className="section-inner-row">
          {" "}
          <div className="clinic__title">
            {clinics.map((clinic, index) => {
              return (
                <button
                  className={`${
                    index === val
                      ? "btn btn__active__melon"
                      : "btn btn__passive"
                  }`}
                  key={clinic.id}
                  onClick={() => {
                    setVal(index);
                  }}
                >
                  {clinic.frontmatter.time1}
                </button>
              );
            })}
          </div>
          <div className="clinic__details">
            <div className="clinic__details__address">
              <div className="clinic__details__address__name">
                {clinic_name}
              </div>
              <div className="">{address1}</div>
              <div className="">{address2}</div>
              <div className="">{suburb}</div>
              <div className="">
                {state}, {postcode}
              </div>
            </div>
            <div
              className="clinic__details__map"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
          </div>
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

export default Clinics;
