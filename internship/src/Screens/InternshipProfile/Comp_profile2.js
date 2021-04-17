/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import './Comp_profile2.css';
import  {dataCmp2} from '../../utility/DummyData/InternshipProfile';
import Back from "../../Components/GoBack/Back_comp";
import Header from "../../Components/Header/Updated_Header";
import Footer from '../../Components/Footer/Footer';
import {BsBookmark as Mark} from "react-icons/bs";
import {TagsIcons} from '../../Components/LandingPage/FeaturedCards/FeaturedCards'
import AdminService from '../../AdminServices/AdminService';
import {LogoMap} from '../../utility/Maps/LandingPageMaps';

function AboutCmp (){
    let [data, setData] = useState([]);
    var id = '';
    
    const getDetails = (id) => {
        AdminService.getInternshipsDetail(id)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }   

    function getIDFromURL(){
        return window.location.href.split('?')[1].split('=')[1];
    };  

    window.onload = () => {         
        id = getIDFromURL();
        getDetails(id); 
    }      
    
    console.log(id, data);

    return(
        <>
            <div style={{background: '#CDCDCD1F',height:'100%',overflow:'auto'}}>
                <Header/>
                    <div className="list__article__container">
                        <div className="for_margin_top_bottom2">
                            <div className='adjusting_card_back'>
                                <Back/>
                            </div>
                                <div className="box1">
                                    
                                        <div className='adjusting_card'>
                                            <div className="company_card">
                                                <div className="for_margin_inside">
                                                    <div className="for_header_side">
                                                        <div>
                                                            {/* {data !== [] ? (
                                                                <>
                                                                    <p className="for_post_title">{data.title}</p>
                                                                    <p className='company_cat_type2' >{data.company.kind}</p>
                                                                </>
                                                            ) : <>  */}
                                                                    <p className="for_post_title">{dataCmp2.title}</p>
                                                                    <p className='company_cat_type2' >{dataCmp2.category_type}</p>
                                                                {/* </>
                                                            } */}
                                                        </div>
                                                        <div className='img_n_name2'>
                                                            <div className='cmp_main_img'>
                                                                {/* {data.company !== "" ? (
                                                                    <img src={LogoMap.get(data.company.name).url} className="main_img" />
                                                                ) :  */}
                                                                    <img src={dataCmp2.cmp_img} className="main_img" />
                                                                {/* }                                                                 */}
                                                            </div>
                                                            <div style={{marginTop:'5px'}}>
                                                                {/* {data.company.name ? (
                                                                    <p className='company_main_name'>{data.company.name}</p>
                                                                ) :  */}
                                                                <p className='company_main_name'>{dataCmp2.company_name}</p>
                                                                {/* }                                                                  */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="btn_row">
                                                        <div className="adj_btn_comp">
                                                            <button className="btn_for_apply btn_for_card">Apply Now</button>
                                                        </div>
                                                        <div className="adj_btn_comp">
                                                            <button className="btn_for_apply btn_for_card"><Mark style={{fontSize:17,paddingBottom:'2px'}}/>&nbsp;&nbsp;Save it</button>
                                                        </div>
                                                    </div>
                                                    
                                                    <hr></hr>
                                                    <div className="short_details">
                                                        <div className="each_short_detail2">
                                                            <p className="specification2">Stipend</p>
                                                            <p className="specification_ans2">{dataCmp2.Stipend}</p>
                                                        </div>
                                                        <div className="each_short_detail2">
                                                            <p className="specification2">Internship type</p>
                                                            <p className="specification_ans2">{dataCmp2.inter_type}</p>                                                        </div>
                                                        <div className="each_short_detail2">
                                                            <p className="specification2">Location</p>
                                                            <p className="specification_ans2">{dataCmp2.location}</p>
                                                        </div>
                                                        <div className="each_short_detail2">
                                                            <p className="specification2">Internship duration</p>
                                                            <p className="specification_ans2">{dataCmp2.intern_duration}</p>
                                                        </div>
                                                        <div className="each_short_detail2">
                                                            <p className="specification2">Internship start date</p>
                                                            <p className="specification_ans2">{dataCmp2.inter_start}</p>
                                                        </div>
                                                        <div className="each_short_detail2">
                                                            <p className="specification2">Number of openings</p>
                                                            <p className="specification_ans2">{dataCmp2.no_of_opens}</p>
                                                        </div>
                                                        
                                                        <div className="each_short_detail2">
                                                            <p className="specification2">Perks</p>
                                                            {
                                                                <TagsIcons list={['Certificate','5 days a week','Letter of recommendation']} />
                                                            }
                                                            {/* <p className="specification_ans2">{dataCmp2.perks}</p> */}
                                                        </div>
                                                        <div className="each_short_detail2">
                                                            <p className="specification2">Skills required</p>
                                                            {
                                                                <TagsIcons list={['Editing','Wire-framing','XD','User Person','Sketch']} />
                                                            }
                                                            {/* <p className="specification_ans2">{dataCmp2.est_Since}</p> */}
                                                        </div>
                                                        <div className="each_short_detail2">
                                                            <p className="specification2">Pre-Placement offer</p>
                                                            <p className="specification_ans2">{dataCmp2.ppo}</p>
                                                        </div>
                                                        {/* <div className="each_short_detail2">
                                                            <p className="specification2">Soft skills</p>
                                                            <ul className="list_of_ss">
                                                                <li className="list_gap2">Slack</li>
                                                                <li className="list_gap2">Basic English</li>
                                                                <li className="list_gap2">Well Organized</li>
                                                            </ul>                                                        
                                                        </div> */}
                                                        
                                                        
                                                    </div>
                                                    <hr  className="for_hr_2"></hr>
                                                    <div>
                                                        <h3 className="company_heading2">{dataCmp2.heading}</h3>
                                                        <p className="content_area2">{dataCmp2.text}</p>
                                                        <hr className="hr_for_TM"></hr>
                                                        <div className="adj_btn_comp">
                                                            <button className="btn_for_apply btn_for_card">Apply Now</button>
                                                        </div>
                                                    </div>
                                                    {/* <p className="team_members_heading">Team Members:</p>
                                                    <div>
                                                        <Team/>
                                                    </div> */}
                                                </div>
                                                {/* <hr></hr> */}                                                
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

export default AboutCmp;