import React, { useState } from 'react'
import {
  Link
} from "react-router-dom";
import './GridCards.css'
import {BsBookmark as Mark, BsFillBookmarkFill} from "react-icons/bs";
import AdminService from '../../../AdminServices/AdminService';
import {LogoMap} from '../../../utility/Maps/LandingPageMaps';
import { HiUserGroup } from 'react-icons/hi';

const Grid_Cards = ({obj}) => {
  const Apply = (id) => {
    AdminService.InternshipsApply(id)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  const Bookmark = (id) => {
    AdminService.InternshipsApply(id)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  console.log(obj)
  return (
    <div className="col-12 col-xl-6 single_card_grid">
      <div className="px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
        <div className="d-block mb-2">
          {obj.company.logo.link ? (
            <img src={LogoMap.get(obj.company.name.toString()).url} alt="" style={{maxWidth: 200, maxHeight: 100}} />
            ) : <HiUserGroup style={{fontSize: 40}} /> }
        </div>
        <div className="company__name text-gray"> {obj.company.name ? obj.company.name : 'ABC'} </div>
        <h2 className="mt-1 mb-2" style={{fontFamily:'Gordita'}}>
          <Link to={`/internship?id=${obj.uuid}`} className="font-weight-bold font-size-5"> {obj.title ? obj.title : 'XYZ'} </Link>
        </h2>
        <ul className="tags__gridCard mb-2 card-tag-list">
          <li> 
            <div className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
              <i className="fa fa-map-marker mr-2 font-weight-bold"></i> {obj.city}
            </div>
          </li>
          <li>
            <div className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
              <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
              {obj.kind}
            </div>
          </li>
          <li>
            <div className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
              <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
              {obj.min_stipend} - {obj.max_stipend} INR
            </div>
          </li>
        </ul>
        <p className="gordita mb-7 font-size-4 text-gray"> {obj.short_description} </p>
        <div className="card-btn-group" style={{display: 'flex', flexDirection: 'row'}}>
          <button className="btn_for_apply btn_for_card" disabled={obj.is_applied} onClick={() => Apply(obj.uuid)}>{obj.is_applied ? 'Applied' : 'Apply Now'}</button>
          <button className="btn_for_apply btn_for_card" disabled={obj.is_marked} onClick={() => Bookmark(obj.uuid)}>
              {obj.is_marked ? <BsFillBookmarkFill style={{fontSize:17,paddingBottom:'2px', marginRight: 5}}/> : <Mark style={{fontSize:17, marginRight: 5, paddingBottom:'2px'}}/>}
              {obj.is_marked ? 'Saved' : 'Bookmark it'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Grid_Cards
