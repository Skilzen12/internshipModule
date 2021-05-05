import React from "react";
import { FaBriefcase } from "react-icons/fa";
import {CategoriesMap} from '../../../utility/Maps/LandingPageMaps';
import "./CategoryCard.css";

const CategoryCard = ({data}) => {
  return (
    <div className="card__container__landing container">
      {data.map(category => {
        var Icon = CategoriesMap.get(category.category.toString()).Icon;
        return(
        <div className="landing__card">
          <div className="landingcard__image" 
            style={{ backgroundColor: category.category ? CategoriesMap.get(category.category.toString()).backgroundColor : 'rgb(236, 31, 40)'}}
            >
            {category.category ? <Icon /> : <FaBriefcase />}
          </div>
          <div className="landingcard__content mt-3">
            <div className="landingcard__title">{category.category ? category.category : 'ABC ACD'}</div>
            <div className="landingcardsubtitle">{category.active_internships ? category.active_internships : '2'} Internships</div>
          </div>
        </div>
      )}
      )}      
    </div>
  );
}

export default CategoryCard;
