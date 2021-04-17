import React from 'react';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { HiOutlineArrowRight } from "react-icons/hi";
import { RiHeartFill } from "react-icons/ri";
import './Footer.css';

const footer =()=>{
    return(
        <> 

        
            <div className='footertop'>
            
                <div className='subscribe-text'>
                    
                Subscribe for the latest announcements regarding
                new arrivals in the shop. Also get exclusive discount coupons
                right in your mailbox! 
                </div>
                
                <div className='email_part'>
                    <InputGroup className="mb-3 searchEmail">
                        <FormControl
                        placeholder="enter your email address"
                        aria-label="enter your email address"
                        aria-describedby="basic-addon2"
                        style={{paddingLeft:'40px',height:'55px',background:'#EFEFEF',color:'#858585',fontFamily:'Franklin Gothic Medium'}}
                        />
                        <InputGroup.Append>
                            <Button style={{background:'#EFEFEF',border:'none'}} ><HiOutlineArrowRight style={{color:'#858585'}}></HiOutlineArrowRight></Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                
            </div>
            <div>
            <div className='sec-div'>
                    <div className='first-col terms-2'>
                        <a href='#' className=' for_hover'>About Us</a>
                        <a href='#' className='for_hover'>Careers</a>
                        <a href='#' className='for_hover'>Contact Us</a>
                    </div>
                    <div className='second-col'>
                        <p>Connect</p>
                        <a href='#' className='socialLinks for_hover'>Linkedin</a>
                        <a href='#' className='socialLinks for_hover'>Instagram</a>
                        <a href='#' className='socialLinks for_hover'>Youtube</a>
                    </div>

                </div>
                <hr className='horz-line'></hr>
                <div className='third-div'>
                    <div className='with-love' >
                        <p  className='terms'>With <RiHeartFill style={{color:'red'}}></RiHeartFill> from Skilzen</p>
                    </div>
                    <div className='conditions'>
                        <a href='#' className='terms for_hover'>Terms & Conditions</a>
                        <hr className='hr-line'></hr>
                        <a href='#' className='terms for_hover' style={{marginLeft: '12px',width: '43%'}}>Privacy Policy</a>
                    </div>
                </div>
            </div>
        
        </>
    );
}

export default footer;