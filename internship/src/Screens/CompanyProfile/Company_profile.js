import {React,useState} from 'react';
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
import {Team_members_data} from "../../utility/DummyData/CompanyProfile";
import validator from 'validator';
import Notification from '../Auth/Notification.js';
import PopupAuth from "../AdminDashboard/ActionAuth";
import pr1 from '../../images/Landing2/gallery-img17.jpg';
import pr2 from '../../images/Landing2/gallery-img3.jpg';
import pr3 from '../../images/Landing2/gallery-img16.jpg';
import pr4 from '../../images/Landing2/gallery-img24.jpg';
import {TextField} from '@material-ui/core';
import { AiFillCloseCircle } from "react-icons/ai";


const Frame3 =(props)=>{
    const img1 = F3_1.cmp_img;
    var uuid = (props.location.state?.uuid);
    



    
    return(
        <>
            <div style={{background: '#CDCDCD1F',height:'100%',overflow:'auto'}}>
                <Header/>
                    <div className="list__article__container">
                        <div className="for_margin_top_bottom">
                            <Back/>
                            <CompanyProfile />
                        </div>
                        <Footer></Footer>
                    </div>
            </div>
        </> 
    );
}

export default Frame3;

const CompanyProfile = () => {
    const img1 = F3_1.cmp_img;
    const [userInputs,setUserInputs]=useState(false);
    const [notify,setnotify] = useState({message:'',type:'',isOpen:false});
    const [popUserAuth,setPopUserAuth]=useState(false);
    const [popOnHoldAuth,setPopOnHoldAuth]=useState(false);
    const [popDeleteAuth,setPopDeleteAuth]=useState(false);
    const [popSpamAuth,setPopSpamAuth]=useState(false);
    const [users,setUsers]=useState([
        {
          name:"Andrew Smith",
          userID:"1235987",
          email:"richerdpeter@gmail.com",
          username:"Richerd_Peter",
          contact:"7989390131",
          img:pr3
         },
         {
          name:"Teena",
          userID:"1478523",
          email:"jamesrobert@gmail.com",
          username:"James Robert",
          contact:"9569871235",
          img:pr4
         },
         {
          name:"Simon",
          userID:"6547291",
          email:"benthomas@gmail.com",
          username:"Bent_Thomas",
          contact:"9852446317",
          img:pr1
         },
         {
          name:"Nancy",
          userID:"5214638",
          email:"steve@gmail.com",
          username:"Steve",
          contact:"9569871235",
          img:pr2
         }
      ])
      const [newdata,setNewdata]=useState({
        name:"",
        userID:"",
        email:"",
        username:"",
        contact:"",
        img:pr1
    })
    const userUpdate=()=>{
        setUsers([...users,{...newdata}]);
        setNewdata({
          name:"",
          userID:"",
          email:"",
          username:"",
          contact:"",
          img:pr1
        })
      }
      const onHoldFunction=()=>{
          alert("on hold done");
      }
      const deleteFunction=()=>{
        alert("delete done");
    }
    const spamFunction=()=>{
        alert("spam done");
    }
      const changehandler =e=>{
        const  target = e.target
        const name = target.name
        const value = target.value
        {
          setNewdata({
                ...newdata,
                [name] : value
            })
        }
        
      }
    return(
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
                            <div className="for_comp_n_actions">
                            <p style={{marginTop:'50px',marginBottom:'20px',fontFamily: 'Gordita',fontStyle: 'normal',fontWeight: 'normal',fontSize: '13px',lineHeight: '26px',letterSpacing: '0.26px',textTransform: 'uppercase',color: '#6B6E6F'}}>COMPANY</p>
                                <div className="for_actions_cont">
                                    <p style={{marginTop:'50px',marginBottom:'20px',marginRight: "15px",fontFamily: 'Gordita',fontStyle: 'normal',fontWeight: 'normal',fontSize: '13px',lineHeight: '26px',letterSpacing: '0.26px',color: '#6B6E6F'}}>Actions:</p>
                                    <div>
                                        <button className="for_btn_onhold for_btn_actions" onClick={()=>{setPopOnHoldAuth(true)}}>
                                            On Hold
                                        </button>
                                    </div>
                                    <div>
                                        <button className="for_btn_delete for_btn_actions" onClick={()=>{setPopDeleteAuth(true)}}>
                                            Delete
                                        </button>
                                    </div>
                                    <div>
                                        <button className="for_btn_spam for_btn_actions "onClick={()=>{setPopSpamAuth(true)} }>
                                            Spam
                                        </button>
                                        </div>   
                                </div>
                            </div>
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
                                <Team membersData={users} setPop={setUserInputs}/>
                                <div>
                                        {
                                        
                                        userInputs===true?(
                                            <div className="for_pop_width">
                                                <div className="for_dialog_close">
                                                    <button className="for_btn_cls" onClick={()=>{setUserInputs(false)}}>
                                                        <AiFillCloseCircle className="for_icon_close"/>
                                                    </button>
                                                </div>
                                                <form>
                                                <div style={{display:"flex",flexDirection:"column"}}>
                                                    <TextField id="outlined-basic" label="Name" name="name" variant="outlined" onChange={changehandler} className="for_fields"/>
                                                    <TextField id="outlined-basic" label="User ID" name="userID" variant="outlined" onChange={changehandler} className="for_fields"/>
                                                    <TextField id="outlined-basic" label="Email" name="email" variant="outlined"  onChange={changehandler} className="for_fields"/>
                                                    <TextField id="outlined-basic" label="Username"  name="username" variant="outlined" onChange={changehandler} className="for_fields"/>
                                                    <TextField id="outlined-basic" label="Phone number" name="contact" variant="outlined" type="number"  onChange={changehandler} className="for_fields"/>
                                                </div>
                                                </form>
                                                <div className="for_submit_member">
                                                    <button  className="apply_btn card_btn signInBtn "
                                                            onClick={(e) => {
                                                            e.preventDefault();
                                                            if(!validator.isEmail(newdata.email))
                                                                {
                                                                setnotify({message:'Wrong Format of Email address!',isOpen:true, type:""});
                                                                setTimeout(()=>{
                                                                    setnotify({message:'', isOpen:false, type:''})
                                                                },3000)
                                                                }
                                                            else
                                                                {
                                                                setPopUserAuth(true);      
                                                                }
                                                        }   
                                                        }
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                                
                                            </div>
                                        ):null
                                        
                                    }
                                </div>
                                <PopupAuth
                                    openPopup={popUserAuth}
                                    setPop={setPopUserAuth}
                                    setnext={()=>{setPopUserAuth(false);userUpdate();setUserInputs(false)}}
                                    >
                                </PopupAuth>
                                <PopupAuth
                                    openPopup={popOnHoldAuth}
                                    setPop={setPopOnHoldAuth}
                                    setnext={()=>{setPopOnHoldAuth(false);onHoldFunction();}}
                                    >
                                </PopupAuth>
                                <PopupAuth
                                    openPopup={popDeleteAuth}
                                    setPop={setPopDeleteAuth}
                                    setnext={()=>{setPopDeleteAuth(false);deleteFunction();}}
                                    >
                                </PopupAuth>
                                <PopupAuth
                                    openPopup={popSpamAuth}
                                    setPop={setPopSpamAuth}
                                    setnext={()=>{setPopSpamAuth(false);spamFunction();}}
                                    >
                                </PopupAuth>

                                {
                                        notify.isOpen && 
                                        <Notification
                                        notify={notify}
                                        />
                                    }
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
    )
}