/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react'
import './DashboardMain.css';
import Header from "../../Components/Header/Updated_Header";
import {ThemeDropdown} from '../../Pallete_components/Dropdown/Dropdown';
import CountUp from "react-countup";
import logo from '../../images/logo-main-black.png';
import {F3_1} from '../../utility/DummyData/CompanyProfile';
import Team from '../../Components/TeamMembersCard/team_members';
import {navCollection, defaultJobs, CardCollection, applicants, jobs} from '../../utility/DummyData/DashboardData';
import { useSelector , useDispatch } from 'react-redux'

const DashboardCard = ({name, color, darkcolor, Icon, number, content, decimal}) => {
    return(
        <div className="dashboard__card">
            <div className="dashboard__logo" style={{backgroundColor: color}}>
                <Icon style={{color: darkcolor, fontSize: 20}} />
            </div>
            <div className="dashboard__Cardcontent">
            {decimal ? (
                <div className="dashboard__cardNum"><CountUp duration={4} decimal="." decimals={1} end={number} />{content}</div>
            ) : (
                <div className="dashboard__cardNum"><CountUp duration={4} end={number} />{content}</div>
            )}
                <div className="dashboard__cardTitle">{name}</div>
            </div>
        </div>
    );
}

const ApplicantNormal = ({job}) => {
    return(
        <>
            <td className="jobsPosted__row applicationsUser p20 mv200">
                <img src={job.image} className="applicantUser__image" alt="user_image" />
                <h3 className="jobsPostedtable_cell m20">
                    <b>{job.name}</b>
                </h3>
            </td>
            <td  className="jobsPosted__row">
                <h3 className="jobsPostedtable_cell m20 mv150">
                    {job.appliedAs}
                </h3>
            </td>
            <td className="jobsPosted__row">
                <h3 className="jobsPostedtable_cell m20 mv150">
                    {job.appliedOn}
                </h3>
            </td>
            <td className="jobsPosted__row">
                <h3 className="jobsPostedtable_cell viewwww mv75">
                    VIEW
                </h3>
            </td>
            <td className="jobsPosted__row">
                <h3 className="jobsPostedtable_cell viewwww mv75">
                    RESUME
                </h3>
            </td>
        </>
    );
}

const ApplicantTable = ({job, action}) => {
    const[accept, setAccept] = useState('yuhin');
    return(
        <tr style={{backgroundColor: job.color ? '#F4F5F8' : '#FFFFFF', border: '1px solid #E5E5E5'}}>
            <ApplicantNormal job={job} />
            {action === 'normal' ? (
                <>
                {
                    accept === 'Accepted' ? (
                        <td colSpan="3" onClick={() => setAccept('')} className="jobsPosted__row mv150">
                            <h3 style={{textAlign: 'center'}} className="jobsPostedtable_cell edit">
                                ACCEPTED
                            </h3>
                        </td>
                    ) : accept === 'Rejected' ? (
                        <td colSpan="3" onClick={() => setAccept('')} className="jobsPosted__row mv150">
                            <h3 style={{textAlign: 'center'}} className="jobsPostedtable_cell deactivate">
                                REJECTED
                            </h3>
                        </td>
                    ) : accept === 'Shortlisted' ? (
                        <td colSpan="3" onClick={() => setAccept('')} className="jobsPosted__row mv150">
                            <h3 style={{textAlign: 'center'}} className="jobsPostedtable_cell shortlist">
                                SHORTLISTED
                            </h3>
                        </td>
                    ) : (
                        <>
                            <td className="jobsPosted__row" onClick={() => setAccept('Accepted')}>
                                <h3 className="jobsPostedtable_cell edit mv75">
                                    ACCEPT
                                </h3>
                            </td>
                            <td className="jobsPosted__row" onClick={() => setAccept('Rejected')}>
                                <h3 className="jobsPostedtable_cell deactivate mv75">
                                    REJECT
                                </h3>
                            </td>
                            <td className="jobsPosted__row" onClick={() => setAccept('Shortlisted')}>
                                <h3 className="jobsPostedtable_cell shortlist mv75">
                                    SHORTLIST
                                </h3>
                            </td>
                        </>
                    )
                }
                </>
            ) : action === 'Accepted' ? (
                <td colSpan="2" className="jobsPosted__row mv150">
                    <h3 style={{textAlign: 'center'}} className="jobsPostedtable_cell edit">
                        ACCEPTED
                    </h3>
                </td>
            ) : action === 'Rejected' ? (
                <td colSpan="2" className="jobsPosted__row mv150">
                    <h3 style={{textAlign: 'center'}} className="jobsPostedtable_cell deactivate">
                        REJECTED
                    </h3>
                </td>
            ) : action === 'Shortlisted' ? (
                <td colSpan="2" className="jobsPosted__row mv150">
                    <h3 style={{textAlign: 'center'}} className="jobsPostedtable_cell shortlist">
                        SHORTLISTED
                    </h3>
                </td>
            ) : null}            
        </tr>
    );
}

