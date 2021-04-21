import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Updated_Header";
import SearchIcon from "@material-ui/icons/Search";
import Brands from "../../Components/LandingPage/BrandCard/Brands";
import Content2 from "../../Components/LandingPage/Content2/Content2";
import "./LandingPage.css";
import CategoryCard from "../../Components/LandingPage/CategoryCard/CategoryCard";
import Content from "../../Components/LandingPage/Content1/Content1";
import FeaturedCards from "../../Components/LandingPage/FeaturedCards/FeaturedCards";
import CareerCard from "../../Components/LandingPage/CareerCard/CareerCard";
import CityCards from "../../Components/LandingPage/CityCard/CityCards";
import AdminService from "../../AdminServices/AdminService";

const Landing2 = () => {
  const [internCategories, setCategories] = useState([]);
  const [internships, setInternships] = useState([]);
  const [count, setCount] = useState(0);

  const getCategories = async () => {
    await AdminService.getInternshipsCategories()
    .then(res => {
      setCategories(res.data.category);
    })
    .catch(err => console.log(err));
  }

  const getFeaturedJobs = async () => {
    AdminService.getInternshipsList()
    .then(res => {
      setCount(res.data.count);
      setInternships(res.data.results);
    })
    .catch(err => console.log(err));
  } 

  useEffect(() => {
    getCategories();
    getFeaturedJobs();
  },[]);
  
  return (
    <>
      <Header />
      <div className="landingpage2__container container-fluid mx-auto" style={{ overflowX: "hidden" }}>
        <div className="landingpage2__title row container-fluid">
          <div className="title__content2 col-xlg-5 col-md-6 ml-5 col-sm-8">
            <div className="hashtag2 container">
              #{count} jobs are available right now
            </div>
            <div className="landingpage2__title__heading container">
              Find the most exciting jobs.
            </div>
            <div className="title__landing__description mt-3 container" style={{ fontFamily: "Gordita" }}>
              Leverage agile frameworks to provide a robust synopsis for high level overviews.
            </div>
          </div>
        </div>

        <div className="landing2__searchbar container">
          <div className="search__landing row container mx-auto">
            <div className="searchbar__landing2" style={{ maxWidth: "100%", width: "480px", backgroundColor: "#fff", }} >
              <SearchIcon />
              <input type="text" class="form-control focus-input" placeholder="Type job title, keywords" />
            </div>
            <div className="" style={{ justifyContent: "center" }}>
              <button className="landingsearch__btn">Search</button>
            </div>
          </div>
        </div>
        <Brands />
        <hr class=""></hr>

        <div className="landing2__category my-5">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h5 className="landing2__category__title my-5 ">
                  Explore by category
                </h5>
              </div>
            </div>
          </div>

          <CategoryCard data={internCategories} />
        </div>
        <div className="my-5">
          <Content />
        </div>

        <div className="featured__jobs mt-5">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h5 className="landing2__category__title my-5 ">
                  Featured Jobs
                </h5>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <FeaturedCards data={internships} />
          </div>
        </div>

        <div className="featured__jobs mt-5">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h5 className="landing2__category__title my-5 ">
                  Explore By Cities
                </h5>
              </div>
            </div>
          </div>
          <div className="container-fluid">
          <CityCards />
          </div>
        </div>

        <div className="quick__career__tips mt-4">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h5 className="landing2__category__title my-5 ">
                  Quick Career Tips
                </h5>
              </div>
            </div>
          </div>

          <CareerCard />
        </div>

        <div className="gallery__landing2 mt-5" style={{ overflow: "hidden" }}>
          <Content2 />
        </div>
      </div>
    </>
  );
};
export default Landing2;
