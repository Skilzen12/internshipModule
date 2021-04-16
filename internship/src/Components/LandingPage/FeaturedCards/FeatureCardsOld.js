/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./FeaturedCard.css";
import iconFR from "../../../images/Landing2/icon-fire-rounded.svg";
import iconLPB from "../../../images/Landing2/icon-loaction-pin-black.svg";
import iconS from "../../../images/Landing2/icon-suitecase.svg";
import iconC from "../../../images/Landing2/icon-clock.svg";
import {FeaturedJobs} from '../../../utility/DummyData/LandingPageData';

function FeaturedCards() {
  return (
    <div
      className="row justify-content-center"
      style={{ overflowX: "hidden", gap: "12px" }}
    >
      {FeaturedJobs.map(featured => (
        <div className="featured__card col-md-5">
          <img src={featured.logo} className="featuredCard__logo" alt="" />
          <div className="featuredCard__header">
            <div className="col-md-6">
              <div className="align-items-center">    
                  <h3 className="mb-0">
                    <a className="font-size-6" style={{ fontFamily: "Gordita" }}>{featured.JD}</a>
                  </h3>
              </div>
            </div>
            <div className="col-md-6 text-right">
              <div className="media justify-content-md-end">
                <div className="image mr-3">
                  <img src={iconFR} alt="" />
                </div>
                <p className="mt-1">
                  <span className="text-black-2" style={{ fontFamily: "Gordita" }}>
                    {featured.package}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="featuredCard__content">
            <div className="col-md-6">              
              <TagsIcons list={featured.tags} />
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled featured_tags" style={{alignItems: 'flex-end', paddingLeft: 40}}>
                <li className="featureCard__details">
                  <img src={iconLPB} className="featureCard__detailIcon" alt="" />
                  <span className="font-weight-semibold mr-2" style={{ fontFamily: "Gordita" }} >
                    {featured.location}
                  </span>
                </li>
                <li className="featureCard__details">
                  <img src={iconS} className="featureCard__detailIcon" alt="" />
                  <span className="font-weight-semibold mr-2" style={{ fontFamily: "Gordita" }} >
                    {featured.time}
                  </span>
                </li>
                <li className="featureCard__details">
                  <img src={iconC} className="featureCard__detailIcon" alt="" />
                  <span className="font-weight-semibold mr-2" style={{ fontFamily: "Gordita" }} >
                    {featured.posted}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}      
    </div>
  );
}

export default FeaturedCards;

export const TagsIcons =({list})=>{ 
  return (
    <ul className="list-unstyled featured_tags">
      {list.map(item=>(
        <li className="featuredCard__tag">
            {item}
        </li>
      ))}
    </ul>
  )
  
}