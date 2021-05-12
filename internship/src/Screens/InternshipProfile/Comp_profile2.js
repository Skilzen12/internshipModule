/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import './Comp_profile2.css';
import  {dataCmp2} from '../../utility/DummyData/InternshipProfile';
import Back from "../../Components/GoBack/Back_comp";
import Header from "../../Components/Header/Updated_Header";
import Footer from '../../Components/Footer/Footer';
import {BsBookmark as Mark, BsFillBookmarkFill} from "react-icons/bs";
import AdminService from '../../AdminServices/AdminService';
import {LogoMap} from '../../utility/Maps/LandingPageMaps';
import { HiUserGroup } from 'react-icons/hi';
import { useSelector , useDispatch } from 'react-redux'
import { useHistory } from 'react-router';


const InternshipProfile = ({obj, uuid, Apply, BookMark,bookmarkStatus,applyStatus}) => {
    const user = useSelector(state => state.user);
    // console.log(obj)
    
    function getDate(date){
        var postedDate = date.split('T')[0];
        var PostedDate = postedDate.split('-')[2];
        var PostedMonth = postedDate.split('-')[1];
        var PostedYear = postedDate.split('-')[0];

        return `${PostedDate}/${PostedMonth}/${PostedYear}`;
    }
    return(
        <div className="box1">
            <div className='adjusting_card'>
                <div className="company_card">
                    <div className="for_margin_inside">
                        <div className="for_header_side">
                            <div>
                                <>
                                    <p className="for_post_title">{obj.title ? obj.title : 'ABCD EFG'}</p>
                                    <p className='company_cat_type2' style={{marginTop: 0}} >{obj.company ? obj.company.kind : 'B2A' }</p>
                                </>
                            </div>
                            <div className='img_n_name2'>
                                {(obj.company&& LogoMap.get(obj.company.name)?.url)? (
                                    <img src={LogoMap.get(obj.company.name)?.url} className="companyLogo__featuredCards" alt="" />
                                ) : <HiUserGroup style={{fontSize: 40}} /> }
                                <div style={{marginTop:'5px'}}>
                                    <p className='company_main_name'>{obj.company ? obj.company.name : 'XASD'}</p>
                                </div>
                            </div>
                        </div>
                        {
                        // user.recruits_for ?  null : 
                        (
                            <div className="btn_row">
                                <div className="adj_btn_comp">
                                    <button className="btn_for_apply btn_for_card" disabled={applyStatus} onClick={() => Apply(uuid)}>{applyStatus ? 'Applied' : 'Apply Now'}</button>
                                </div>
                                <div className="adj_btn_comp">
                                    <button className="btn_for_apply btn_for_card" onClick={() => BookMark(uuid)}>
                                        {bookmarkStatus ? <BsFillBookmarkFill style={{fontSize:17,paddingBottom:'2px', marginRight: 5}}/> : <Mark style={{fontSize:17, marginRight: 5, paddingBottom:'2px'}}/>}
                                        {bookmarkStatus ? 'Saved' : 'Bookmark it'}
                                    </button>
                                </div>
                            </div>
                        )}
                        
                        <hr></hr>
                        <div className="short_details">
                            <div className="each_short_detail2">
                                <p className="specification2">Stipend</p>
                                <p className="specification_ans2">{obj.min_stipend ? `${obj.min_stipend} - ${obj.max_stipend} INR` : '20K-50K'}</p>
                            </div>
                            <div className="each_short_detail2">
                                <p className="specification2">Internship type</p>
                                <p className="specification_ans2">{obj.kind ? obj.kind : 'Full Time'}</p>                                                        
                            </div>
                            <div className="each_short_detail2">
                                <p className="specification2">Location</p>
                                <p className="specification_ans2">{obj.company_location ? obj.company_location.location : 'Aryacet' }</p>
                            </div>
                            <div className="each_short_detail2">
                                <p className="specification2">Internship duration</p>
                                <p className="specification_ans2">{obj.duration ? obj.duration : '5 months' }</p>
                            </div>
                            <div className="each_short_detail2">
                                <p className="specification2">Internship start date</p>
                                <p className="specification_ans2">{obj.start_date ? getDate(obj.start_date) : '3/05/2021'}</p>
                            </div>
                            <div className="each_short_detail2">
                                <p className="specification2">Number of openings</p>
                                <p className="specification_ans2">{obj.openings ? obj.openings : 5}</p>
                            </div>
                            
                            <div className="each_short_detail2">
                                <p className="specification2">Perks</p>
                                {
                                    obj.perks ? <TagsIcons list={obj.perks} /> :
                                    <TagsIcons list={['Certificate','5 days a week','Letter of recommendation']} />
                                }
                            </div>
                            <div className="each_short_detail2">
                                <p className="specification2">Skills required</p>
                                {
                                    obj.skills ? <TagsIcons list={obj.skills} /> : <TagsIcons list={['Editing','Wire-framing','XD','User Person','Sketch']} />
                                }
                            </div>
                            <div className="each_short_detail2" style={{paddingLeft: 10}}>
                                <p className="specification2">Pre-Placement offer</p>
                                <p className="specification_ans2">{obj.ppo ? obj.ppo : 'No'}</p>
                            </div>
                        </div>
                        <hr  className="for_hr_2"></hr>
                        <div>
                            <h3 className="company_heading2">Job Description</h3>
                            <p className="content_area2">{obj.description}</p>
                            <hr className="hr_for_TM"></hr>
                            {
                            // user.recruits_for ?  null :
                             (
                                <div className="adj_btn_comp">
                                    <button className="btn_for_apply btn_for_card" disabled={applyStatus} onClick={() => Apply(uuid)}>{applyStatus ? 'Applied' : 'Apply Now'}</button>
                                </div>
                            )}
                        </div>
                    </div>                                            
                </div>        
            </div>
        </div>
    );
}

