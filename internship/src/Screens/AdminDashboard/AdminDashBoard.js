import React, { useState, useEffect } from "react";
import "../Dashboard/DashboardMain.css";
import Header from "../../Components/Header/Updated_Header";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CountUp from "react-countup";
import logo from "../../images/logo-main-black.png";
import {
  AiFillEye,
  AiFillMessage,
  AiOutlineFileDone,
  AiOutlineFileText,
} from "react-icons/ai";
import { RiLayout4Fill } from "react-icons/ri";
import { FaPhoneAlt, FaUserAlt, FaUserFriends } from "react-icons/fa";
import imgP1 from "../../images/TieUps/AmazonLogo.png";
import imgP2 from "../../images/TieUps/ISROLogo.png";
import imgP3 from "../../images/TieUps/TeslaLogo.png";
import { BiBuildings, BiCaretDown, BiCaretUp } from "react-icons/bi";
import { Checkbox } from "@material-ui/core";
import {IoFingerPrint} from "react-icons/io5";
import { HiDocumentDownload } from "react-icons/hi";
import { useHistory } from "react-router";
import { CgCloseO } from "react-icons/cg";
import AdminService from "../../AdminServices/AdminService";

const navCollection = [
  { name: "Dashboard", icon: RiLayout4Fill },
  { name: "Companies", icon: BiBuildings },
  { name: "Internships", icon: AiOutlineFileText },
  { name: "Spam", icon: CgCloseO },
  { name: "KYC", icon: IoFingerPrint}
];

const options = ["On Hold", "Spam", "Delete"];

const CardCollection = [
  {
    name: "No.of Companies",
    color: "rgba(71, 67, 219, 0.1)",
    decimal: false,
    darkcolor: "rgb(71, 67, 219)",
    number: 456,
    icon: BiBuildings,
  },
  {
    name: "No.of internships",
    color: "rgba(150, 20, 50, 0.1)",
    decimal: true,
    darkcolor: "rgb(150, 20, 50)",
    number: 1.2,
    content: "K",
    icon: AiOutlineFileDone,
  },
  {
    name: "Total students",
    color: "rgba(71, 67, 219, 0.1)",
    decimal: false,
    darkcolor: "rgb(71, 67, 219)",
    icon: FaUserFriends,
    number: 651,
  },
  {
    name: "Messages answered",
    color: "rgba(252, 73, 128, 0.1)",
    decimal: false,
    darkcolor: "rgb(252, 73, 128)",
    icon: AiFillMessage,
    number: 40,
  },
  {
    name: "Unread Messages",
    color: "rgba(252, 100, 50, 0.1)",
    decimal: false,
    darkcolor: "rgb(252,100, 50)",
    icon: AiFillMessage,
    number: 100,
  },
  {
    name: "Total Views/per day",
    color: "rgba(71, 200, 100, 0.1)",
    decimal: false,
    darkcolor: "rgb(71, 200, 100)",
    number: 456,
    content: "K",
    icon: AiFillEye,
  },
  {
    name: "Application rate",
    color: "rgba(2, 191, 213, 0.1)",
    decimal: true,
    darkcolor: "rgb(2, 191, 213)",
    number: 18.5,
    content: "%",
    icon: RiLayout4Fill,
  },
  {
    name: "Hired",
    color: "rgba(252, 73, 128, 0.1)",
    decimal: false,
    darkcolor: "rgb(252, 73, 128)",
    icon: FaPhoneAlt,
    number: 69,
  },
  //   {
  //     name: "Jobs View/per month",
  //     color: "rgba(250, 95, 28, 0.1)",
  //     decimal: true,
  //     darkcolor: "rgb(250, 95, 28)",
  //     number: 16.5,
  //     content: "K",
  //     icon: AiFillProfile,
  //   },
];

const DashboardCard = ({
  name,
  color,
  darkcolor,
  Icon,
  number,
  content,
  decimal,
}) => {
  const [hover, sethover] = useState(false);
  return (
    <div className="dashboard__card">
      <div className="dashboard__logo" style={{ backgroundColor: color }}>
        <Icon style={{ color: darkcolor, fontSize: 20 }} />
      </div>
      <div className="dashboard__Cardcontent">
        {decimal ? (
          <div className="dashboard__cardNum">
            <CountUp duration={4} decimal="." decimals={1} end={number} />
            {content}
          </div>
        ) : (
          <div className="dashboard__cardNum">
            <CountUp duration={4} end={number} />
            {content}
          </div>
        )}
        <div className="dashboard__cardTitle">{name}</div>
      </div>
    </div>
  );
};

const CompaniesData=[
  {
    compName:'Manson Software',
    compImage:'https://images-na.ssl-images-amazon.com/images/I/21wkQvrB5xL.png',
    primaryContact:'Ashish',
    status:'Active',
    registeredOn:'01/04/2021',
    activeInternshipsCount:'20'
  },
  {
    compName:'Big-Basket',
    compImage:'https://www.pinclipart.com/picdir/big/99-991436_prev-big-basket-logo-png-clipart.png',
    primaryContact:'Dexter',
    status:'Deactive',
    registeredOn:'01/04/2021',
    activeInternshipsCount:'40'
  },
  {
    compName:'Urban-Ladder',
    compImage:'https://www.shopickr.com/wp-content/uploads/2018/04/urbanladder.png?v=200',
    primaryContact:'Berlin',
    status:'Active',
    registeredOn:'21/02/2021',
    activeInternshipsCount:'100'
  },
  {
    compName:'BookMyShow',
    compImage:'https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg',
    primaryContact:'Raghav',
    status:'Active',
    registeredOn:'10/02/2021',
    activeInternshipsCount:'10'
  },
  {
    compName:'Manson Software',
    compImage:'https://images-na.ssl-images-amazon.com/images/I/21wkQvrB5xL.png',
    primaryContact:'Vipin',
    status:'Deactive',
    registeredOn:'01/04/2021',
    activeInternshipsCount:'20'
  },
  {
    compName:'BookMyShow',
    compImage:'https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg',
    primaryContact:'Srinivas',
    status:'Active',
    registeredOn:'10/02/2021',
    activeInternshipsCount:'20'
  },
  {
    compName:'BookMyShow',
    compImage:'https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg',
    primaryContact:'Ashish',
    status:'Deactive',
    registeredOn:'10/02/2021',
    activeInternshipsCount:'20'
  },
  {
    compName:'BookMyShow',
    compImage:'https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg',
    primaryContact:'Michael',
    status:'Active',
    registeredOn:'10/02/2021',
    activeInternshipsCount:'20'
  }
]

