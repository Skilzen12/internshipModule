import React from 'react';
import {Team_members_data} from '../../utility/DummyData/CompanyProfile';
import '../../Screens/CompanyProfile/Company_profile.css';
import { IoIosAdd } from "react-icons/io";

const Team = ()=>{
    
    return(
        <>
            <div className="team_members">
                {
                    Team_members_data.tmd.map((data=>{
                          return(<a className="for_pr_img_name" href="#">
                          <img src={data.img} className="for_pr_img"></img>
                          <p  className="for_pr_name">{data.p_name}</p>
                          </a>)
                    }))
                }
                <div className="for_pr_img_name">
                    <div className="for_add_pr">
                        <button className="for_add_icon">
                            <IoIosAdd style={{color:'black'}}/>
                        </button>
                    </div>
                        <p  className="for_pr_name">Add</p>
                </div>
            </div>
        </>

    )
}

export default Team;