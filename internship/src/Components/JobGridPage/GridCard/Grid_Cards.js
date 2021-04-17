import React, { useState } from 'react'
import {
  Link
} from "react-router-dom";

import {BsBookmark as Mark} from "react-icons/bs";
import AdminService from '../../../AdminServices/AdminService';
import {LogoMap} from '../../../utility/Maps/LandingPageMaps';

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
  return (
    <div className="col-12 col-xl-6 single_card_grid">
      {/* <!-- Start Feature One --> */}
      <div className="px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
        <div className="d-block mb-4">
          <Link to="/#">
            <img src={LogoMap.get(obj.company.name.toString()).url} alt="" style={{maxWidth: 200, maxHeight: 100}} />
          </Link>
        </div>
        <div className="d-block mb-0 text-gray">
          {obj.company.name}
        </div>
        <h2 className="mt-1" style={{fontFamily:'Gordita',color:'black',margin:'17px 0px'}}>
          <Link
            to={`/internship?id=${obj.uuid}`}
            className="font-weight-bold mb-4 font-size-5"
          >
            {obj.title}
          </Link>
        </h2>
        <ul className="list-unstyled mb-1 card-tag-list">
          <li>
            <Link
              to="/#"
              className="bg-regent-opacity-15 text-denim font-size-3 rounded-3"
            >
              <i className="fa fa-map-marker mr-2 font-weight-bold"></i> {obj.city}
            </Link>
          </li>
          <li>
            <Link
              to="/#"
              className="bg-regent-opacity-15 text-orange font-size-3 rounded-3"
            >
              <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
              {obj.kind}
            </Link>
          </li>
          <li>
            <Link
              to="/#"
              className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3"
            >
              <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
              {obj.min_stipend} - {obj.max_stipend} INR
            </Link>
          </li>
        </ul>
        <p className="gordita mb-7 font-size-4 text-gray">
          {obj.short_description}
        </p>
        <div className="card-btn-group">
          <Link
            to="/#"
            className="btn btn-green text-uppercase btn-medium rounded-3"
            onClick={() => Apply(obj.uuid)}
          >
            Apply Now
          </Link>
          <Link
            to="/#"
            className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3"
            onClick={() => Bookmark(obj.uuid)}
          >
            <Mark />
            Save it
          </Link>
        </div>
      </div>
      {/* <!-- End Feature One --> */}
    </div>
  );
}

export default Grid_Cards