const ApplicantList = () => {
    const [action, setAction] = useState('normal');
    return (
        <div className="dashboard__jobsPosted">
            <div className="dashboard__jobsPostedHeader">
                <div className="dashboard__jobsTags">
                    <p className="dashboard__jobsPostedheading">
                        Applicants (12)
                    </p>
                    <div className="dashboard__jobstags">
                        {[{name: "Accepted", color: 'rgba(45,132,90,1)'}, {name: "Rejected", color: 'rgba(211,46,46,1)'}, {name: 'Shortlisted', color: 'orange'}].map(tag => (
                            <div className="dashboard__jobsPostedTag" onClick={() => setAction(tag.name) } style={{color: tag.color}}>
                                {tag.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="dashboard__jobsTags">
                    <p className="dashboard__jobsPostedFilterheading">
                        Filter by Job:
                    </p>
                    <ThemeDropdown 
                        placeHolder={"Job Type"} 
                        options={defaultJobs} 
                    />
                </div>
            </div>
            <div className="dashboard__jobsPostedTaable">
                <div className="table__responsive">
                    <table className="JobsPosted__table">
                        <thead>
                            <tr>
                                {["Name", "Applied as", "Applied on", " ", " "].map(head => (
                                    <th className="jobsPosted__tableHead jobsPosted__row">{head}</th>
                                ))}
                                <th className="jobsPosted__tableHead jobsPosted__row" style={{textAlign: 'center'}} colspan={action === 'normal' ? 3 : 2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applicants.map(job => (
                                <ApplicantTable job={job} action={action} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

const JobsPosted = () => {
    const [action, setAction] = useState('normal');
    return (
        <div className="dashboard__jobsPosted">
            <div className="dashboard__jobsPostedHeader">
                <div className="dashboard__jobsTags">
                    <p className="dashboard__jobsPostedheading">
                        Posted Jobs (5)
                    </p>
                    <div className="dashboard__jobstags">
                        {[{name: "Active", color: 'rgba(45,132,90,1)'}, {name: "Inactive", color: 'rgba(211,46,46,1)'}].map(tag => (
                            <div className="dashboard__jobsPostedTag" onClick={() => setAction(tag.name)} style={{color: tag.color}}>
                                {tag.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="dashboard__jobsTags">
                    <p className="dashboard__jobsPostedFilterheading">
                        Filter by Job:
                    </p>
                    <ThemeDropdown 
                        placeHolder={"Job Type"} 
                        options={defaultJobs} 
                    />
                </div>
            </div>
            <div className="dashboard__jobsPostedTaable">
                <div className="table__responsive">
                    <table className="JobsPosted__table">
                        <thead>
                            <tr>
                                {["Name", "Type", "City", "Created on", "Total Applicants"].map(head => (
                                    <th className="jobsPosted__tableHead jobsPosted__row">{head}</th>
                                ))}
                                <th colSpan="2" className="jobsPosted__tableHead jobsPosted__row mv150" style={{textAlign: 'center'}}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map(job => (
                                <tr style={{backgroundColor: job.color ? '#F4F5F8' : '#FFFFFF', border: '1px solid #E5E5E5'}}>
                                    <td className="jobsPosted__row">
                                        <h3 className="jobsPostedtable_cell p20 m20 mv200">
                                            <b>{job.name}</b>
                                        </h3>
                                    </td>
                                    <td  className="jobsPosted__row">
                                        <h3 className="jobsPostedtable_cell m20 mv100">
                                            {job.type}
                                        </h3>
                                    </td>
                                    <td className="jobsPosted__row">
                                        <h3 className="jobsPostedtable_cell m20 mv100">
                                            {job.city}
                                        </h3>
                                    </td>
                                    <td className="jobsPosted__row">
                                        <h3 className="jobsPostedtable_cell m20 mv150">
                                            {job.created}
                                        </h3>
                                    </td>
                                    <td className="jobsPosted__row">
                                        <h3 className="jobsPostedtable_cell textalign__right mv100">
                                            <b>{job.applicants}</b>
                                        </h3>
                                    </td>
                                    <td className="jobsPosted__row">
                                        <h3 className="jobsPostedtable_cell edit mv75">
                                            EDIT
                                        </h3>
                                    </td>
                                    <td className="jobsPosted__row">
                                        <h3 className="jobsPostedtable_cell deactivate mv75">
                                            DEACTIVATE
                                        </h3>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

const DashboardNav = ({name, Icon, number, setTab}) => {
    const [hover, sethover] = useState(false);
    return(
        <div className="dashboard__sliderItem" onClick={() => setTab(name)} style={{cursor: 'pointer'}} onMouseLeave={() => sethover(false)} onMouseEnter={() => sethover(true)}>
            <Icon className="dashboard_navIcon" style={{fontSize: 18, color: hover ? '#ec1f28' : '#d2dcd6' }} />
            <p className="dashboard__sliderName">{name}</p>
            {number ? (
                <div className="dashboard__sliderNum">{number}</div>
            ) : null}
        </div>
    )
}

function DashboardMain() {
    const user = useSelector(state => state.user);
    const [tab, setTab] = useState('Dashboard');
    return (
        <div>
            <Header />
            <div className="dashboard__container">
                <div className="dashboard___slider">
                    <div className="dashboard__sidebarButtonArea">
                        <button onClick={() => {
                            user.recruits_for !== null ? 
                            window.open('/postInternship', '_self')
                            : window.open('/applyRecruiterForm', '_self')
                        }} className="category__label dashboard__sidebarButton">+ Add New</button>
                    </div>
                    <div className="dashboard__sliderNavs">
                        {navCollection.map(nav => (
                            <DashboardNav name={nav.name} Icon={nav.icon} number={nav.number} setTab={setTab}/>
                        ))}
                    </div>
                </div>
                <div className="dashboard__slider">
                    <img className="dashboard__sliderlogo" src={logo} alt="skilzen_log" />
                    <div className="dashboard__sidebarButtonArea">
                        <button onClick={() => {
                            user.recruits_for === null ? 
                            window.open('/postInternship', '_self')
                            : window.open('/applyRecruiterForm', '_self')
                        }} className="category__label dashboard__sidebarButton">+ Add New</button>
                    </div>
                    <div className="dashboard__sliderNavs">
                        {navCollection.map(nav => (
                            <DashboardNav name={nav.name} Icon={nav.icon} number={nav.number} setTab={setTab}/>
                        ))}
                    </div>
                </div>
                {tab === 'Posted Internships' ? (
                    <div className="dashboard__content"><JobsPosted /></div>
                ) : tab === 'Applicants' ? (
                    <div className="dashboard__content"><ApplicantList /></div> 
                ) : tab=== 'Profile' ? (
                    <CompanyProfile />
                ) : (
                    <div className="dashboard__content" style={{boxShadow: 'none', border: 'none'}}>
                        <div className="dashboard__ContentCards">
                            {CardCollection.map(card => (
                                <DashboardCard decimal={card.decimal} name={card.name} color={card.color} darkcolor={card.darkcolor} Icon={card.icon} number={card.number} content={card.content} />
                            ))}
                        </div>
                    </div>
                )}
            </div>            
        </div>
    )
}

export default DashboardMain;

const CompanyProfile = () => {
    return(
        <div className="dashboard__content">
            <div className="box2">
                <div className='adjusting_card'>
                    <div className="company_card" style={{boxShadow: 'none', border: 'none'}}>
                        <div className="for_margin_inside">
                            <div className='img_n_name'>
                                <div className='cmp_main_img'>
                                    <img src={F3_1.cmp_img} className="main_img" ></img>
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
                    </div>        
                </div>
            </div>
        </div> 
    )
}