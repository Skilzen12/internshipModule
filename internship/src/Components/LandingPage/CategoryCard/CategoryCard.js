import React from "react";
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
            style={{ backgroundColor: CategoriesMap.get(category.category.toString()).backgroundColor}}
            >
            <Icon />
          </div>
          <div className="landingcard__content mt-3">
            <div className="landingcard__title">{category.category}</div>
            <div className="landingcardsubtitle">{category.active_internships} Vacancies</div>
          </div>
        </div>
      )}
      )}      
    </div>
  );
}

export default CategoryCard;
