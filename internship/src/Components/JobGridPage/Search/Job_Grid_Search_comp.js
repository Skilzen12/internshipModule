import React from 'react'
import Grid_Select_drpdwn from '../Dropdown/Grid_Select_drpdwn'

import {BsSearch} from 'react-icons/bs';
const defaultCountries = [
  { value: "sp", label: "Singapore" },
  { value: "bd", label: "Bangladesh" },
  { value: "usa", label: "United States of America" },
  { value: "uae", label: "United Arab Emirates" },
  { value: "pk", label: "Pakistan" },
];


const Job_Grid_Search_comp = () => {
  return (
    
      <form action="/" className="search-form search-2-adjustment ml-lg-0 ml-md-15">
        <div className="filter-search-form-2 bg-white rounded-sm shadow-7 pr-6 py-6 pl-6">
          <div className="filter-inputs">
            <div className="form-group position-relative w-lg-45 w-xl-40 w-xxl-45">
              <input
                className="form-control focus-reset pl-13"
                type="text"
                id="keyword"
                placeholder="UI Designer"
              />
              <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                <BsSearch />
              </span>
            </div>
            {/* <!-- .select-city starts --> */}
            <div className="form-group position-relative w-lg-55 w-xl-60 w-xxl-55">
              <Grid_Select_drpdwn
                options={defaultCountries}
                className="pl-8 h-100 arrow-3 font-size-4 d-flex align-items-center w-100"
                border={false}
              />

              <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                <i className="icon icon-pin-3 text-primary font-weight-bold"></i>
              </span>
            </div>
            {/* <!-- ./select-city ends --> */}
          </div>
          <div className="button-block">
            <button className="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase">
              Search
            </button>
          </div>
        </div>
      </form>
  );
}

export default Job_Grid_Search_comp
