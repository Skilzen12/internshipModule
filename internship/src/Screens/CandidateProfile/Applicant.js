import React, { useState } from "react";
import Header from '../../Components/Header/Updated_Header'
import "./Candidate.css";
import Back from '../../Components/GoBack/Back_comp'
import {TagsIcons} from '../../Components/LandingPage/FeaturedCards/FeaturedCards'
import {BsBookmark as Mark} from "react-icons/bs";
import {savedInternships,appliedInternships} from '../../utility/DummyData/CandidateData';


function Applicant() {
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
            <h3 className="candidate__name">David Henricks</h3>
            <p className="candidate__role">Product Designer</p>
            <div className="icon-link d-flex align-items-center justify-content-center my-3 flex-wrap">
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-dribbble"></i>
              </a>
              <a href="#">
                <i className="fab fa-behance"></i>
              </a>
            </div>
          </div>
          <hr />
          <div className="candidate__details text-left">
            <h4 style={{ fontSize: 19, fontWeight: 500 }}>Contact Info</h4>
            <br />
            <p className="candidate__detail__heading">Location</p>
            <p className="candidate__detail__value">New York , USA</p>
            <p className="candidate__detail__heading">E-mail</p>
            <p className="candidate__detail__value">name_ac@gmail.com</p>
            <p className="candidate__detail__heading">Phone</p>
            <p className="candidate__detail__value">+999 565 562</p>
            <p className="candidate__detail__heading">Website Linked</p>
            <a href="" className="candidate__detail__value link">
              www.nameac.com
            </a>
          </div>
        </div>
        <div className="candidate__content__container">
          <div className="internship__content__card candidate__content">
              <>
                <div className="candidate__about">
                  <p className="overview__subsection__heading">About</p>
                  <p className="overview__subsection__subheading">
                    A talented professional with an academic background in IT
                    and proven commercial development experience as C++
                    developer since 1999. Has a sound knowledge of the software
                    development life cycle. Was involved in more than 140
                    software development outsourcing projects.
                  </p>
                  <br />
                  <p className="overview__subsection__subheading">
                    Programming Languages: C/C++, .NET C++, Python, Bash, Shell,
                    PERL, Regular expressions, Python, Active-script.
                  </p>
                </div>
                <hr />
                <div className="candidate__skills">
                  <p className="overview__subsection__heading">Skills</p>
                  {
                    <TagsIcons list={['Agile','Wireframing','Prototyping','Information','Waterfall Model','New Layout','Browsing']} />
                  }
                </div>
                <hr />
                <div className="candidate__work-experience">
                  <p className="overview__subsection__heading">
                    Work Experience
                  </p>
                  <div className="candidate__experience__card">
                    <img
                      className="experience__company__photo"
                      src="https://cturtle.co/wp-content/uploads/2020/12/1595528954632.jpg"
                      alt="Co."
                    />
                    <div className="experience__details">
                      <p className="experience__role">Lead Product Designer</p>
                      <p className="experience__company">AirBnb</p>
                      <div className="experience__duration__container">
                        <p className="experience__duration">
                          Jun 2017 - April 2020- 3 years
                        </p>
                        <p className="experience__duration ">New York, USA</p>
                      </div>
                    </div>
                    {/* <div className="experience__place ml-auto">New York, USA</div> */}
                  </div>
                  <div className="candidate__experience__card">
                    <img
                      className="experience__company__photo"
                      src="https://pbs.twimg.com/profile_images/1343584679664873479/Xos3xQfk.jpg"
                      alt="Co."
                    />
                    <div className="experience__details">
                      <p className="experience__role">Senior UI/UX Designer</p>
                      <p className="experience__company">Google Inc</p>
                      <div className="experience__duration__container">
                        <p className="experience__duration">
                          Jun 2017 - April 2020- 3 years
                        </p>
                        <p className="experience__duration ">New York, USA</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="candidate__education">
                  <p className="overview__subsection__heading">Education</p>
                  <div className="candidate__experience__card">
                    <img
                      className="experience__company__photo"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png"
                      alt="Co."
                    />
                    <div className="experience__details">
                      <p className="experience__role">Masters in Art Design</p>
                      <p className="experience__company">Harvard University</p>
                      <div className="experience__duration__container">
                        <p className="experience__duration">
                          Jun 2017 - April 2020- 3 years
                        </p>
                        <p className="experience__duration ">Brylin, USA</p>
                      </div>
                    </div>
                    {/* <div className="experience__place ml-auto">New York, USA</div> */}
                  </div>
                  <div className="candidate__experience__card">
                    <img
                      className="experience__company__photo"
                      src="https://images.shiksha.com/mediadata/images/1602828916phpIjgYq2.jpeg"
                      alt="Co."
                    />
                    <div className="experience__details">
                      <p className="experience__role">
                        Bachelor in Software Engineering
                      </p>
                      <p className="experience__company">
                        Manipal Institute of Technology
                      </p>
                      <div className="experience__duration__container">
                        <p className="experience__duration">
                          Fed 2012 - April 2016 - 4 years
                        </p>
                        <p className="experience__duration ">New York, USA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            {/* {activeSection === "Saved Internships" && (
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
            )} */}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default Applicant;



// const SavedInternshipCard = ({imgSrc,com_name,role,tags_list,role_description})=>{
//   return (
//     <div className="saved__internships__card">
//       <img
//         className="company__img"
//         src={imgSrc}
//         alt=""
//       />
//       <p className="company__name">{com_name}</p>
//       <p className="internship__role">{role}</p>
//       {
//         <TagsIcons list={tags_list} />
//       }
//       <p className="internship__description">
//        {role_description}
//       </p>
//       <div className="internship__card__footer">
//         <button className="apply_btn card_btn">Apply Now</button>
//       </div>
//     </div>
//   )
// }

// const AppliedInternshipCard = ({imgSrc,com_name,role,tags_list,role_description})=>{
//   return(
//     <div className="saved__internships__card">
//       <img
//         className="company__img"
//         src={imgSrc}
//         alt=""
//       />
//       <p className="company__name">{com_name}</p>
//       <p className="internship__role">{role}</p>
//       {
//         <TagsIcons list={tags_list} />
//       }
//       <p className="internship__description">
//        {role_description}
//       </p>
//       <div className="internship__card__footer">
//         <button className="apply_btn card_btn disabled">Awaiting!</button>
//       </div>
//     </div>
//   )
// }

// export const InternshipCard = ({imgSrc,com_name,role,tags_list,role_description})=>{
//   return(
//     <div className="saved__internships__card">
//       <img
//         className="company__img"
//         src={imgSrc}
//         alt=""
//       />
//       <p className="company__name">{com_name}</p>
//       <p className="internship__role">{role}</p>
//       {
//         <TagsIcons list={tags_list} />
//       }
//       <p className="internship__description">
//        {role_description}
//       </p>
//       <div className="internship__card__footer">
//         <button className="apply_btn card_btn">Apply Now</button>
//         <button className="save_btn card_btn"><Mark style={{fontSize:17}} />&nbsp;Save It</button>
//       </div>
//     </div>
//   )
// }