const internshipsData=[
  {
    compName:'Manson Software',
    compImage:'https://images-na.ssl-images-amazon.com/images/I/21wkQvrB5xL.png',
    title:'Software Manager',
    category:'Programming',
    postedOn:'01/04/2021',
    applicantsCount:'20'
  },
  {
    compName:'Big-Basket',
    compImage:'https://www.pinclipart.com/picdir/big/99-991436_prev-big-basket-logo-png-clipart.png',
    title:'Software Developer',
    category:'Programming',
    postedOn:'01/04/2021',
    applicantsCount:'40'
  },
  {
    compName:'Urban-Ladder',
    compImage:'https://www.shopickr.com/wp-content/uploads/2018/04/urbanladder.png?v=200',
    title:'Sales Lead',
    category:'Marketing',
    postedOn:'21/02/2021',
    applicantsCount:'100'
  },
  {
    compName:'BookMyShow',
    compImage:'https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg',
    title:'Marketing Manager',
    category:'Marketing',
    postedOn:'10/02/2021',
    applicantsCount:'10'
  },
  {
    compName:'Manson Software',
    compImage:'https://images-na.ssl-images-amazon.com/images/I/21wkQvrB5xL.png',
    title:'Software Manager',
    category:'Programming',
    postedOn:'01/04/2021',
    applicantsCount:'20'
  },
  {
    compName:'BookMyShow',
    compImage:'https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg',
    title:'Marketing Manager',
    category:'Marketing',
    postedOn:'10/02/2021',
    applicantsCount:'20'
  },
  {
    compName:'BookMyShow',
    compImage:'https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg',
    title:'Marketing Manager',
    category:'Marketing',
    postedOn:'10/02/2021',
    applicantsCount:'20'
  },
  {
    compName:'BookMyShow',
    compImage:'https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg',
    title:'Marketing Manager',
    category:'Marketing',
    postedOn:'10/02/2021',
    applicantsCount:'20'
  }
]

const SpamData1=[
  {
    compName:'Manson Software',
    compImage:'https://images-na.ssl-images-amazon.com/images/I/21wkQvrB5xL.png',
    no_ofActiveInterns:'5',
    no_ofSpamReports:'2',
    recentSpamDate:'10/03/2021'
  },
  {
    compName:'Big-Basket',
    compImage:'https://www.pinclipart.com/picdir/big/99-991436_prev-big-basket-logo-png-clipart.png',
    no_ofActiveInterns:'8',
    no_ofSpamReports:'3',
    recentSpamDate:'1/02/2021'
  },
  {
    compName:'Urban-Ladder',
    compImage:'https://www.shopickr.com/wp-content/uploads/2018/04/urbanladder.png?v=200',
    no_ofActiveInterns:'5',
    no_ofSpamReports:'1',
    recentSpamDate:'20/03/2021'
    },
  {
    compName:'BookMyShow',
    compImage:'https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg',
    no_ofActiveInterns:'2',
    no_ofSpamReports:'0',
    recentSpamDate:'21/01/2021'
    },
  
]

