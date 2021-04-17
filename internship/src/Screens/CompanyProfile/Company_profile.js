import React from 'react';
import './Company_profile.css';
import  {F3_1} from '../../utility/DummyData/CompanyProfile';
import Back from '../../Components/GoBack/Back_comp'
import Header from "../../Components/Header/Updated_Header";
import Footer from '../../Components/Footer/Footer';
import Team from '../../Components/TeamMembersCard/team_members';
import Fb from '../../images/InternFrame3/Facebook.png';
import Gh from '../../images/InternFrame3/GitHub.png';
import Google from '../../images/InternFrame3/Google.png';
import Uber from '../../images/InternFrame3/Uber.png';
import Uniliver from '../../images/InternFrame3/Uniliver.png';
const Frame3 =()=>{
    const img1 = F3_1.cmp_img
    return(
        <>
            <div style={{background: '#CDCDCD1F',height:'100%',overflow:'auto'}}>
                <Header/>
                    <div className="list__article__container">
                        <div className="for_margin_top_bottom">
                            <Back/>
                                <div className="box1">
                                    <div className="box2">
                                        <div className='adjusting_card'>
                                            <div className="company_card">
                                                <div className="for_margin_inside">
                                                    <div className='img_n_name'>
                                                        <div className='cmp_main_img'>
                                                            <img src={img1} className="main_img" ></img>
                                                        </div>
                                                        <div style={{marginLeft:'15px',marginTop:'5px'}}>
                                                            <p className='company_main_name'>{F3_1.company_name}</p>
                                                            <p className='company_cat_type' >{F3_1.company_cat}</p>
                                                        </div>
                                                    </div>
                                                    <p style={{marginTop:'50px',marginBottom:'20px',fontFamily: 'Gordita',fontStyle: 'normal',fontWeight: 'normal',fontSize: '13px',lineHeight: '26px',letterSpacing: '0.26px',textTransform: 'uppercase',color: '#6B6E6F'}}>COMPANY</p>
                                                    <hr></hr>
                                                    <div className="short_details">
                                                        <div className="each_short_detail">
                                                            <p className="specification">Company size</p>
                                                            <p className="specification_ans">{F3_1.compsny_size}</p>
                                                        </div>
                                                        <div className="each_short_detail">
                                                            <p className="specification">Type of Corporation</p>
                                                            <p className="specification_ans">{F3_1.type_of_corp}</p>
                                                        </div>
                                                        <div className="each_short_detail">
                                                            <p className="specification">Location</p>
                                                            <p className="specification_ans">{F3_1.location}</p>
                                                        </div>
                                                        <div className="each_short_detail">
                                                            <p className="specification">Est.Since</p>
                                                            <p className="specification_ans">{F3_1.est_Since}</p>
                                                        </div>
                                                        <div className="each_short_detail">
                                                            <p className="specification">Social Media</p>
                                                            <div class="for_media_icons">
                                                                <a href="#" className="mediaIcons"><i className="fab fa-linkedin-in adj_icon" aria-hidden="true"></i></a>
                                                                <a href="#" className="mediaIcons"><i className="fab fa-facebook-f adj_icon " aria-hidden="true"></i></a>
                                                                <a href="#" className="mediaIcons"><i className="fab fa-twitter adj_icon" aria-hidden="true"></i></a>
                                                                <a href="#" className="mediaIcons"><i className="fab fa-dribbble adj_icon" aria-hidden="true"></i></a>
                                                                <a href="#" className="mediaIcons"><i className="fab fa-behance adj_icon" aria-hidden="true"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <p className="company_heading">{F3_1.heading}</p>
                                                    <p className="content_area">{F3_1.text}</p>
                                                    <hr className="hr_for_TM"></hr>
                                                    <p className="team_members_heading">Team Members:</p>
                                                    <div>
                                                        <Team/>
                                                    </div>
                                                </div>
                                                {/* <hr></hr> */}                                                
                                            </div>        
                                        </div>
                                    </div>
                                    <div className="box3">
                                        <p className="for_similar">Similar Companies</p>
                                        <div className="sim_cards">
                                            
                                            <a className='sim_img_n_name'  href='#' >
                                                    <div className='sim_cmp_main_img'>
                                                        <img src= {Google} className="image_size" ></img>
                                                    </div>
                                                    <div style={{marginLeft:'15px',marginTop:'5px'}} href='#'>
                                                        <p className='sim_company_main_name'>Google NIC</p>
                                                        <p className='sim_company_cat_type' >Online Marketplace</p>
                                                    </div>
                                            </a>
                                            {/* <hr></hr> */}
                                            <a className='sim_img_n_name'>
                                                    <div className='sim_cmp_main_img'>
                                                        <img src={Uber} className="image_size"></img>
                                                    </div>
                                                    <div style={{marginLeft:'15px',marginTop:'5px'}} href='#'>
                                                        <p className='sim_company_main_name'>Uber</p>
                                                        <p className='sim_company_cat_type' >Ride Sharing company</p>
                                                    </div>
                                            </a>
                                            <a className='sim_img_n_name'>
                                                    <div className='sim_cmp_main_img'>
                                                        <img src={Fb} className="image_size"></img>
                                                    </div>
                                                    <div style={{marginLeft:'15px',marginTop:'5px'}} href='#'>
                                                        <p className='sim_company_main_name'>Facebook</p>
                                                        <p className='sim_company_cat_type' >Social Network</p>
                                                    </div>
                                            </a>
                                            <a className='sim_img_n_name'>
                                                    <div className='sim_cmp_main_img'>
                                                        <img src={Gh} className="image_size"></img>
                                                    </div>
                                                    <div style={{marginLeft:'15px',marginTop:'5px'}} href='#'>
                                                        <p className='sim_company_main_name'>GitHub</p>
                                                        <p className='sim_company_cat_type' >Online: software</p>
                                                    </div>
                                            </a>
                                            <a className='sim_img_n_name' >
                                                    <div className='sim_cmp_main_img'>
                                                        <img src={Uniliver} className="image_size"></img>
                                                    </div>
                                                    <div style={{marginLeft:'15px',marginTop:'5px'}} href='#'>
                                                        <p className='sim_company_main_name'>Uniliver</p>
                                                        <p className='sim_company_cat_type' >Manufacturer</p>
                                                    </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <Footer></Footer>
                    </div>
            </div>
        </> 
    );
}

export default Frame3;