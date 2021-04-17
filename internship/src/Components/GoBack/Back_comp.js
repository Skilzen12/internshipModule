import React from 'react';
import { IoIosArrowBack} from "react-icons/io";
import './Back_comp.css';

const GoBack =()=>{
    return(
        <div className="backIcon_name">
        <div className="for_circle">
            
            <button className="for_back_icon" >
                <IoIosArrowBack className='for_icon'></IoIosArrowBack>
            </button>
        </div>
        
        <span className="text-uppercase font-size-3 font-weight-bold text-gray for_back_text">
            Back
        </span>
    </div>
    )
}

export default GoBack;