const SpamData=[
  {
    compName:'Manson Software',
    compImage:'https://images-na.ssl-images-amazon.com/images/I/21wkQvrB5xL.png',
    title:'Software Manager',
    category:'Programming',
    postedOn:'01/04/2021',
    postedBy:'person1',
    reportedDate:'11/03/2021',
    reportedBy:'person2'
  },
  {
    compName:'Big-Basket',
    compImage:'https://www.pinclipart.com/picdir/big/99-991436_prev-big-basket-logo-png-clipart.png',
    title:'Software Developer',
    category:'Programming',
    postedOn:'01/04/2021',
    postedBy:'person1',
    reportedDate:'11/03/2021',
    reportedBy:'person2'
  },
  {
    compName:'Urban-Ladder',
    compImage:'https://www.shopickr.com/wp-content/uploads/2018/04/urbanladder.png?v=200',
    title:'Sales Lead',
    category:'Marketing',
    postedOn:'21/02/2021',
    postedBy:'person1',
    reportedDate:'11/03/2021',
    reportedBy:'person2'  },
  {
    compName:'BookMyShow',
    compImage:'https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg',
    title:'Marketing Manager',
    category:'Marketing',
    postedOn:'10/02/2021',
    postedBy:'person1',
    reportedDate:'11/03/2021',
    reportedBy:'person2'  },
  {
    compName:'Manson Software',
    compImage:'https://images-na.ssl-images-amazon.com/images/I/21wkQvrB5xL.png',
    title:'Software Manager',
    category:'Programming',
    postedOn:'01/04/2021',
    postedBy:'person1',
    reportedDate:'11/03/2021',
    reportedBy:'person2'  },
  {
    compName:'BookMyShow',
    compImage:'https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg',
    title:'Marketing Manager',
    category:'Marketing',
    postedOn:'10/02/2021',
    postedBy:'person1',
    reportedDate:'11/03/2021',
    reportedBy:'person2'  },
  {
    compName:'BookMyShow',
    compImage:'https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg',
    title:'Marketing Manager',
    category:'Marketing',
    postedOn:'10/02/2021',
    postedBy:'Ashish Hemrajani',
    reportedDate:'11/03/2021',
    reportedBy:'person2'  },
  {
    compName:'BookMyShow',
    compImage:'https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg',
    title:'Marketing Manager',
    category:'Marketing',
    postedOn:'10/02/2021',
    postedBy:'Ashish Hemrajani',
    reportedDate:'11/03/2021',
    reportedBy:'person2'  }
]
const KycData=[
  {
    compName:'Manson Software',
    compImage:'https://images-na.ssl-images-amazon.com/images/I/21wkQvrB5xL.png',
    personName:'Siddharth Mehta',
    email:'mansonsoftware@gmail.com',
    phone:'8954124558',
    profilLink:{
      fb:"#",
      tw:'#',
      lid:"#",
      dr:"#",
      bh:"#"
  }
  },
  {
    compName:'Big-Basket',
    compImage:'https://www.pinclipart.com/picdir/big/99-991436_prev-big-basket-logo-png-clipart.png',
    personName:'Hari Menon',
    email:'bigbasket@gmail.com',
    phone:'7854254785',
    profilLink:{fb:"#",
    tw:'#',
    lid:"#",
    dr:"#",
    bh:"#"
  }
  },
  {
    compName:'Urban-Ladder',
    compImage:'https://www.shopickr.com/wp-content/uploads/2018/04/urbanladder.png?v=200',
    personName:'Dara Khosrowshahi',
    email:'uber@gmail.com',
    phone:'9541254785',
    profilLink:{fb:"#",
    tw:'#',
    lid:"#",
    dr:"#",
    bh:"#"
  }
   },
  {
    compName:'BookMyShow',
    compImage:'https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg',
    personName:'Ashish Hemrajani',
    email:'bookmyshow@gmail.com',
    phone:'7854254785',
    profilLink:{fb:"#",
    tw:'#',
    lid:"#",
    dr:"#",
    bh:"#"
  }
    },
  {
    compName:'Manson Software',
    compImage:'https://images-na.ssl-images-amazon.com/images/I/21wkQvrB5xL.png',
    personName:'Siddharth Mehta',
    email:'mansonsoftware@gmail.com',
    phone:'9541254785',
    profilLink:{fb:"#",
    tw:'#',
    lid:"#",
    dr:"#",
    bh:"#"
  }
    },
  {
    compName:'BookMyShow',
    compImage:'https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg',
    personName:'Ashish Hemrajani',
    email:'bookmyshow@gmail.com',
    phone:'7854254785',
    profilLink:{fb:"#",
    tw:'#',
    lid:"#",
    dr:"#",
    bh:"#"
  }
    
    },
  {
    compName:'BookMyShow',
    compImage:'https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg',
    personName:'Ashish Hemrajani',
    email:'bookmyshow@gmail.com',
    phone:'8954124558',
    profilLink:{fb:"#",
    tw:'#',
    lid:"#",
    dr:"#",
    bh:"#"
  }
    },
  {
    compName:'BookMyShow',
    compImage:'https://img.favpng.com/14/7/14/bookmyshow-office-android-ticket-png-favpng-Ln9Hiu0AbwHTrfiCgNDa4h6ur_t.jpg',
    personName:'Ashish Hemrajani',
    email:'bookmyshow@gmail.com',
    phone:'9541254785',
    profilLink:{fb:"#",
                tw:'#',
                lid:"#",
                dr:"#",
                bh:"#"
              }
   }
]

const InternshipColumnOrder=['Company','Title','Posted On','Category','No. of Applicants'];
const SpamColumnOrder = ['Company','Title','Category','Posted by','Posted on','Reported by','Date of Reported'];
const Spam1ColumnOrder=['Company','Total interns active','Total spam reports','Recent spam report date'];
const KycColumnOrder = ['Company','Person','Email','Phone','Profile link','Document'];

const KycRow = ({kyc,action,even}) => {
  const {status,setStatus}=kyc;

  
  return(
      <tr  style={{backgroundColor: even ? '#F4F5F8' : '#FFFFFF', border: '1px solid #E5E5E5'}}>
          <td  className="jobsPosted__row">
              <Checkbox/>
          </td>
          <td className="jobsPosted__row applicationsUser  mv200">
              <img src={kyc.compImage} className="applicantUser__image" alt="user_image" />
              <h3 className="jobsPostedtable_cell m20">
                  {kyc.compName}
              </h3>
          </td>
          <td  className="jobsPosted__row">
              <h3 className="jobsPostedtable_cell ">
                  <b>{kyc.personName}</b>
              </h3>
          </td>
          <td  className="jobsPosted__row">
              <h3 className="jobsPostedtable_cell  ">
                  {kyc.email}
              </h3>
          </td>
          <td  className="jobsPosted__row">
              <h3 className="jobsPostedtable_cell ">
                  {kyc.phone}
              </h3>
          </td>
          <td  className="jobsPosted__row">
              <h3 className="jobsPostedtable_cell ">
              <div class="for_media_icons for_margin_icons">
                  <a href={kyc.profilLink.lid} className="mediaIcons"><i className="fab fa-linkedin-in adj_icon" aria-hidden="true"></i></a>
                  <a href={kyc.profilLink.fb} className="mediaIcons"><i className="fab fa-facebook-f adj_icon " aria-hidden="true"></i></a>
                  <a href={kyc.profilLink.tw}className="mediaIcons"><i className="fab fa-twitter adj_icon" aria-hidden="true"></i></a>
                  <a href={kyc.profilLink.dr} className="mediaIcons"><i className="fab fa-dribbble adj_icon" aria-hidden="true"></i></a>
                  <a href={kyc.profilLink.bh} className="mediaIcons"><i className="fab fa-behance adj_icon" aria-hidden="true"></i></a>
              </div>
              </h3>
          </td>
          <td>
          <div className='for_center_align'>
            {/* <button className="category__label dashboard__sidebarButton for_doc"> */}
               <HiDocumentDownload style={{fontSize:25,cursor:'pointer'}}/>
            {/* </button> */}
          </div>
          </td>
            {
              <>
                  <td className="jobsPosted__row" onClick={() =>{} }>
                      <h3 className="jobsPostedtable_cell edit">
                          Accept
                      </h3>
                  </td>
                  <td className="jobsPosted__row" onClick={() =>{} }>
                      <h3 className="jobsPostedtable_cell shortlist">
                          Hold
                      </h3>
                  </td>
                  <td className="jobsPosted__row" onClick={() =>{} }>
                      <h3 className="jobsPostedtable_cell deactivate">
                          Reject
                      </h3>
                  </td>
              </>
            }
      </tr>
  );
}

