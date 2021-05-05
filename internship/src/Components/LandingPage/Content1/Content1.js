import React from "react";
import imgC from "../../../images/Landing2/content-2-img1.png";
import "./Content1.css";

const Content = ({count}) => {
  return (
    <>
      <section className="pt-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10 col-xs-11">
              <div className="position-relative ">
                <img src={imgC} alt="" className="image__explore__landing" />
                <div className="abs-content pos-abs-br bg-white shadow-2">
                  <div className="media">
                    <span className="check-mark bg-yellow-2 circle-41">
                      <i className="fas fa-check text-white  font-size-6"></i>
                    </span>
                    <div
                      className="media-body pl-4"
                      style={{ fontFamily: "Gordita" }}
                    >
                      <h6 className="mb-0 title__lower text-uppercase">
                        Job alert!
                      </h6>
                      <p className="mb-0 font-size-4 text-black-2">
                        {count} jobs are available!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-8 col-xs-10  media-card-container">
              <div className="content-1 pl-3" style={{ fontFamily: "Gordita" }}>
                <h2 className="content__title__landing">
                  Help you to get the <br className="d-none d-sm-block" /> best job that fits you
                </h2>
                <div className="media">
                  <div className="media-icon p-2 mt-3 mr-3 bg-red-opacity-2 rounded-5">
                    <i className="fa fa-tasks text-red"></i>
                  </div>
                  <div className="media-body pl-7">
                    <h5 className="mb-2 mt-4 hashtag2">
                      #1 Jobs site in India
                    </h5>
                    <p className="mb-3">
                      Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
                    </p>
                  </div>
                </div>
                <div className="media mb-11">
                  <div className="media-icon p-2 mr-3 bg-red-opacity-2 rounded-5">
                    <i className="fa fa-search text-red"></i>
                  </div>
                  <div className="media-body pl-7 mb-4">
                    <h5 className="mb-1 heading__landing__section">
                      Seamless searching
                    </h5>
                    <p className="mb-0 text-description">
                      Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-icon p-2 mr-3 mr-2 bg-red-opacity-2 rounded-5">
                    <i className="fa fa-industry text-red"></i>
                  </div>
                  <div className="media-body">
                    <h5 className="mb-1 heading__landing__section">
                      Hired in top companies
                    </h5>
                    <p className="mb-0 text-description">
                      Podcasting operational change management inside of workflows to establish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
