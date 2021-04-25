import React, { useState } from 'react'
import {
  Link
} from "react-router-dom";
import './GridCards.css'
import {BsBookmark as Mark, BsFillBookmarkFill} from "react-icons/bs";
import AdminService from '../../../AdminServices/AdminService';
import {LogoMap} from '../../../utility/Maps/LandingPageMaps';
import { HiUserGroup } from 'react-icons/hi';
import { useSelector , useDispatch } from 'react-redux'

const Grid_Cards = ({obj}) => {
  const user = useSelector(state => state.user);
    let [bookmark, setBookmark] = useState(false);
    let [apply, setApply] = useState(false);

    const Apply = async (uuid) => {
        if(user.user_profile){
            AdminService.InternshipsApply(uuid)
                .then(res => {
                    if(res.status === 200){
                        setApply(true);
                    }
                })
        .catch(err => console.log(err))
        } else{
            window.open('/applyForm', '_self');
        }        
    }

    const Bookmark = async (uuid) => {
        AdminService.InternshipsBookmark(uuid)
        .then(res => {
            if(res.status === 200){
                setBookmark(true);
            }
        })
        .catch(err => console.log(err))
    }

  return (
    <div className="col-12 col-xl-6 single_card_grid">
      <div className="px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
        <div className="d-block mb-2">
          {obj.company.logo.link && LogoMap.get(obj.company.name.toString()) ? (
            <img src={LogoMap.get(obj.company.name.toString()).url} alt="" style={{maxWidth: 200, maxHeight: 100}} />
            ) : <HiUserGroup style={{fontSize: 40}} /> }
        </div>
        <div className="company__name text-gray"> {obj.company.name ? obj.company.name : 'ABC'} </div>
        <h2 className="mt-1 mb-2" style={{fontFamily:'Gordita'}}>
          <Link to={{
                    pathname: `/internship`,
                    search: `?id=${obj.uuid}`,
                    state: { uuid : obj.uuid, dashboard: false }
                  }} className="font-weight-bold font-size-5"> {obj.title ? obj.title : 'XYZ'} </Link>
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
          <button className="btn_for_apply btn_for_card" disabled={apply} onClick={() => Apply(obj.uuid)}>{apply ? 'Applied' : 'Apply Now'}</button>
          <button className="btn_for_apply btn_for_card" disabled={bookmark} onClick={() => Bookmark(obj.uuid)}>
              {bookmark ? <BsFillBookmarkFill style={{fontSize:17,paddingBottom:'2px', marginRight: 5}}/> : <Mark style={{fontSize:17, marginRight: 5, paddingBottom:'2px'}}/>}
              {bookmark ? 'Saved' : 'Bookmark it'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Grid_Cards