const SpamRow1 = ({spam1,action,even}) => {
  // const {status,setStatus}=spam1;
  const history=useHistory()
  
  return(
      <tr  style={{backgroundColor: even ? '#F4F5F8' : '#FFFFFF', border: '1px solid #E5E5E5'}}>
          <td  className="jobsPosted__row">
              <Checkbox/>
          </td>
          <td className="jobsPosted__row applicationsUser p20 mv200 cursor__pointer" onClick={()=>history.push('/companyspam')}>
              <img src={spam1.compImage} className="applicantUser__image" alt="user_image" />
              <h3 className="jobsPostedtable_cell ">
                  {spam1.compName}
              </h3>
          </td>
          <td  className="jobsPosted__row">
              <h3 className="jobsPostedtable_cell  mv150 for_center_align" >
                  {spam1.no_ofActiveInterns}
              </h3>
          </td>
          <td  className="jobsPosted__row">
              <h3 className="jobsPostedtable_cell  mv150 for_center_align">
                  {spam1.no_ofSpamReports}
              </h3>
          </td>
          <td  className="jobsPosted__row">
              <h3 className="jobsPostedtable_cell  for_center_align">
                  {spam1.recentSpamDate}
              </h3>
          </td>
          
            {
              <>
                  <td className="jobsPosted__row" onClick={() =>{} }>
                      <h3 className="jobsPostedtable_cell edit">
                          View
                      </h3>
                  </td>
                  <td className="jobsPosted__row" onClick={() =>{} }>
                      <h3 className="jobsPostedtable_cell shortlist">
                          On Hold
                      </h3>
                  </td>
                  <td className="jobsPosted__row" onClick={() =>{} }>
                      <h3 className="jobsPostedtable_cell deactivate">
                          Delete
                      </h3>
                  </td>
              </>
            }
      </tr>
  );
}



const SpamRow = ({spam,action,even}) => {
  const {status,setStatus}=spam;

  
  return(
      <tr  style={{backgroundColor: even ? '#F4F5F8' : '#FFFFFF', border: '1px solid #E5E5E5'}}>
          <td  className="jobsPosted__row">
              <Checkbox/>
          </td>
          <td className="jobsPosted__row applicationsUser p20 mv200">
              <img src={spam.compImage} className="applicantUser__image" alt="user_image" />
              <h3 className="jobsPostedtable_cell ">
                  {spam.compName}
              </h3>
          </td>
          <td  className="jobsPosted__row">
              <h3 className="jobsPostedtable_cell  mv150">
                  <b>{spam.title}</b>
              </h3>
          </td>
          <td  className="jobsPosted__row">
              <h3 className="jobsPostedtable_cell  mv150">
                  {spam.category}
              </h3>
          </td>
          <td  className="jobsPosted__row">
              <h3 className="jobsPostedtable_cell ">
                  {spam.postedBy}
              </h3>
          </td>
          <td  className="jobsPosted__row">
              <h3 className="jobsPostedtable_cell ">
                  {spam.postedOn}
              </h3>
          </td>
          
          <td  className="jobsPosted__row">
              <h3 className="jobsPostedtable_cell ">
                  {spam.reportedBy}
              </h3>
          </td>
          <td  className="jobsPosted__row">
              <h3 className="jobsPostedtable_cell ">
                  {spam.reportedDate}
              </h3>
          </td>
            {
              <>
                  <td className="jobsPosted__row" onClick={() =>{} }>
                      <h3 className="jobsPostedtable_cell edit">
                          View
                      </h3>
                  </td>
                  <td className="jobsPosted__row" onClick={() =>{} }>
                      <h3 className="jobsPostedtable_cell deactivate">
                          Delete
                      </h3>
                  </td>
              </>
            }
      </tr>
  );
}

