/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./FeaturedCard.css";
import iconFR from "../../../images/Landing2/icon-fire-rounded.svg";
import iconLPB from "../../../images/Landing2/icon-loaction-pin-black.svg";
import iconS from "../../../images/Landing2/icon-suitecase.svg";
import iconC from "../../../images/Landing2/icon-clock.svg";
import {LogoMap} from '../../../utility/Maps/LandingPageMaps';

function FeaturedCards({data}) {  
  return (
    <div
      className="row justify-content-center"
      style={{ overflowX: "hidden", gap: "12px" }}
    >
      {data.map(featured =>{
        var postedDate = featured.posted_date.split('T')[0];
        var PostedDate = postedDate.split('-')[2];
        var PostedMonth = postedDate.split('-')[1];

        var currentDate = new Date();
        var CurrentDate = String(currentDate.getDate()).padStart(2, '0');
        var CurrentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');

        var time = getPostedDate();

        function getPostedDate(){
          if(CurrentMonth === PostedMonth){
            return CurrentDate - PostedDate;
          } else{
            return (CurrentDate - PostedDate) + 30*(CurrentMonth - PostedMonth);
          }
        }

        return (
        <div className="rounded2 col-md-5">
        <div className="row p-3 px-4">
          <div className="col-md-7">
            <div className="media align-items-center">
              <div className="square-72 d-block mr-3">
                <img src={LogoMap.get(featured.company.name.toString()).url} className="companyLogo__featuredCards" alt="" />
              </div>
              <div>
                <h3 className="mb-0">
                  <a className="" style={{ fontFamily: "Gordita", fontSize: 17 }}>
                  {featured.title}
                  </a>
                </h3>

                <a className="font-size-3 text-default-color line-height-2"></a>
              </div>
            </div>
          </div>
          <div className="col-md-5 text-right featuredCards__stipend">
            <div className="media justify-content-md-end">
              <div className="image mr-3 mt-2">
                <img src={iconFR} alt="" />
              </div>
              <p className="mt-2">
                <span
                  className="text-black-2"
                  style={{ fontFamily: "Gordita" }}
                >
                  {featured.min_stipend}-{featured.max_stipend}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-4 pl-4">
          <div className="col-md-6">
              <TagsIcons list={featured.skills} />
          </div>
          <div className="col-md-6">
            <ul className="d-flex list-unstyled justify-content-md-end mr-3">
              <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                <span className="featureCard__detailIcons">
                  <img src={iconLPB} alt="" />
                </span>
                <span
                  className="font-weight-semibold mr-2"
                  style={{ fontFamily: "Gordita" }}
                >
                  {featured.city}
                </span>
              </li>
              <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                <span className="featureCard__detailIcons">
                  <img src={iconS} alt="" />
                </span>
                <span
                  className="font-weight-semibold mr-2"
                  style={{ fontFamily: "Gordita" }}
                >
                  {featured.kind}                  
                </span>
              </li>
              <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                <span className="featureCard__detailIcons">
                  <img src={iconC} alt="" />
                </span>
                <span
                  className="font-weight-semibold mr-2"
                  style={{ fontFamily: "Gordita" }}
                >
                  {time}d ago
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      )})}      
    </div>
  );
}

export default FeaturedCards;

export const TagsIcons =({list})=>{ 
  return (
    <ul className="d-flex list-unstyled mr-n3 flex-wrap mb-4">
      {list.map(item=>(
        <li className="mt-2">
          <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 py-1"
            style={{ fontFamily: "Gordita" }}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  )
      }