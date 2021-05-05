/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./FeaturedCard.css";
import {Link} from 'react-router-dom';
import iconFR from "../../../images/Landing2/icon-fire-rounded.svg";
import iconLPB from "../../../images/Landing2/icon-loaction-pin-black.svg";
import iconS from "../../../images/Landing2/icon-suitecase.svg";
import iconC from "../../../images/Landing2/icon-clock.svg";
import {LogoMap} from '../../../utility/Maps/LandingPageMaps';
import {HiUserGroup} from 'react-icons/hi'

function FeaturedCards({data}) {  
  return (
    <div
      className="row justify-content-center"
      style={{ overflowX: "hidden", gap: "12px" }}
    >
      {data.map(featured =>{ 
        let given = featured.posted_date ? featured.posted_date : 0;
        if(given){
          var postedDate = given.split('T')[0];
          var PostedDate = postedDate.split('-')[2];
          var PostedMonth = postedDate.split('-')[1];

          var currentDate = new Date();
          var CurrentDate = String(currentDate.getDate()).padStart(2, '0');
          var CurrentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');

          var time = getPostedDate();
        }       

        function getPostedDate(){
          if(CurrentMonth === PostedMonth){
            return CurrentDate - PostedDate;
          } else{
            return (CurrentDate - PostedDate) + 30*(CurrentMonth - PostedMonth);
          }
        }
        // console.log('featured.company.name',featured.company.name);
        return (
        <div className="rounded2 col-md-5">
          <div className="col-md-12">
            <div className="media" style={{flexDirection: 'column', }}>
              <div className="square-72 d-block mr-3">
                {featured.company.logo.link && LogoMap.get(featured.company.name) ? (
                  <img src={LogoMap.get(featured.company.name)?.url} className="companyLogo__featuredCards" alt="" />
                ) : <HiUserGroup style={{fontSize: 40}} /> }
              </div>
              <div className="roww">
                <h3 className="mb-0">
                  <Link to={{
                    pathname: `/internship/${featured.uuid}`
                  }}>
                    <a className="" style={{ fontFamily: "Gordita", fontSize: 20 }}>{featured.title ? featured.title : 'XYZ Company'}</a>
                  </Link>
                </h3>
                <div className="media stipend__featured">
                  <img src={iconFR} alt="" className="featured__fireIcons" />
                  <p className="mt-2">
                    <span className="featured__paid">
                      {featured.min_stipend}-{featured.max_stipend} INR
                    </span>
                  </p>
                </div>
              </div>
          </div>
        </div>
        <div className="row pt-1" style={{gap: 10}}>
          <div className="col-md-12" style={{padding: 0, paddingLeft: 15, paddingRight: 15}}>
            <h5 className="text__skills mb-0">Required Skills :</h5>
            <TagsIcons list={featured.skills} />
          </div>
          <div className="col-md-12" style={{padding: 0, paddingLeft: 15, paddingRight: 15}}>
            <h5 className="text__skills mb-0">Details :</h5>
            <ul className="details__featured">
              {featured.city ? (
                <li className="mt-2 font-size-small text-black-2 d-flex">
                  <span className="featureCard__detailIcons"> <img src={iconLPB} alt="" /> </span>
                  <span className="font-weight-semibold" style={{ fontFamily: "Gordita" }} >
                    {featured.city}
                  </span>
                </li>
              ): null}     
              {featured.kind ? (
                <li className="mt-2 font-size-small text-black-2 d-flex">
                  <span className="featureCard__detailIcons"> <img src={iconS} alt="" /> </span>
                  <span className="font-weight-semibold" style={{ fontFamily: "Gordita" }} >
                    {featured.kind}                  
                  </span>
                </li>
              ): null}     
              {featured.posted_date ? (
                <li className="mt-2 font-size-small text-black-2 d-flex">
                  <span className="featureCard__detailIcons"> <img src={iconC} alt="" /> </span>
                  <span className="font-weight-semibold" style={{ fontFamily: "Gordita" }} >
                    {time}d ago
                  </span>
                </li>
              ): null}  
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
    <ul className="tags__featured">
      {list.map(item=>(
        <li className="mt-1">
          <a className="bg-regent-opacity-15 min-width-px-96 text-center rounded-3 py-1"
            style={{ fontFamily: "Gordita" }}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  )
      }