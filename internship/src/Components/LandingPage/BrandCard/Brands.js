import React from "react";

import imgB1 from "../../../images/Landing2/brand-light-logo-1.png";
import imgB2 from "../../../images/Landing2/brand-light-logo-2.png";
import imgB3 from "../../../images/Landing2/brand-light-logo-3.png";
import imgB4 from "../../../images/Landing2/brand-light-logo-4.png";
import imgB5 from "../../../images/Landing2/brand-light-logo-5.png";
import imgB6 from "../../../images/Landing2/brand-light-logo-6.png";
import "./Brands.css";
const Brands = () => {
  return (
    <>
      {/* <!-- Brands Area --> */}
      <div className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h5 className="company__title my-5" style={{ fontFamily: "Gordita" }} >
                  Get hired in top companies
                </h5>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-3 mb-5 gr-opacity-5">
            <div className="single-brand-logo my-6">
              <img src={imgB1} alt="" />
            </div>
            <div className="single-brand-logo my-6">
              <img src={imgB2} alt="" />
            </div>
            <div className="single-brand-logo my-6">
              <img src={imgB3} alt="" />
            </div>
            <div className="single-brand-logo my-6">
              <img src={imgB4} alt="" />
            </div>
            <div className="single-brand-logo my-6">
              <img src={imgB5} alt="" />
            </div>
            <div className="single-brand-logo my-6">
              <img src={imgB6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