const InternshipRow = ({internship,action,even}) => {
  const {status,setStatus}=internship;

  
  return(
      <tr  style={{backgroundColor: even ? '#F4F5F8' : '#FFFFFF', border: '1px solid #E5E5E5'}}>
          <td  className="jobsPosted__row">
              <Checkbox/>
          </td>
          <td className="jobsPosted__row applicationsUser p20 mv200">
              <img src={internship.compImage} className="applicantUser__image" alt="user_image" />
              <h3 className="jobsPostedtable_cell ">
                  {internship.compName}
              </h3>
          </td>
          <td  className="jobsPosted__row">
              <h3 className="jobsPostedtable_cell  mv150">
                  <b>{internship.title}</b>
              </h3>
          </td>
          <td  className="jobsPosted__row">
              <h3 className="jobsPostedtable_cell ">
                  {internship.postedOn}
              </h3>
          </td>
          <td  className="jobsPosted__row">
              <h3 className="jobsPostedtable_cell  mv150">
                  {internship.category}
              </h3>
          </td>
          <td  className="jobsPosted__row">
              <h3 className="jobsPostedtable_cell ">
                  {internship.applicantsCount}
              </h3>
          </td>
            {
              <>
                  <td className="jobsPosted__row" onClick={() =>{} }>
                      <h3 className="jobsPostedtable_cell edit">
                          View
                      </h3>
                  </td>
                  <td className="jobsPosted__row" onClick={() =>{} }>
                      <h3 className="jobsPostedtable_cell deactivate">
                          Delete
                      </h3>
                  </td>
                  <td className="jobsPosted__row" onClick={() =>{} }>
                      <h3 className="jobsPostedtable_cell shortlist">
                          Spam
                      </h3>
                  </td>
              </>
            }
      </tr>
  );
}


const sortHandler = (column,internships,setInternships)=>{
  
  // console.log('in sort',sortHandler.isAscending);

  function comp(row1,row2){
    let field1,field2;
    switch(column){
      case InternshipColumnOrder[0]:
        field1=row1.compName;
        field2=row2.compName;
        break;
      case InternshipColumnOrder[1]:
        field1=row1.title;
        field2=row2.title;
        break;
      case InternshipColumnOrder[2]:
        field1=row1.postedOn
        field2=row2.postedOn
        break;
      case InternshipColumnOrder[3]:
        field1=row1.category
        field2=row2.category
        break;
      case InternshipColumnOrder[4]:
        field1=row1.applicantsCount
        field2=row2.applicantsCount
        break;
      default:

    }

    return (field1<field2)?-1:1;
  }
  const tempInternships= [...internships];
  if(sortHandler.column!==column||!sortHandler.isAscending)
    {
      console.log('***Ascending***')
      tempInternships.sort(comp);
      setInternships(tempInternships)
      sortHandler.isAscending=true;
      sortHandler.column=column;
    }
  else {
      console.log('***Descending***')
      tempInternships.reverse();
      setInternships(tempInternships)
      sortHandler.isAscending=false;
      sortHandler.column=column;
  }
  // console.log(sortHandler.column,sortHandler.isAscending)
}
sortHandler.isAscending=false;
sortHandler.column='name'


const Internships = () => {
  const [action, setAction] = useState('all');
  const tags=[{name:"all",color:'black'},{name: "active", color: 'rgba(45,132,90,1)'}, {name: "inactive", color: 'rgba(211,46,46,1)'}]

  const [search,setSearch]=useState('');

  const [internships,setInternships]= useState([...internshipsData]);

  

  return (
      <div className="dashboard__jobsPosted">
          <div className="dashboard__jobsPostedHeader flex-column align-items-stretch">
              <div className="dashboard__jobsTags justify-content-between mb-2">
                  <p className="dashboard__jobsPostedheading">
                      Internships ({internships.length})
                  </p>
                  <div
                    className="searchbar__landing2"
                    style={{
                      maxWidth: "100%",
                      width: "30%",
                      minWidth:'320px',
                      backgroundColor: "#fff",
                    }}
                  >
                    <SearchIcon />
                    <input
                      type="text"
                      class="form-control focus-input"
                      placeholder="Type company name to search"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  
              </div>
              <div className="dashboard__jobstags">
                      {tags.map(tag => (
                          <div className="dashboard__jobsPostedTag" onClick={() => setAction(tag.name) } style={{color: tag.color}}>
                              {tag.name}
                          </div>
                      ))}
                  </div>

          </div>
          <div className="dashboard__jobsPostedTaable">
              <div className="table__responsive">
                  <table className="JobsPosted__table">
                      <thead>
                          <tr>
                              <th className="jobsPosted__tableHead jobsPosted__row" style={{textAlign: 'center'}} >
                                <Checkbox />
                              </th>
                              {InternshipColumnOrder.map(head => (
                                  <th className="jobsPosted__tableHead jobsPosted__row" onClick={()=>sortHandler(head,internships,setInternships)}>{head}&nbsp;{sortHandler.column===head?(sortHandler.isAscending?<BiCaretUp />:<BiCaretDown />):''}</th>
                              ))}
                              <th className="jobsPosted__tableHead jobsPosted__row" style={{textAlign: 'center'}} colSpan={3}>Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                          {internships.map((internship,_id) => (
                              
                                (internship.compName.toLowerCase().includes(search.toLowerCase())&&(action==='all'||action===internship.status))?
                                <InternshipRow internship={internship} action={action} even={_id%2?false:true} />
                                :null
                              )
                          )}
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  );
}


