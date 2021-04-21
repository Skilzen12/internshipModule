/* eslint-disable react/jsx-pascal-case */
import React,{useState} from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {FiFilter} from 'react-icons/fi';
import Slider_charts from '../../Components/JobGridPage/SliderChart/Slider_charts';
import FilterScheme from '../../Components/JobGridPage/FilterScheme/FilterScheme';
import Grid_Cards from '../../Components/JobGridPage/GridCard/Grid_Cards';
import List_Cards from '../../Components/JobGridPage/ListCard/List_Cards';
import {Filters} from '../../utility/DummyData/JobGridData';
import {Link} from 'react-router-dom'
import Job_Grid_Search_comp from '../../Components/JobGridPage/Search/Job_Grid_Search_comp';
import Updated_Header from '../../Components/Header/Updated_Header';
import AdminService from '../../AdminServices/AdminService';

const useStyles = makeStyles({
    'btn-red':{
        backgroundColor:'#ec1f28',
        color:'#fff',
        borderRadius:'50%',
        height:40,
        width:40,
        minWidth:40,
        boxShadow:'0 0 5px 2px #ec1f2863',
        '&:hover':{
            backgroundColor:'#ec1f28',
            color:'#fff',
            borderRadius:'50%',
            height:40,
            width:40,
            minWidth:40,
            boxShadow:'0 0 5px 2px #ec1f2863',
        }
    },
});

const Job_Grid = () => {
  const [internships, setInternships] = useState([]);
  const MUIclasses = useStyles();

  window.onload = () => {
    getInternships();
  }

  const getInternships = async () => {
    AdminService.getInternshipsList()
    .then(res => {
      setInternships(res.data.results);
    })
    .catch(err => console.log(err));
  } 

  // side Drawer template
  const [drawerState, setDrawerState] = React.useState(false);
  const [grid, setgrid] = React.useState(true);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState(open);
  };

  const collegeSectionFilters = (
    <>
      <FilterScheme sr={Filters[0].sr} name={Filters[0].name} options={Filters[0].filters} activeBG={true} />
      <div className="mb-3"><Slider_charts /></div>
      {
          (Filters.filter(type=>type.sr!==1)).map(type=>(
            <FilterScheme sr={type.sr} name={type.name} options={type.filters} activeBG={true} />
          ))
      }
      
      <div className='clearAndApply'>
        <button className='category__label'>Clear All</button>
        <button className='category__label'>Apply</button>
      </div> 
     
    </>
  );
  return (
    <div style={{background:'#cdcdcd1f'}} >
      <div className="list__article__container grid_main_container" style={{padding:'20px 0px'}}>
        <Updated_Header />
        <div className="collegeSection-content intern_page_filter">
          <div className="collegeSection-filters-mobile">
            <React.Fragment>
              <div className="filters-btns">
                <Button
                  className={MUIclasses["btn-red"]}
                  onClick={toggleDrawer("left", true)}
                >
                  <FiFilter />
                </Button>
              </div>
              <SwipeableDrawer
                anchor="left"
                open={drawerState}
                onClose={toggleDrawer("left", false)}
                onOpen={toggleDrawer("left", true)}
              >
                <div className="collegeSection-filters">
                  {collegeSectionFilters}
                </div>
              </SwipeableDrawer>
            </React.Fragment>
          </div>
          <div className="collegeSection-filters">{collegeSectionFilters}</div>

          <div className="collegeSection-cards">
            <div className="search_grid mb-7"><Job_Grid_Search_comp /></div>
            <div className="d-flex align-items-center justify-content-between w-100 p-4">
              <h5 className="font-size-4 font-weight-normal text-default-color">
                <span className="heading-default-color">120</span>
                {" "}results for{" "}
                <span className="heading-default-color">UI Designer</span>
              </h5>
              <div className="d-flex align-items-center result-view-type">
                <Link
                  onClick={()=>{setgrid(!grid);}}
                  className="heading-default-color pl-3 font-size-6 hover-text-hitgray"
                >
                  <i className="fa fa-list-ul"></i>
                </Link>
                <Link
                  onClick={()=>{setgrid(!grid);}}
                  className="heading-default-color pl-3 font-size-6 hover-text-hitgray active"
                >
                  <i className="fa fa-th-large"></i>
                </Link>
              </div>
            </div>
            <div className="row justify-content-start main_row_grid_cards" style={{width: '100%'}}>
              {
                grid ?
                  (
                    internships.map(obj=> <Grid_Cards obj={obj} />)
                  ):
                  (
                    internships.map(obj=><List_Cards obj={obj} /> )
                  )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job_Grid
