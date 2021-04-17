import React from 'react'
import {
  Link
} from "react-router-dom";
import {LogoMap} from '../../../utility/Maps/LandingPageMaps';
import imgF from '../../../images/InternFrame3/svg/icon-fire-rounded.svg'
import iconL from '../../../images/InternFrame3/svg/icon-loaction-pin-black.svg'
import iconS from '../../../images/InternFrame3/svg/icon-suitecase.svg'
import iconC from '../../../images/InternFrame3/svg/icon-clock.svg'

const List_Cards = ({obj}) => {
  var postedDate = obj.posted_date.split('T')[0];
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
    <div className="mb-8 w-100">
                   
    <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 w-100">
      <div className="row">
        <div className="col-md-6">
          <div className="media align-items-center">
            <div className="square-72 d-block mr-8">
              <img src={LogoMap.get(obj.company.name.toString()).url} alt="" style={{maxWidth: 140, maxHeight: 80}} />
            </div>
            <div style={{marginLeft: 20}}>
              <h3 className="mb-0">
                <Link
                  to={`/internship?id=${obj.uuid}`}
                  className="font-size-6 heading-default-color"
                >
                  {obj.title}
                </Link>
              </h3>
              <Link
                to="/#"
                className="font-size-3 text-default-color line-height-2"
              >
                {obj.company.name}
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-right pt-3 pt-md-2">
          <div className="media justify-content-md-end">
            <div className="image mr-3">
              <img src={imgF} alt="" />
            </div>
            <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
              <span className="text-black-2">{obj.min_stipend}-{obj.max_stipend} INR</span>
            </p>
          </div>
        </div>
      </div>
      <div className="row pt-8">
        <div className="col-md-7">
          <ul className="d-flex list-unstyled mr-n3 flex-wrap">
          {obj.skills.map(skill => (
            <li>
              <Link
                to="/#"
                className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2"
              >
                {skill.name}
              </Link>
            </li>
          ))}
          </ul>
        </div>
        <div className="col-md-5">
          <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
            <li className="mt-2 mr-4 font-size-small text-black-2 d-flex align-items-center">
              <span
                className="mr-2"
                css={`
                  margin-top: -2px;
                `}
              >
                <img src={iconL} alt="" />
              </span>
              <span className="font-weight-semibold">
                {obj.city}
              </span>
            </li>
            <li className="mt-2 mr-4 font-size-small text-black-2 d-flex align-items-center">
              <span
                className="mr-2"
                css={`
                  margin-top: -2px;
                `}
              >
                <img src={iconS} alt="" />
              </span>
              <span className="font-weight-semibold">
                {obj.kind}
              </span>
            </li>
            <li className="mt-2 mr-4 font-size-small text-black-2 d-flex align-items-center">
              <span
                className="mr-2"
                css={`
                  margin-top: -2px;
                `}
              >
                <img src={iconC} alt="" />
              </span>
              <span className="font-weight-semibold">
                {time}d ago
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
}

export default List_Cards;
