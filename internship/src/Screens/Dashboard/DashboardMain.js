/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useState} from 'react'
import './DashboardMain.css';
import Header from "../../Components/Header/Updated_Header";
import {ThemeDropdown} from '../../Pallete_components/Dropdown/Dropdown';
import {Link} from "react-router-dom";
import CountUp from "react-countup";
import logo from '../../images/logo-main-black.png';
import {F3_1} from '../../utility/DummyData/CompanyProfile';
import Team from '../../Components/TeamMembersCard/team_members';
import {navCollection, defaultJobs, applicants, jobs} from '../../utility/DummyData/DashboardData';
import { useSelector , useDispatch } from 'react-redux'
import AdminService from '../../AdminServices/AdminService';
import {LogoMap, IconMap} from '../../utility/Maps/LandingPageMaps';
import { HiUser, HiUserGroup } from 'react-icons/hi';
import DashboardSeva from './DashboardSeva';
import CityModal from './CityModal'

const ApplicantNormal = ({job}) => {
    return(
        <>
            <td className="jobsPosted__row applicationsUser p20 mv200">
                {job.user.image  ? (
                  <img src={job.user.image} className="applicantUser__image" alt="user" />
                ) : <HiUser style={{fontSize: 40}} /> }
                <h3 className="jobsPostedtable_cell m20">
                    <b>{job.user.first_name ? job.user.first_name + ' ' + job.user.last_name : 'Abra kaDabra'}</b>
                </h3>
            </td>
            <td  className="jobsPosted__row">
                <h3 className="jobsPostedtable_cell m20 mv150">
                    {job.applied_as}
                </h3>
            </td>
            <td className="jobsPosted__row">
                <h3 className="jobsPostedtable_cell m20 mv150">
                    {job.applied_on.split('T')[0]}
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
            ) : null}            
        </tr>
    );
}