const Spam = () => {
  const [action, setAction] = useState('all');
  const tags=[{name:"all",color:'black'},{name: "active", color: 'rgba(45,132,90,1)'}, {name: "inactive", color: 'rgba(211,46,46,1)'}, {name: 'expiring soon', color: 'orange'},{name: 'expiring soon', color: 'orange'}]
  
  const [search, setSearch] = useState("");
  const [spam,setspam]= useState(SpamData);
  const [spam1,setSpam1]= useState(SpamData1);
  const sortHandler = (column)=>{
    if(sortHandler.isAscending===undefined){
      sortHandler.isAscending=false;
      sortHandler.column='name'
    }
    console.log('in sort')
    // spam.sort(({col1},{col2})=>{
    //   return col1-col2
    // })

    function comp(row1,row2){
      let field1,field2;
      switch(column){
        case SpamColumnOrder[0]:
          field1=row1.compName;
          field2=row2.compName;
          break;
        case SpamColumnOrder[1]:
          field1=row1.title;
          field2=row2.title;
          break;
        case SpamColumnOrder[2]:
          field1=row1.category
          field2=row2.category
          break;
        case SpamColumnOrder[3]:
          field1=row1.postedBy
          field2=row2.postedBy
          break;
        case SpamColumnOrder[4]:
          field1=row1.postedOn
          field2=row2.postedOn
          break;
        case SpamColumnOrder[5]:
          field1=row1.reportedBy
          field2=row2.reportedBy
          break;
        case SpamColumnOrder[6]:
            field1=row1.reportedDate
            field2=row2.reportedDate
            break;  
        default:

      }

  
      // console.log(field1,field2,(field1<field2)?1:-1)
      return (field1<field2)?1:-1;
    }
    const tempspam= spam,compSpam=spam;
    if(sortHandler.column!==column||!sortHandler.isAscending)
      {
        console.log('***Ascending***')
        tempspam.sort(comp);
        setspam(_interns=>tempspam)
        sortHandler.isAscending=true;
        sortHandler.column=column;
      }
    else {
        console.log('***Descending***')
        tempspam.reverse();
        setspam(_interns=>tempspam)
        sortHandler.isAscending=false;
    }
    console.log(compSpam===spam);
  }

  return (
      <div className="dashboard__jobsPosted">
          <div className="dashboard__jobsPostedHeader flex-column align-items-stretch">
              {/* <div className="dashboard__jobsTags">
                  <p className="dashboard__jobsPostedheading">
                      Applicants (12)
                  </p>
                  <div className="dashboard__jobstags">
                      {tags.map(tag => (
                          <div className="dashboard__jobsPostedTag" onClick={() => setAction(tag.name) } style={{color: tag.color}}>
                              {tag.name}
                          </div>
                      ))}
                  </div>
              </div> */}
          {/* <h1 className="ml-4">Spams</h1> */}
          <div className="dashboard__jobsTags justify-content-between mb-2">
                  <h1 className="dashboard__jobsPostedheading">
                      Spam                      
                  </h1>
                  <div
                    className="searchbar__landing2"
                    style={{
                      maxWidth: "100%",
                      width: "30%",
                      backgroundColor: "#fff",
                    }}
                  >
                    <SearchIcon />
                    <input
                      type="text"
                      class="form-control focus-input"
                      placeholder="Type company name to search"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  
              </div>
          </div>
          <div className="dashboard__jobsPostedTaable">
              <div className="table__responsive">
                  <table className="JobsPosted__table">
                      <thead>
                          <tr>
                              <th className="jobsPosted__tableHead jobsPosted__row" style={{textAlign: 'center'}} >
                                <Checkbox />
                              </th>
                              {/* {SpamColumnOrder.map(head => (
                                  <th className="jobsPosted__tableHead jobsPosted__row" onClick={()=>sortHandler(head)}>{head}</th>
                              ))} 
                              <th className="jobsPosted__tableHead jobsPosted__row" style={{textAlign: 'center'}} colSpan={2}>Actions</th>
                              */}
                              {Spam1ColumnOrder.map(head => (
                                  <th className="jobsPosted__tableHead jobsPosted__row" onClick={()=>sortHandler(head)}>{head}</th>
                              ))}
                              <th className="jobsPosted__tableHead jobsPosted__row" style={{textAlign: 'center'}} colSpan={3}>Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                          {/* {spam.map((spam,_id) => (
                              
                                (action==='all'||action===spam.status)?
                                <SpamRow spam={spam} action={action} even={_id%2?false:true} />
                                :null
                              )
                          )} */}
                          {spam1.map((spam1,_id) => (
                              
                              (action==='all'||action===spam.status)?
                              <SpamRow1 spam1={spam1} action={action} even={_id%2?false:true} />
                              :null
                            )
                          )}
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  );
}

const KYC = () => {
  const [action, setAction] = useState('all');
  const [search, setSearch] = useState("");

  const tags=[{name:"all",color:'black'},{name: "active", color: 'rgba(45,132,90,1)'}, {name: "inactive", color: 'rgba(211,46,46,1)'}, {name: 'expiring soon', color: 'orange'},{name: 'expiring soon', color: 'orange'}]

  const [kyc,setKyc]= useState(KycData);

  const sortHandler = (column)=>{
    if(sortHandler.isAscending===undefined){
      sortHandler.isAscending=false;
      sortHandler.column='name'
    }
    console.log('in sort')
    // Kyc.sort(({col1},{col2})=>{
    //   return col1-col2
    // })

    function comp(row1,row2){
      let field1,field2;
      switch(column){
        case KycColumnOrder[0]:
          field1=row1.compName;
          field2=row2.compName;
          break;
        case KycColumnOrder[1]:
          field1=row1.personName;
          field2=row2.personName;
          break;
        case KycColumnOrder[2]:
          field1=row1.email;
          field2=row2.email;
          break;
        case KycColumnOrder[3]:
          field1=row1.phone;
          field2=row2.phone;
          break;
        case KycColumnOrder[4]:
          field1=row1.profilLink;
          field2=row2.profilLink;
          break;  
        default:
      }

  
      // console.log(field1,field2,(field1<field2)?1:-1)
      return (field1<field2)?1:-1;
    }
    const tempKyc= kyc,compKyc=kyc;
    if(sortHandler.column!==column||!sortHandler.isAscending)
      {
        console.log('***Ascending***')
        tempKyc.sort(comp);
        setKyc(_interns=>tempKyc)
        sortHandler.isAscending=true;
        sortHandler.column=column;
      }
    else {
        console.log('***Descending***')
        tempKyc.reverse();
        setKyc(_interns=>tempKyc)
        sortHandler.isAscending=false;
    }
    console.log(compKyc===kyc);
  }

  return (
      <div className="dashboard__jobsPosted">
          <div className="dashboard__jobsPostedHeader flex-column align-items-stretch">
              {/* <div className="dashboard__jobsTags">
                  <p className="dashboard__jobsPostedheading">
                      Applicants (12)
                  </p>
                  <div className="dashboard__jobstags">
                      {tags.map(tag => (
                          <div className="dashboard__jobsPostedTag" onClick={() => setAction(tag.name) } style={{color: tag.color}}>
                              {tag.name}
                          </div>
                      ))}
                  </div>
              </div> */}
          {/* <h1 className="ml-4">KYC</h1> */}
          <div className="dashboard__jobsTags justify-content-between mb-2">
                  <h1 className="dashboard__jobsPostedheading">
                      KYC
                  </h1>
                  <div
                    className="searchbar__landing2"
                    style={{
                      maxWidth: "100%",
                      width: "30%",
                      backgroundColor: "#fff",
                    }}
                  >
                    <SearchIcon />
                    <input
                      type="text"
                      class="form-control focus-input"
                      placeholder="Type company name to search"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  
              </div>
          </div>
          <div className="dashboard__jobsPostedTaable">
              <div className="table__responsive">
                  <table className="JobsPosted__table">
                      <thead>
                          <tr>
                              <th className="jobsPosted__tableHead jobsPosted__row" style={{textAlign: 'center'}} >
                                <Checkbox />
                              </th>
                              {KycColumnOrder.map(head => (
                                  <th className="jobsPosted__tableHead jobsPosted__row" onClick={()=>sortHandler(head)}>{head}</th>
                              ))}
                              <th className="jobsPosted__tableHead jobsPosted__row" style={{textAlign: 'center'}} colSpan={3}>Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                          {kyc.map((kyc,_id) => (
                              
                                (action==='all'||action===kyc.status)?
                                < KycRow kyc={kyc} action={action} even={_id%2?false:true} />
                                :null
                              )
                          )}
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  );
}


