import {React,useState} from 'react';
import {Team_members_data} from '../../utility/DummyData/CompanyProfile';
import '../../Screens/CompanyProfile/Company_profile.css';
import { IoIosAdd } from "react-icons/io";

const Team = (props)=>{
    const [memberDetail,setMemberDetail]= useState(false);
    return(
        <>
            <div className="team_members">
                {
                    props.membersData.map((data=>{
                          return(<button className="for_pr_img_name" href="#">
                          <img src={data.img} className="for_pr_img"></img>
                          <p  className="for_pr_name">{data.name}</p>
                          </button>)
                    }))
                }
                <div className="for_pr_img_name">
                    <div className="for_add_pr">
                        <button className="for_add_icon" onClick={()=>(props.setPop(true))}>
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