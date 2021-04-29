/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Header from '../../Components/Header/Updated_Header'
import "./Candidate.css";
import Back from '../../Components/GoBack/Back_comp'
import {TagsIcons} from '../../Components/LandingPage/FeaturedCards/FeaturedCards'
import {BsBookmark as Mark} from "react-icons/bs";
import {savedInternships,appliedInternships} from '../../utility/DummyData/CandidateData';
import { useSelector , useDispatch } from 'react-redux'
import {LogoMap, IconMap} from '../../utility/Maps/LandingPageMaps';
import { HiUser, HiUserGroup } from "react-icons/hi";

function Candidate() {
  const user = useSelector(state => state.user);
  const [activeSection, setActiveSection] = useState("Overview");
  const navBarClickHandler = (e) => {
    setActiveSection(e.target.innerText);
  };

  return (
    <>
    <Header />
    <div className="list__article__container">
      <Back />
      <section className="candidate__overview__section">
        <div className="internship__content__card candidate__profile">
          <div>
            <img
              className="candidate__photo"
              src="https://i.pinimg.com/736x/92/3a/6f/923a6f02844215b0ab6393783f8090ec.jpg"
              alt="DP"
            />
            <h3 className="candidate__name">
              {user.first_name ? user.first_name + ' ' + user.last_name : 'ABC XYZ'}
            </h3>
            <p className="candidate__role">{user.title ? user.title : 'ASWERDSE'}</p>
            <div className="icon-link d-flex align-items-center justify-content-center my-3 flex-wrap">
            {user.user_profile ?
                user.user_profile.meta.social_links.map(
                  link => {
                      return(
                        link.link && IconMap.get(link.handle) ? 
                          <a href={link.link} className="mediaIcons"><i className={`fab ${IconMap.get(link.handle).url} adj_icon`} aria-hidden="true"></i></a>
                          : null                       
                      );
                  }
              ) : null}
            </div>
          </div>
          <hr />
          <div className="candidate__details text-left">
            <h4 style={{ fontSize: 19, fontWeight: 500 }}>Contact Info</h4>
            <br />
            <p className="candidate__detail__heading">Location</p>
            <p className="candidate__detail__value">{user.user_profile ? user.user_profile.meta.location : 'XYZ City'}</p>
            <p className="candidate__detail__heading">E-mail</p>
            <p className="candidate__detail__value">{user.email}</p>
            <p className="candidate__detail__heading">Phone</p>
            <p className="candidate__detail__value">{user.phone_number}</p>
            <p className="candidate__detail__heading">Website Linked</p>
            <a href="" className="candidate__detail__value link">
              {user.user_profile ? user.user_profile.meta.linked_website : 'abc@gmail.com'}
            </a>
          </div>
        </div>
        <div className="candidate__content__container">
          <div className="internship__content__card candidate__content">
          {user.recruits_for ? null : (
            <div className={"candidate__navBar"}>
              <p
                className={`candidate__nav ${
                  activeSection === "Overview" ? "active-tab" : ""
                }`}
                onClick={navBarClickHandler}
              >
                Overview
              </p>
              <p
                className={`candidate__nav ${
                  activeSection === "Saved Internships" ? "active-tab" : ""
                }`}
                onClick={navBarClickHandler}
              >
                Saved Internships
              </p>
              <p
                className={`candidate__nav ${
                  activeSection === "Applied Internships" ? "active-tab" : ""
                }`}
                onClick={navBarClickHandler}
              >
                Applied Internships
              </p>
            </div>
          )}            
            {activeSection === "Overview" && (
              <>
                <div className="candidate__about">
                  <p className="overview__subsection__heading">About</p>
                  <p className="overview__subsection__subheading">
                    {user.user_profile ? user.user_profile.description : 'XYZABCD'}
                  </p>
                </div>
                <hr />
                <div className="candidate__skills">
                  <p className="overview__subsection__heading">Skills</p>
                  {
                    <TagsIcons1 list={user.user_skills ? user.user_skills : []} />
                  }
                </div>
                <hr />
                <div className="candidate__work-experience">
                  <p className="overview__subsection__heading">
                    Work Experience
                  </p>
                  {
                    user.user_work_experience.map(work => {
                      const monthStart = work.meta.start_date.split('-')[1];
                      const dayStart = work.meta.start_date.split('-')[2];
                      const monthEnd = work.meta.end_date.split('-')[1];
                      const dayEnd = work.meta.end_date.split('-')[2];
                      return(
                        <div className="candidate__experience__card">
                          {work.company && LogoMap.get(work.meta.company_name) ? (
                            <img src={LogoMap.get(work.meta.company_name).url} className="experience__company__photo" alt="Co" />
                          ) : <HiUserGroup style={{fontSize: 40}} /> }
                          <div className="experience__details">
                            <p className="experience__role">{work.meta.title}</p>
                            <p className="experience__company">{work.meta.company_name}</p>
                            <div className="experience__duration__container">
                              <p className="experience__duration">
                                {dayStart}{"/"}{monthStart} - {dayEnd}{"/"}{monthEnd}
                              </p>
                              <p className="experience__duration ">{work.meta.city}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  }
                  
                </div>
                <hr />
                <div className="candidate__education">
                  <p className="overview__subsection__heading">Education</p>
                  {
                    user.user_education.map(work => {
                      const monthStart = work.meta.start_date.split('-')[1];
                      const dayStart = work.meta.start_date.split('-')[2];
                      const monthEnd = work.meta.end_date.split('-')[1];
                      const dayEnd = work.meta.end_date.split('-')[2];
                      return(
                        <div className="candidate__experience__card">
                          {work.college && LogoMap.get(work.meta.college_name) ? (
                            <img src={LogoMap.get(work.meta.company_name).url} className="experience__company__photo" alt="Co" />
                          ) : <HiUser style={{fontSize: 40}} /> }
                          <div className="experience__details">
                            <p className="experience__role">{work.meta.degree}</p>
                            <p className="experience__company">{work.meta.college_name}</p>
                            <div className="experience__duration__container">
                              <p className="experience__duration">
                                {dayStart}{"/"}{monthStart} - {dayEnd}{"/"}{monthEnd}
                              </p>
                              <p className="experience__duration ">{work.meta.college_city}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  }
                  
                </div>
              </>
            )}
            {activeSection === "Saved Internships" && (
              <>
                <div className="saved__internships__cards">
                  {savedInternships.map((card)=>(
                    <SavedInternshipCard {...card} />
                  ))}
                </div>
              </>
            )}
            {activeSection === "Applied Internships" && (
              <>
                <div className="saved__internships__cards">
                  {appliedInternships.map((card)=>(
                    <AppliedInternshipCard {...card} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default Candidate;



const SavedInternshipCard = ({imgSrc,com_name,role,tags_list,role_description})=>{
  return (
    <div className="saved__internships__card">
      <img
        className="company__img"
        src={imgSrc}
        alt=""
      />
      <p className="company__name">{com_name}</p>
      <p className="internship__role">{role}</p>
      {
        <TagsIcons list={tags_list} />
      }
      <p className="internship__description">
       {role_description}
      </p>
      <div className="internship__card__footer">
        <button className="apply_btn card_btn">Apply Now</button>
      </div>
    </div>
  )
}

const TagsIcons1 =({list})=>{ 
  return (
    <ul className="tags__featured">
      {list.map(item=>(
        <li className="mt-1">
          <a className="bg-regent-opacity-15 min-width-px-96 text-center rounded-3 py-1"
            style={{ fontFamily: "Gordita" }}
          >
            {item.skill.name}
          </a>
        </li>
      ))}
    </ul>
  )
      }

const AppliedInternshipCard = ({imgSrc,com_name,role,tags_list,role_description})=>{
  return(
    <div className="saved__internships__card">
      <img
        className="company__img"
        src={imgSrc}
        alt=""
      />
      <p className="company__name">{com_name}</p>
      <p className="internship__role">{role}</p>
      {
        <TagsIcons list={tags_list} />
      }
      <p className="internship__description">
       {role_description}
      </p>
      <div className="internship__card__footer">
        <button className="apply_btn card_btn disabled">Awaiting!</button>
      </div>
    </div>
  )
}

export const InternshipCard = ({imgSrc,com_name,role,tags_list,role_description})=>{
  return(
    <div className="saved__internships__card">
      <img
        className="company__img"
        src={imgSrc}
        alt=""
      />
      <p className="company__name">{com_name}</p>
      <p className="internship__role">{role}</p>
      {
        <TagsIcons list={tags_list} />
      }
      <p className="internship__description">
       {role_description}
      </p>
      <div className="internship__card__footer">
        <button className="apply_btn card_btn">Apply Now</button>
        <button className="save_btn card_btn"><Mark style={{fontSize:17}} />&nbsp;Save It</button>
      </div>
    </div>
  )
}