const ApplicantList = ({data}) => {
    const [action, setAction] = useState('normal');
    return (
        <div className="dashboard__jobsPosted">
            <div className="dashboard__jobsPostedHeader">
                <div className="dashboard__jobsTags">
                    <p className="dashboard__jobsPostedheading">
                        Applicants ({data.count})
                    </p>
                    <div className="dashboard__jobstags">
                        {[{name: "Accepted", color: 'rgba(45,132,90,1)'}, {name: "Rejected", color: 'rgba(211,46,46,1)'}].map(tag => (
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
                                {["Name", "Applied as", "Applied on", " ", " "].map(head => (
                                    <th className="jobsPosted__tableHead jobsPosted__row">{head}</th>
                                ))}
                                <th className="jobsPosted__tableHead jobsPosted__row" style={{textAlign: 'center'}} colspan={action === 'normal' ? 3 : 2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.results.map(job => (
                                <ApplicantTable job={job} action={action} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

const Edit = (id) => {
    const EditData = {}
    AdminService.EditInternship(id, EditData)
        .then(res => console.log(res))
        .catch(err => console.log(err))
} 

const Deactivate = (id) => {
    AdminService.DeactivateInternship(id)
        .then(res => console.log(res))
        .catch(err => console.log(err))
} 

const JobsPosted = ({data, setAction, count}) => {
    return (
        <div className="dashboard__jobsPosted">
            <div className="dashboard__jobsPostedHeader">
                <div className="dashboard__jobsTags">
                    <p className="dashboard__jobsPostedheading">
                        Posted Jobs ({data.count})
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
                            {data.results.map((job, index) => {
                                let toggle = true;
                                if(index%2 === 0){
                                    toggle = false;
                                } else{
                                    toggle = true;
                                }
                                return(
                                <tr style={{backgroundColor: toggle ? '#F4F5F8' : '#FFFFFF', border: '1px solid #E5E5E5'}}>
                                    <td className="jobsPosted__row">
                                        <Link to={{
                                            pathname: `/internship`,
                                            search: `?id=${job.uuid}`,
                                            state: { uuid : job.uuid, dashboard : true }
                                        }}>
                                            <h3 className="jobsPostedtable_cell p20 m20 mv200">
                                                <b>{job.title}</b>
                                            </h3>
                                        </Link>                                        
                                    </td>
                                    <td  className="jobsPosted__row">
                                        <h3 className="jobsPostedtable_cell m20 mv100">
                                            {job.kind}
                                        </h3>
                                    </td>
                                    <td className="jobsPosted__row">
                                        <h3 className="jobsPostedtable_cell m20 mv100">
                                            {job.city}
                                        </h3>
                                    </td>
                                    <td className="jobsPosted__row">
                                        <h3 className="jobsPostedtable_cell m20 mv150">
                                            {job.created_at.split('T')[0]}
                                        </h3>
                                    </td>
                                    <td className="jobsPosted__row">
                                        <h3 className="jobsPostedtable_cell textalign__right mv100">
                                            <b>{job.total_applicants}</b>
                                        </h3>
                                    </td>
                                    <td className="jobsPosted__row">
                                        <h3 onClick={() => Edit(job.uuid)} className="jobsPostedtable_cell edit mv75">
                                            EDIT
                                        </h3>
                                    </td>
                                    <td className="jobsPosted__row">
                                        <h3 onClick={() => Deactivate(job.uuid)} className="jobsPostedtable_cell deactivate mv75">
                                            DEACTIVATE
                                        </h3>
                                    </td>
                                </tr>
                                );
                            })}
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

const AddCity = () => {
    
}

function DashboardMain(props) {
    const user = useSelector(state => state.user);
    const [tab, setTab] = useState('Dashboard');
    const[listInternship, setList] = useState();
    const[ActivelistInternship, setActiveList] = useState();
    const[InActivelistInternship, setInActiveList] = useState();
    const [company, setProfile] = useState();
    const [companyApplicants, setApplicants] = useState();
    const [action, setAction] = useState('normal');

    useEffect(() => {

        AdminService.getActiveCompanyInternship()
            .then(res => setActiveList(res.data))
            .catch(err => console.log(err)) 

        AdminService.getInactiveCompanyInternship()
            .then(res => setInActiveList(res.data))
            .catch(err => console.log(err)) 

        AdminService.getCompanyInternship()
            .then(res => {
                setList(res.data)
            })
            .catch(err => console.log(err)) 
            
        AdminService.getCompanyProfile()
            .then(res => setProfile(res.data))
            .catch(err => console.log(err)) 

        AdminService.ApplicantsCompany('fc5c6f90-23c2-46e4-a990-9471f8061b61')
            .then(res => setApplicants(res.data))
            .catch(err => console.log(err))

    }, []) 
    var localCards = props.location.state.loadCards;

    return (
        <div>
            <Header />
            <div className="dashboard__container">
                <div className="dashboard___slider">
                    <div className="dashboard__sidebarButtonArea">
                        <button onClick={() => {
                            user.recruits_for ? 
                            window.open('/postInternship', '_self')
                            : window.open('/applyRecruiterForm', '_self')
                        }} className="category__label dashboard__sidebarButton">+ Add Post</button>
                        <CityModal />
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
                            user.recruits_for ? 
                            window.open('/postInternship', '_self')
                            : window.open('/applyRecruiterForm', '_self')
                        }} className="category__label dashboard__sidebarButton">+ Add Post</button>
                        <CityModal />
                    </div>
                    <div className="dashboard__sliderNavs">
                        {navCollection.map(nav => (
                            <DashboardNav name={nav.name} Icon={nav.icon} number={nav.number} setTab={setTab}/>
                        ))}
                    </div>
                </div>
                {tab === 'Posted Internships' ? (
                    <div className="dashboard__content"><JobsPosted data={
                        action === 'Active' ? ActivelistInternship : action === 'Inactive' ? InActivelistInternship : listInternship
                    } setAction={setAction} /></div>
                ) : tab === 'Applicants' ? (
                    <div className="dashboard__content"><ApplicantList data={companyApplicants} /></div> 
                ) : tab=== 'Profile' ? (
                    <CompanyProfile data={company} />
                ) : (
                    <div className="dashboard__content" style={{boxShadow: 'none', border: 'none'}}>
                        <div className="dashboard__ContentCards">
                            <DashboardSeva localCards={localCards} />
                        </div>
                    </div>
                )}
            </div>            
        </div>
    )
}

export default DashboardMain;

const CompanyProfile = ({data}) => {
    return(
        <div className="dashboard__content">
            <div className="box2">
                <div className='adjusting_card'>
                    <div className="company_card" style={{boxShadow: 'none', border: 'none'}}>
                        <div className="for_margin_inside">
                            <div className='img_n_name'>
                                <div className='cmp_main_img'>
                                    {data.logo.link && LogoMap.get(data.name) ?  (
                                        <img src={LogoMap.get(data.name).url} className="companyLogo__featuredCards" alt="" />
                                    ) : <HiUserGroup style={{fontSize: 40}} /> }
                                </div>
                                <div style={{marginLeft:'15px',marginTop:'5px'}}>
                                    <p className='company_main_name'>{data.name}</p>
                                    <p className='company_cat_type' >{data.kind}</p>
                                </div>
                            </div>
                            <p style={{marginTop:'50px',marginBottom:'20px',fontFamily: 'Gordita',fontStyle: 'normal',fontWeight: 'normal',fontSize: '13px',lineHeight: '26px',letterSpacing: '0.26px',textTransform: 'uppercase',color: '#6B6E6F'}}>COMPANY</p>
                            <hr></hr>
                            <div className="short_details">
                                <div className="each_short_detail">
                                    <p className="specification">Company size</p>
                                    <p className="specification_ans">{data.strength}</p>
                                </div>
                                <div className="each_short_detail">
                                    <p className="specification">Type of Corporation</p>
                                    <p className="specification_ans">{data.kind}</p>
                                </div>
                                <div className="each_short_detail">
                                    <p className="specification">Location</p>
                                    <p className="specification_ans">{data.company_locations.map(location => {
                                        return(
                                            location.is_head_office ? location.location : null
                                        );
                                    })}</p>
                                </div>
                                <div className="each_short_detail">
                                    <p className="specification">Estb. Since</p>
                                    <p className="specification_ans">{data.meta.established}</p>
                                </div>
                                <div className="each_short_detail">
                                    <p className="specification">Social Media</p>
                                    <div class="for_media_icons" style={{marginTop: 10}}>
                                        {data.meta.social_links.map(
                                            link => {
                                                return(
                                                    <a href={link.link} className="mediaIcons"><i className={`fab ${IconMap.get(link.handle).url} adj_icon`} aria-hidden="true"></i></a>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                                <div className="each_short_detail">
                                    <p className="specification">Branches</p>
                                    <div className="flexRow" style={{gap: 5}}>
                                        {data.company_locations.filter(location => location.is_head_office === false).map(location => {
                                            return(
                                                <p className="specification_ans">{location.location}</p>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            <p className="company_heading">Join {data.name}</p>
                            <p className="content_area" style={{marginTop: 20}}>{data.description}</p>
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