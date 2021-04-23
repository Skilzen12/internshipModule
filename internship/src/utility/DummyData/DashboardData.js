
import {AiFillProfile} from 'react-icons/ai';
import {BsFillBagFill} from 'react-icons/bs'
import {RiLayout4Fill} from 'react-icons/ri'
import {FaUserAlt} from 'react-icons/fa'


import imgP1 from "../../images/table-one-profile-image-1.png";
import imgP2 from "../../images/table-one-profile-image-2.png";
import imgP3 from "../../images/table-one-profile-image-3.png";
import imgP4 from "../../images/table-one-profile-image-4.png";
import imgP5 from "../../images/table-one-profile-image-5.png";

export const navCollection = [
    {name: "Dashboard", icon : RiLayout4Fill}, 
    {name: "Posted Internships", icon : BsFillBagFill},
    {name: "Applicants", icon : FaUserAlt}, 
    {name: "Profile", icon : AiFillProfile},
];

export const applicants = [
  {
      color: true,
      name : 'Nicolas Bradley',
      image: imgP1,
      appliedAs: 'Senior Project Manager',
      appliedOn : '12 July, 2020',
  },{
      color: false,
      name : 'Elizabeth Gomez',
      image: imgP2,
      appliedAs: 'Senior Project Manager',
      appliedOn : '14 July, 2020',
  },{
      color: true,
      name : 'Joe Wade',
      image: imgP3,
      appliedAs: 'Head of Marketing',
      appliedOn : '14 July, 2020',
  },{
      color: false,
      name : 'Roger Hawkins',
      image: imgP4,
      appliedAs: 'UI Designer',
      appliedOn : '12 July, 2020',
  },{
      color: true,
      name : 'Marie Green',
      image: imgP5,
      appliedAs: 'Senior Project Manager',
      appliedOn : '21 July, 2020',
  },
]

export const defaultJobs = [
    "Product Designer",
    "Graphics Designer",
    "Frontend Developer",
    "Backend Developer",
    "Content Writer",
  ];

  export const CardCollection = [
    {name: "Posted Internships", color: 'rgba(71, 67, 219, 0.1)', decimal : false, darkcolor: 'rgb(71, 67, 219)', number: 5, icon : BsFillBagFill},
    {name: "Total Applicants", color: 'rgba(252, 73, 128, 0.1)', decimal : false, darkcolor: 'rgb(252, 73, 128)', icon : FaUserAlt, number : 256}, 
    {name: "Jobs View", color: 'rgba(250, 95, 28, 0.1)', decimal : true, darkcolor: 'rgb(250, 95, 28)', number: 16.5, content: 'K', icon : AiFillProfile},
    {name: "Applied Rate", color: 'rgba(2, 191, 213, 0.1)', decimal : true, darkcolor: 'rgb(2, 191, 213)', number: 18.5, content: '%', icon : RiLayout4Fill}, 
];

export const jobs = [
  {
      color: true,
      name : 'Senior Project Manager',
      type: 'Full-Time',
      city: 'New York',
      created : '12 July, 2020',
      applicants: 47
  },{
      color: false,
      name : 'UI Designer',
      type: 'Full-Time',
      city: 'Remote',
      created : '24 June, 2020',
      applicants: 145
  },{
      color: true,
      name : 'Head of Marketing',
      type: 'Full-Time',
      city: 'London',
      created : '15 June, 2020',
      applicants: 62
  },{
      color: false,
      name : 'Full-Stack Developer',
      type: 'Part-Time',
      city: 'California',
      created : '29 May, 2020',
      applicants: 184
  },
]