const Companies = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [search, setSearch] = useState("");
  const [companies, setCompanies] = useState([
    {
      name: "Skilzen",
      tagline: "Ed-tech",
      companylogo: logo,
    },
    {
      name: "simonis",
      tagline: "Internet Service Porvider",
      companylogo: imgP1,
    },
    {
      name: "simonis",
      tagline: "Internet Service Porvider",
      companylogo: imgP2,
    },
    {
      name: "Skilzen",
      tagline: "Ed-tech",
      companylogo: imgP3,
    },
    {
      name: "simonis",
      tagline: "Internet Service Porvider",
      companylogo: logo,
    },
    {
      name: "simonis",
      tagline: "Internet Porvider ",
      companylogo: logo,
    },
  ]);

  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 48;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1 className="ml-4">Companies</h1>
      <div
        className="search__company"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          className="searchbar__landing2"
          style={{
            maxWidth: "100%",
            width: "480px",
            backgroundColor: "#fff",
          }}
        >
          <SearchIcon />
          <input
            type="text"
            class="form-control focus-input"
            placeholder="Type company name to search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="dashboard__ContentCards" style={{ gap: "14px" }}>
        {filteredCompanies.map((company) => (
          <div
            class="dashboard__card text-center"
            style={{
              padding: "10px",
              gap: "10px",
              maxWidth: "240px",
              height: "200px",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div>
              <div
                class="card-body"
                style={{
                  padding: "1.875rem",
                  flex: "1 1 24%",
                  minHeight: "1px",
                  wordBreak: "break-word",
                }}
              >
                <div style={{ width: "200px" }}>
                  <img
                    src={company.companylogo}
                    height="80px"
                    alt={company.name}
                  />
                </div>
                <div className="w-100">
                  <h6 class="font-w600 fs-16 mb-1">
                    <a
                      href="app-profile.html"
                      class="text-black"
                      style={{ textDecoration: "underline" }}
                    >
                      {company.name}
                    </a>
                  </h6>
                  <span
                    className="ml-4"
                    style={{ position: "absolute", top: "-3px", right: "2px" }}
                  >
                    <IconButton
                      aria-label="more"
                      aria-controls="long-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      {options.map((option) => (
                        <MenuItem
                          key={option}
                          selected={option === "Pyxis"}
                          onClick={handleClose}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </Menu>
                  </span>
                </div>
                <div>
                  <span class="fs-14">{company.tagline}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};


const CompanyTableRow = ({company,action,even}) => {
  // const {status,setStatus}=internship;
  const history = useHistory()
  const [st,setSt]=useState(false)
  
  return(
      <tr  style={{backgroundColor: even ? '#F4F5F8' : '#FFFFFF', border: '1px solid #E5E5E5'}}>
          <td  className="jobsPosted__row">
              <Checkbox/>
          </td>
          <td className="jobsPosted__row applicationsUser p20 mv200 cursor__pointer" onClick={()=>history.push('/company')}>
              <img src={company.compImage} className="applicantUser__image" alt="user_image" />
              <h3 className="jobsPostedtable_cell m20">
                  {company.compName}
              </h3>
          </td>
          <td  className="jobsPosted__row">
              <h3 className="jobsPostedtable_cell m20 mv150">
                  {st===true?"active":"deactive"}
              </h3>
          </td>
          <td  className="jobsPosted__row">
              <h3 className="jobsPostedtable_cell m20 mv150">
                  {company.primaryContact}
              </h3>
          </td>
          <td  className="jobsPosted__row">
              <h3 className="jobsPostedtable_cell m20">
                  {company.registeredOn}
              </h3>
          </td>
          <td  className="jobsPosted__row">
              <h3 className="jobsPostedtable_cell m20">
                  {company.activeInternshipsCount}
              </h3>
          </td>
            {
              <>
                  <td className="jobsPosted__row" onClick={() =>{setSt(true)} }>
                      <h3 className="jobsPostedtable_cell shortlist">
                          On Hold
                      </h3>
                  </td>
                  <td className="jobsPosted__row" onClick={() =>{setSt(false)} }>
                      <h3 className="jobsPostedtable_cell deactivate">
                          Delete
                      </h3>
                  </td>
                  <td className="jobsPosted__row" onClick={() =>{setSt(false)} }>
                      <h3 className="jobsPostedtable_cell spam_black ">
                          Spam
                      </h3>
                  </td>
              </>
            }
      </tr>
  );
}

const CompaniesTable = ()=>{
  const tags=[{name:"all",color:'black'},{name: "active", color: 'rgba(45,132,90,1)'}, {name: "inactive", color: 'rgba(211,46,46,1)'}, {name: 'expiring soon', color: 'orange'}]
  const [action, setAction] = useState('all');
  const [search,setSearch]=useState('');

  const CompanyColumnOrder = ['Company','Status','Primary Contact','Registered On','No of Active Internships'];
  

  return (
      <div className="dashboard__jobsPosted">
          <div className="dashboard__jobsPostedHeader flex-column align-items-stretch">
              <div className="dashboard__jobsTags justify-content-between mb-2">
                  <p className="dashboard__jobsPostedheading">
                      Companies ({CompaniesData.length})
                  </p>
                  <div
                    className="searchbar__landing2"
                    style={{
                      maxWidth: "100%",
                      width: "30%",
                      backgroundColor: "#fff",
                    }}
                  >
                    <SearchIcon />
                    <input
                      type="text"
                      class="form-control focus-input"
                      placeholder="Type company name to search"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  
              </div>
              <div className="dashboard__jobstags">
                      {tags.map(tag => (
                          <div className="dashboard__jobsPostedTag" onClick={() => setAction(tag.name) } style={{color: tag.color}}>
                              {tag.name}
                          </div>
                      ))}
                  </div>

          </div>
          <div className="dashboard__jobsPostedTaable">
              <div className="table__responsive">
                  <table className="JobsPosted__table">
                      <thead>
                          <tr>
                              <th className="jobsPosted__tableHead jobsPosted__row" style={{textAlign: 'center'}} >
                                <Checkbox />
                              </th>
                              {CompanyColumnOrder.map(head => (
                                  <th className="jobsPosted__tableHead jobsPosted__row" onClick={()=>{/*sortHandler(head,internships,setInternships)*/}}>{head}&nbsp;
                                  {/* {sortHandler.column===head?(sortHandler.isAscending?<BiCaretUp />:<BiCaretDown />):''} */}
                                  </th>
                              ))}
                              <th className="jobsPosted__tableHead jobsPosted__row" style={{textAlign: 'center'}} colSpan={3}>Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                          {CompaniesData.map((company,_id) => (
                              
                                (company.compName.toLowerCase().includes(search.toLowerCase())&&(action==='all'||action===company.status))?
                                <CompanyTableRow company={company} action={action} even={_id%2?false:true} />
                                :null
                              )
                          )}
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  );
  
}


const DashboardNav = ({ name, Icon, number, setTab }) => {
  const [hover, sethover] = useState(false);
  return (
    <div
      className="dashboard__sliderItem"
      onClick={() => setTab(name)}
      style={{ cursor: "pointer" }}
      onMouseLeave={() => sethover(false)}
      onMouseEnter={() => sethover(true)}
    >
      <Icon
        className="dashboard_navIcon"
        style={{ fontSize: 18, color: hover ? "#ec1f28" : "#d2dcd6" }}
      />
      <p className="dashboard__sliderName">{name}</p>
      {number ? <div className="dashboard__sliderNum">{number}</div> : null}
    </div>
  );
};

function AdminDashboardMain() {
  const [listCompanies, setList] = useState();
  const [tab, setTab] = useState("Dashboard");

  useEffect(() => {
    AdminService.getCompanyList()
      .then(res => setList(res.data.results))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Header />
      <div className="dashboard__container">
        <div className="dashboard___slider">
          <div className="dashboard__sidebarButtonArea">
            <button className="category__label dashboard__sidebarButton">
              + Add New
            </button>
          </div>
          <div className="dashboard__sliderNavs">
            {navCollection.map((nav) => (
              <DashboardNav
                name={nav.name}
                Icon={nav.icon}
                number={nav.number}
                setTab={setTab}
              />
            ))}
          </div>
        </div>
        <div className="dashboard__slider">
          <img className="dashboard__sliderlogo" src={logo} alt="skilzen_log" />
          <div className="dashboard__sliderNavs mt-5">
            {navCollection.map((nav) => (
              <DashboardNav
                name={nav.name}
                Icon={nav.icon}
                number={nav.number}
                setTab={setTab}
              />
            ))}
          </div>
        </div>
        {tab === "Companies" ? (
          <div className="dashboard__content">
            <CompaniesTable data={listCompanies} />
          </div>
        ) : tab === "Internships" ? (
          <div className="dashboard__content">
            <Internships />
          </div>
        ) : tab === "Spam" ? (
          <div className="dashboard__content">
            <Spam />
          </div>
        ) : tab === "KYC" ? (
          <div className="dashboard__content">
            <KYC />
          </div>
        ) : (
          <div
            className="dashboard__content"
            style={{ boxShadow: "none", border: "none" }}
          >
              <div className="dashboard__ContentCards">
                {CardCollection.map((card) => (
                  <DashboardCard
                    decimal={card.decimal}
                    name={card.name}
                    color={card.color}
                    darkcolor={card.darkcolor}
                    Icon={card.icon}
                    number={card.number}
                    content={card.content}
                  />
                ))}
              </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboardMain;
