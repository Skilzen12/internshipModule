import {
    FaBriefcase,
    FaRocket,
    FaTelegramPlane,
    FaUserAlt,
  } from "react-icons/fa";
  import { AiFillCustomerService } from "react-icons/ai";
  import { GiStack } from "react-icons/gi";
  import { FiPenTool, FiSidebar } from "react-icons/fi";
  import imgF1 from "../../images/Landing2/brand-light-logo-1.png";

export const Categories = [{ Icon : FaBriefcase, name: 'Buisness Development', vacancy: 415, backgroundColor: '#ec1f28' },
  { Icon : AiFillCustomerService, name: 'Customer Service', vacancy: 215, backgroundColor: 'rgb(247, 127, 0)' },
  { Icon : GiStack, name: 'Development', vacancy: 1435, backgroundColor: 'rgb(252, 163, 17)' },
  { Icon : FiPenTool, name: 'Marketing and Management', vacancy: 115, backgroundColor: 'rgb(255, 0, 110)' },
  { Icon : FaRocket, name: 'Sales & Communication', vacancy: 290, backgroundColor: 'rgb(1, 22, 39)' },
  { Icon : FaTelegramPlane, name: 'Project Management', vacancy: 120, backgroundColor: 'rgb(188, 184, 177)' },
  { Icon : FiSidebar, name: 'Human Resource', vacancy: 933, backgroundColor: 'rgb(67, 97, 238)' },
  { Icon : FaUserAlt, name: 'Design', vacancy: 608, backgroundColor: 'rgb(46, 196, 182)' }];

export const FeaturedJobs = [{ logo : imgF1, JD: 'UI/UX Designer', package: '130-170K PLN', tags: ['Virtual Design', 'Wireframing', 'Scrum'], location: 'Berlyn, UK', time: 'Full-Time', posted: '9d ago' },
  { logo : imgF1, JD: 'Frontend Engineer', package: '200-250K PLN', tags: ['JS Framework', 'State Management', 'SLDC'], location: 'Paris, France', time: 'Full-Time', posted: '6d ago' },
  { logo : imgF1, JD: 'Backend Developer', package: '100-120K PLN', tags: ['REST API', 'GraphQL', 'SLDC'], location: 'Cape Town, US', time: 'Intern', posted: '4d ago' },
  { logo : imgF1, JD: 'DevOps Engineer', package: '90-100K PLN', tags: ['Jira', 'Docker', 'Kuberneetes'], location: 'Chile, USA', time: 'Part-Time', posted: '3d ago' },]
