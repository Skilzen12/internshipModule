import {
    FaBriefcase,
    FaRocket,
    FaTelegramPlane,
    FaUserAlt,
  } from "react-icons/fa";
  import { AiFillCustomerService } from "react-icons/ai";
  import { GiStack } from "react-icons/gi";
  import { FiPenTool, FiSidebar } from "react-icons/fi";

  export var CategoriesMap = new Map();
  CategoriesMap.set("Business Development", {Icon : FaBriefcase, backgroundColor: '#ec1f28'});
  CategoriesMap.set('Customer Service', {Icon : AiFillCustomerService, backgroundColor: 'rgb(247, 127, 0)'});
  CategoriesMap.set('Development', {Icon : GiStack, backgroundColor: 'rgb(252, 163, 17)'});
  CategoriesMap.set('Marketing and Management', {Icon : FiPenTool, backgroundColor: 'rgb(255, 0, 110)'});
  CategoriesMap.set('Sales & Communication', {Icon : FaRocket, backgroundColor: 'rgb(1, 22, 39)'});
  CategoriesMap.set('Project Management', {Icon : FaTelegramPlane, backgroundColor: 'rgb(188, 184, 177)'});
  CategoriesMap.set('Human Resource', {Icon : FiSidebar, backgroundColor: 'rgb(67, 97, 238)'});
  CategoriesMap.set('Design', {Icon : FaUserAlt, backgroundColor: 'rgb(46, 196, 182)'});

export var LogoMap = new Map();
  LogoMap.set("Google", {url : 'http://expresswriters.com/wp-content/uploads/2015/09/google-new-logo-450x450.jpg'});
  LogoMap.set('Skilzen', {url : 'https://photos.angel.co/startups/i/8180673-d65cb946bc62dc9d37245eb180e15f52-medium_jpg.jpg?buster=1612297857'});
  LogoMap.set('Urban Company', {url : 'https://storage.googleapis.com/incind/logosC2301575977155314png.png0bVowcB'});
  LogoMap.set('FreeCharge', {url : 'https://venturedreams.in/wp-content/uploads/2016/09/freecharge-logo-1280x720.png'});