import React from "react";
import "./Content2.css";

import imgG1 from "../../../images/Landing2/gallery-img1.jpg";
import imgG2 from "../../../images/Landing2/gallery-img2.jpg";
import imgG3 from "../../../images/Landing2/gallery-img3.jpg";
import imgG4 from "../../../images/Landing2/gallery-img4.jpg";
import imgG5 from "../../../images/Landing2/gallery-img5.jpg";
import imgG6 from "../../../images/Landing2/gallery-img6.jpg";
import imgG7 from "../../../images/Landing2/gallery-img7.jpg";
import imgG8 from "../../../images/Landing2/gallery-img8.jpg";
import imgG9 from "../../../images/Landing2/gallery-img9.jpg";
import imgG10 from "../../../images/Landing2/gallery-img10.jpg";
import imgG11 from "../../../images/Landing2/gallery-img11.jpg";
import imgG12 from "../../../images/Landing2/gallery-img12.jpg";
import imgG13 from "../../../images/Landing2/gallery-img13.jpg";
import imgG14 from "../../../images/Landing2/gallery-img14.jpg";
import imgG15 from "../../../images/Landing2/gallery-img15.jpg";
import imgG16 from "../../../images/Landing2/gallery-img16.jpg";
import imgG17 from "../../../images/Landing2/gallery-img17.jpg";
import imgG18 from "../../../images/Landing2/gallery-img18.jpg";
import imgG19 from "../../../images/Landing2/gallery-img19.jpg";
import imgG20 from "../../../images/Landing2/gallery-img20.jpg";
import imgG21 from "../../../images/Landing2/gallery-img21.jpg";
import imgG22 from "../../../images/Landing2/gallery-img22.jpg";
import imgG23 from "../../../images/Landing2/gallery-img23.jpg";
import imgG24 from "../../../images/Landing2/gallery-img24.jpg";
import imgG25 from "../../../images/Landing2/gallery-img25.jpg";
import { useSelector , useDispatch } from 'react-redux'

const Content2 = () => {  
  const user = useSelector(state => state.user);
  const auth = useSelector(state => state.auth);
  const PostIntern = () => {
    user.recruits_for !== null 
    ? window.open('/postInternship', '_self')
    : (
      auth.token === null ?
        window.open('/login', '_self')  
      : (user.has_phone_verified?window.open('/applyRecruiterForm', '_self'):window.open('/VerifyOTP', '_self'))
    )
    }
  return (
    <>
      <section
        className="bg-red position-relative"
        style={{ backgroundColor: "var(--cherry)" }}
      >
        <div className="w-lg-50 ml-lg-auto">
          <div className="gallery">
            <div className="single-item">
              <img src={imgG1} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG2} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG3} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG4} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG5} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG6} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG7} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG8} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG9} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG10} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG11} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG12} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG13} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG14} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG15} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG16} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG17} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG18} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG19} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG20} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG21} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG22} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG23} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG24} alt="" className="gallery__image__person" />
            </div>
            <div className="single-item">
              <img src={imgG25} alt="" className="gallery__image__person" />
            </div>
          </div>
        </div>
        <div className="container pos-lg-abs-c py-lg-0">
          <div className="row">
            <div className="col-xxl-5 col-lg-6 col-md-8 mx-auto mx-lg-0">
              <div className="content-2 pr-lg-5 text-center text-lg-left">
                <p className="text-white font-weight-semibold mb-4">
                  Looking for an expert for your company?
                </p>
                <h2 className="text-white text-black2 mb-4">
                  Get applications from the world best talents.
                </h2>
                <p className="text-white text-black2 mb-5">
                  Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.
                </p>
                <button
                  className="category__label py-3 px-4"
                  style={{ fontSize: "16px" }}
                  onClick={() => PostIntern()}
                >
                  Post a Job{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content2;
