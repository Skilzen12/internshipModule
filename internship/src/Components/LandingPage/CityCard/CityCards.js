import React from "react";
import wfh from "../../../images/Landing2/imagesintern/work_from_home.svg";
import bangalore from "../../../images/Landing2/imagesintern/bangalore.svg";
import chennai from "../../../images/Landing2/imagesintern/chennai.svg";
import delhi_ncr from "../../../images/Landing2/imagesintern/delhi_ncr.svg";
import hyderabad from "../../../images/Landing2/imagesintern/hyderabad.svg";
import international from "../../../images/Landing2/imagesintern/international.svg";
import kolkata from "../../../images/Landing2/imagesintern/kolkata.svg";
import mumbai from "../../../images/Landing2/imagesintern/mumbai.svg";


function CityCards() {
  const Cities = [{name: 'Work from home', image: wfh, backgroundColor: '#ec1f28'},
  {name: 'Bengaluru', image: bangalore, backgroundColor: 'rgb(247, 127, 0)'},
  {name: 'Chennai', image: chennai, backgroundColor: '#fca311'},
  {name: 'Delhi', image: delhi_ncr, backgroundColor: '#ff006e'},
  {name: 'Hyderabad', image: hyderabad, backgroundColor: '#011627'},
  {name: 'Mumbai', image: mumbai, backgroundColor: '#2ec4b6'},
  {name: 'Kolkata', image: kolkata, backgroundColor: '#4361ee'},
  {name: 'International', image: international, backgroundColor: '#bcb8b1'},];
  return (
     <div className="card__container__landing container">
     {Cities.map(city => (
        <div className="landing__card">
          <div
            className="landingcard__image"
            style={{ backgroundColor: city.backgroundColor }}
          >
            <img src={city.image} alt="places"/>
          </div>
          <div className="landingcard__content mt-3">
            <div className="landingcard__title">{city.name}</div>
          </div>
        </div>
     ))}      
    </div>
  );
}

export default CityCards;