const TagsIcons =({list})=>{ 
    return (
      <ul className="tags__featured" style={{paddingLeft: 0, paddingRight: 0}}>
        {list.map(item=>(
          <li className="mt-1">
            <a className="bg-regent-opacity-15 min-width-px-96 text-center rounded-3 py-1"
              style={{ fontFamily: "Gordita" }}
            >
              {item.name ? item.name : item}
            </a>
          </li>
        ))}
      </ul>
    )
}

function InternshipDetailPage (props){    
    const [data, setData] = useState([]);
    const history = useHistory();
    console.log(props);
    var uuid = (props.match.params?.uuid);
    const user = useSelector(state => state.user);
    let [bookmark, setBookmark] = useState(false);
    let [apply, setApply] = useState(false);
    
    const Apply = async (uuid) => {
        if(user.user_profile){
            AdminService.InternshipsApply(uuid)
                .then(res => {
                    if(res.status === 200){
                        setApply(true);
                    }
                })
        .catch(err => console.log(err))
        } else{
            history.push('/');
        }        
    }

    const Bookmark = async (uuid) => {
        AdminService.InternshipsBookmark(uuid)
        .then(res => {
            if(res.data['bookmark status'] === true){
                setBookmark(true);
            }
            else if(res.data['bookmark status'] === false){
                setBookmark(false);
            }
        })
        .catch(err => console.log(err))
    }
    
    const getDetails = async (id) => {
        AdminService.getInternshipsDetail(id)
            .then(res => {
                    setData(res.data)
                    setBookmark(res.data?.is_marked);
            })
            .catch(err=>Promise.reject(err));
    }
    useEffect(() => {
        getDetails(uuid)
        .then(res => {setLoading(false)})
        .catch((err)=>{
            console.log(err);
        })
    }, [uuid])

    // Kept this to stop rendering page for some time
    const [loading,setLoading]=useState(true)
    // setTimeout(() =>{setLoading(true)},1000);
    if(loading) return <h1>Loading....</h1>

    return(
        <>
            <div style={{background: '#CDCDCD1F',height:'100%',overflow:'auto'}}>
                <Header/>
                    <div className="list__article__container">
                        <div className="for_margin_top_bottom2">
                            <div className='adjusting_card_back'>
                                <Back/>
                            </div>
                            {data ? <InternshipProfile obj={data} uuid={uuid} Apply={Apply} BookMark={Bookmark} applyStatus={apply} bookmarkStatus={bookmark} /> : <h1 className="text-center">Internship Not Found!!</h1> }          
                        </div>
                        <Footer></Footer>
                    </div>
            </div>
        </> 
    );
}

export default InternshipDetailPage;