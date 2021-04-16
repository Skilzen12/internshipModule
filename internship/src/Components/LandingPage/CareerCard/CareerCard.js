/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./CareerCard.css";

import imgB1 from "../../../images/Landing2/blog-img1.png";
import imgB2 from "../../../images/Landing2/blog-img2.png";
import imgB3 from "../../../images/Landing2/blog-img3.png";
import imgBU1 from "../../../images/Landing2/blog-user-img1.png";
import imgBU2 from "../../../images/Landing2/blog-user-img2.png";
import imgBU3 from "../../../images/Landing2/blog-user-img3.png";
import Button_Slider from "../../Button_Slider/Button_Slider";

function CareerCard() {
  const Blogs = [{background: imgB1, name: 'CV Writing', heading: 'How to make a perfect CV that attracts the attention', content: 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base.', authorImage: imgBU1, authorName: 'Anne Frank', authorDesig: 'Creative Director'},
  {background: imgB2, name: 'CV Writing', heading: 'How to make a perfect CV that attracts the attention', content: 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base.', authorImage: imgBU2, authorName: 'Ryan Reynolds', authorDesig: 'Creative Asst. Director'},
  {background: imgB3, name: 'CV Writing', heading: 'How to make a perfect CV that attracts the attention', content: 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base.', authorImage: imgBU3, authorName: 'Luke Williams', authorDesig: 'HOD-Creative'},]
  return (
    <div className="careerCard row container mx-auto">
      <Button_Slider scrollAmount={500}>
        {Blogs.map(blog => (
          <div className="" style={{ textAlign: "Left" }}>
            <div className="card bg-transparent border-0">
              <img src={blog.background} className="card-img-top" alt="..." />
              <div className="card-body pt-4 px-0 pl-3 pb-0" style={{ fontFamily: "Gordita" }}>
                <a className="text-uppercase  font-weight-bold py-1" style={{ color: "var(--cherry)" }}>{blog.name}</a>
                <h4><a className="card-title-landing">{blog.heading}</a></h4>
                <p className="card-text-landing my-3">{blog.content}</p>
                <div className="media mb-5 ml-2" style={{alignItems: 'center'}}>
                  <img src={blog.authorImage} className="align-self-center circle-54 mr-3 mt-2" alt="" />
                  <div className="media-body pl-2 pt-2">
                    <h6 className="mb-0">
                      <a className="mb-0 card-title-landing font-weight-semibold heading-default-color line-height-reset">
                        {blog.authorName}
                      </a>
                    </h6>
                    <p className="mb-0">
                      <a className=".card-text-landing text-default-color">
                        {blog.authorDesig}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Button_Slider>
    </div>
  );
}

export default CareerCard;
