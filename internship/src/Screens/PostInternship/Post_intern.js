import React,{useState} from 'react';
import './Post_intern.css';
import Logo from "../../images/Group.png"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {ThemeDropdown} from '../../Pallete_components/Dropdown/Dropdown';
import { GoChevronRight, GoChevronLeft } from "react-icons/go";





function Student_details() {
    const [section,setSection]=useState("post1");
    const [show_other,setShow_other]=useState(false);

    const [formData,setformData]=useState({
        title:"",
        internType:"",
        city:"",
        openings:"",
        duration:" ",
        period_type:" ",
        responsibilities:" ",
        stipend:" ",
        skills:" ",
        amount:" ",
        date:"",
        category:" ",
        otherCategory:" ",
        PPO:false
        
    })
    const [perk,setPerk]=useState({
        
            Certificate:false,
            Flexible_work_hours:false,
            Informal_dress_code:false,
            Letter_of_recommendation:false,
            five_days_a_week:false,
            Free_beverages:false,
       
    })
    // state is used to store  all individual cheack box values in this page
    const [state, setState] = useState({
        onlineInterview: false
      });
    
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    const changehandler =e=>{
        const  target = e.target
        const name = target.name
        const value = target.value
        {
            name==="PPO" ?
             setformData({
                ...formData,
                [name] : value === "Yes" ? true :false
            }) 
            : setformData({
                ...formData,
                [name] : value
            })
        }
        
    }
    const changehandlerperk =e=>{
        const  target = e.target
        const name = target.name
        const value = target.checked
        setPerk({
            ...perk,
            [name]:value
           
        })
        // var [name,checked]=e.target;
        // setformData({
        //     ...formData,
        //     perk
        // })
    }
    
    // const handleChange2 = (event) => {
    //     const  target = event.target
    //     const name = target.name
    //     const value=target.checked
    //     setChecked({
    //         ...Checked,
    //         [name]:value
    //     });
    //   };
    return (
        <>
        <div className="list__article__container">
            <div className="profile_heading">
            <p className="profile_head1">Post an internship</p>
            <div className="sub_text_flex">
                <p className="profile_sub">Need assistance? Please visit.</p> <a className="help_link">Help Center</a>
            </div>
            </div>
                {section==="post1" && (
            <section className="for_section_post">
                <div className="profile_heading"><p className="for_card_heading_post">Internship details</p></div>
                <div className='card_for_students_details'>
                    <div className="list__article__container">
                        <div className="logo_div_card">
                            <img src={Logo} className="logo_on_card"></img>
                        </div>
                        <div className="for_margin_in_card">
                            <div className="post_parts">
                                   <p className="for_heading_name">Title</p>
                                   <FormControl fullWidth  variant="outlined">
                                        <OutlinedInput
                                            id="outlined-adornment-amount"  
                                            onChange={changehandler}
                                            name="title"
                                            placeholder="e.g. Project management "
                                            error
                                        />
                                    </FormControl>
                            </div>
                            <div>
                                <p className="for_heading_name">Category types</p>
                                <FormControl component="fieldset">
                                    <RadioGroup aria-label="category" name="category"   onChange={changehandler}>
                                    <div className="profile_outter">
                                        <div className='profile_part1'>
                                            <FormControlLabel value="Business Development (Sales)" control={<Radio />} label="Business Development (Sales)"  />
                                            <FormControlLabel value="Graphic Design" control={<Radio />} label="Graphic Design" />
                                            <FormControlLabel value="Social Media Marketing" control={<Radio />} label="Social Media Marketing" />
                                            <FormControlLabel value="Operations" control={<Radio />} label="Operations"  />
                                            <FormControlLabel value="Digital Marketing" control={<Radio />} label="Digital Marketing" />
                                            <FormControlLabel value="Law/Lega" control={<Radio />} label="Law/Lega" />
                                            <FormControlLabel value="other" control={<Radio />} label="Other"  />

                                        </div>
                                        <div className='profile_part2'>                               
                                            <FormControlLabel value="Web Development" control={<Radio />} label="Web Development"    />
                                            <FormControlLabel value="Content Writing" control={<Radio />} label="Content Writing"   />
                                            <FormControlLabel value="Marketing" control={<Radio />} label="Marketing"   />
                                            <FormControlLabel value="Mobile App Development" control={<Radio />} label="Mobile App Development"   />
                                            <FormControlLabel value="Human Resources (HR)" control={<Radio />} label="Human Resources (HR)" />
                                            <FormControlLabel value="Campus Ambassador" control={<Radio />} label="Campus Ambassador"  /> 
                                        </div> 
                                    </div>  
                                    </RadioGroup>
                                </FormControl>
                                <div>  
                                    {
                                        formData.category==="other"?( <FormControl fullWidth  variant="outlined">
                                        <OutlinedInput
                                            id="outlined-adornment-amount"  
                                            onChange={changehandler}
                                            name="otherCategory"
                                            placeholder="Catrgory name"
                                            min="1"
                                            error
                                        />
                                        </FormControl>):null
                                    }
                                </div>
                            </div>
                            <div className="post_parts">
                                <p className="for_heading_name">City/Cities</p>
                                <FormControl fullWidth  variant="outlined">
                                    <OutlinedInput
                                        id="outlined-adornment-amount"  
                                        onChange={changehandler}
                                        name="city"
                                        placeholder="e.g. Mumbai"
                                        error
                                    />
                                </FormControl>
                            </div>
                            <div className="post_parts">
                                <p className="for_heading_name">Internship type</p>
                                <FormControl component="fieldset">
                                    {/* <FormLabel component="legend">Gender</FormLabel> */}
                                    <RadioGroup aria-label="internType" name="internType"  onChange={changehandler}>
                                        <div className="profile_outter">
                                            <div className='profile_part1'>
                                                <FormControlLabel value="Part-time" control={<Radio />} label="Part-time"  />
                                                <FormControlLabel value="Full-time" control={<Radio />} label="Full-time" />
                                                <FormControlLabel value="Contract" control={<Radio />} label="Contract"  />
                                                <FormControlLabel value="WFH" control={<Radio />} label="Work From Home"  />
                                            </div>
                                            <div className='profile_part2'> 
                                                <FormControlLabel value="Temporary" control={<Radio />} label="Temporary"  />
                                                <FormControlLabel value="Volunteer" control={<Radio />} label="Volunteer"  />
                                                <FormControlLabel value="Internship" control={<Radio />} label="Internship"  />
                                                <FormControlLabel value="Inoffice" control={<Radio />} label="Inoffice"  />

                                            </div>
                                        </div>    
                                    </RadioGroup>
                                </FormControl>
                                <div>
                                    <FormControl component="fieldset" >
                                        <FormGroup >
                                            <FormControlLabel
                                                control={<Checkbox  onChange={handleChange} name="onlineInterview" />}
                                                label="I am open to interviewing candidates online and allowing them to work from home."
                                            />
                                        </FormGroup>
                                    </FormControl>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="for_next_in_p1">
                    <button
                      className="apply_btn card_btn"
                      onClick={() => setSection("post2")}
                    >
                        Next{" "}
                        <GoChevronRight
                            style={{ marginBottom: "2px", fontSize: "17px" }}
                        />
                    </button>
                </div>
            </section>
                )}
                {section==="post2" && (
                <section className="for_section_post">
                    <div>
                        <div className="profile_heading"><p className="for_card_heading_post">Intership details</p></div>
                        <div className='card_for_students_details'>
                            <div className="list__article__container">
                                <div className="logo_div_card">
                                    <img src={Logo} className="logo_on_card"></img>
                                </div>
                                <div className="for_margin_in_card">
                                    <div className="post_parts">
                                        <p className="for_heading_name">Number of openings</p>
                                        <FormControl fullWidth  variant="outlined">
                                        <OutlinedInput
                                            id="outlined-adornment-amount"  
                                            onChange={changehandler}
                                            name="openings"
                                            placeholder="e.g. 4"
                                            type="number"
                                            min="1"
                                            error
                                        />
                                        </FormControl>
                                    </div>
                                    <div className="post_parts">
                                        <p className="for_heading_name">Internship start date</p>
                                        {/* <FormControl component="fieldset">
                                        <RadioGroup aria-label="internStart" name="internStart"  onChange={changehandler}>
                                            <FormControlLabel value="Immediately" control={<Radio />} label="Immediately (within next 30 days)"  />
                                            <FormControlLabel value="Later" control={<Radio />} label="Later" />
                                        </RadioGroup>
                                        </FormControl> */}
                                        {/* <div className="for_date">
                                            <input type="date" id="start" name="date"  value="2021-04"  onChange={changehandler}/>
                                        </div> */}
                                        <TextField label="Start Date" type="date" 
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="outlined"
                                            size="small"
                                            name="date"
                                            onChange={changehandler}
                                            error />
                                    </div>
                                    <div className="post_parts">
                                        <p className="for_heading_name">Internship duration</p>
                                        <p>Shorter the duration, more the applications</p>
                                        <div className='course_duration'>
                                            <div className='course_duration_num'>
                                                <ThemeDropdown  options={['1','2','3','4']} placeHolder={'Choose duration '} name="duration" onChange={changehandler}></ThemeDropdown>     
                                            </div>
                                            <div  className='course_duration_period'>
                                                <ThemeDropdown options={['weeks','months','years']} placeHolder={'Period type'} name="period_type" onChange={changehandler}></ThemeDropdown>     
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="post_parts">
                                        <div>
                                            <p className="for_heading_name">Stipend</p>
                                            <FormControl component="fieldset">
                                                <RadioGroup aria-label="stipend" name="stipend"  onChange={changehandler}>
                                                    <div className="stipendOptions">
                                                        <div className="profile_outter">
                                                            <div className='profile_part1'>
                                                                <FormControlLabel value="Fixed" control={<Radio />} label="Fixed" />
                                                                <FormControlLabel value="Negotiable" control={<Radio />} label="Negotiable" />
                                                            </div>
                                                            <div className='profile_part2'>
                                                                <FormControlLabel value="Performance based" control={<Radio />} label="Performance based" />
                                                                <FormControlLabel value="Unpaid" control={<Radio />} label="Unpaid" />
                                                            </div>
                                                        </div>    
                                                    </div> 
                                                </RadioGroup>
                                            </FormControl>
                                        </div>
                                        {
                                            formData.stipend==="Fixed"?( 
                                            <div>
                                                <p className="for_heading_name">Stipend provided by your Organization:</p>
                                                <FormControl fullWidth  variant="outlined">
                                                    <OutlinedInput
                                                        id="outlined-adornment-amount"  
                                                        onChange={changehandler}
                                                        name="amount"
                                                        placeholder="e.g. 1000"
                                                        type="number"
                                                        min="1"
                                                        error
                                                    />
                                                </FormControl>
                                            </div>):null
                                        }
                                       
                                    </div>
                                    <div className="post_parts">
                                        <p className="for_heading_name">Intern’s responsibilities</p>
                                        <p>Internship posts with detailed job description receive significantly more applications.</p>
                                        <a className="help_link">See tips and sample JD</a>
                                        <div>
                                            <textarea  className="textarea_response"  rows="8" cols="100"  onChange={changehandler} name="responsibilities">  Selected intern's day-to-day responsibilities include: </textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="for_next_in_p2">
                        <button className="card_btn" 
                        onClick={() => setSection("post1")}>
                            <GoChevronLeft
                                style={{ marginBottom: "2px", fontSize: "17px" }}
                            />{" "}
                                Back
                        </button>
                        <button
                            className="apply_btn card_btn"
                            onClick={() => setSection("post3")}
                            >
                                Next{" "}
                                <GoChevronRight
                                    style={{ marginBottom: "2px", fontSize: "17px" }}
                                />
                        </button>
                    </div>
                </section>
                )}
            {section==="post3" && (
            <section className="for_section_post">   
                <div>
                    <div className="profile_heading"><p className="for_card_heading_post">Intership details</p></div>
                    <div className='card_for_students_details'>
                        <div className="list__article__container">
                            <div className="logo_div_card">
                                <img src={Logo} className="logo_on_card"></img>
                            </div>
                            <div className="for_margin_in_card">
                                <div className="post_parts">
                                    <div className="perks">
                                        <p className="for_heading_name">Perks</p>
                                        <p className="for_heading_name">(optional)</p>
                                    </div>
                                    <div>
                                        <FormControl component="fieldset" >
                                            <FormGroup >
                                            <div className="profile_outter">
                                                <div className='profile_part1'>
                                                    <FormControlLabel control={<Checkbox  onChange={changehandlerperk} name="Certificate" value="Certificate"  />}label="Certificate"/>
                                                    <FormControlLabel control={<Checkbox  onChange={changehandlerperk} name="Flexible work hours" value="Flexible work hours"  />}label="Flexible work hours"/>
                                                    <FormControlLabel control={<Checkbox  onChange={changehandlerperk} name="Informal dress code" value="Informal dress code"  />}label="Informal dress code"/>
                                                </div>
                                                <div className='profile_part2'>
                                                    <FormControlLabel control={<Checkbox  onChange={changehandlerperk} name="Letter of recommendation" value="Letter of recommendation"  />}label="Letter of recommendation"/>
                                                    <FormControlLabel control={<Checkbox  onChange={changehandlerperk} name="5 days a week" value="5 days a week"  />}label="5 days a week"/>
                                                    <FormControlLabel control={<Checkbox  onChange={changehandlerperk} name="Free snacks & beverages" value="Free snacks & beverages"  />}label="Free snacks & beverages"/>
                                                </div>
                                            </div>   
                                            </FormGroup>
                                        </FormControl>
                                    </div>
                                </div>
                                <div>
                                            <div className="perks">
                                                <p className="for_heading_name">Skills required</p>
                                                <p className="for_heading_name">(Optional)</p>
                                            </div>
                                        <div >
                                            <FormControl fullWidth  variant="outlined">
                                                <OutlinedInput
                                                    id="outlined-adornment-amount"  
                                                    onChange={changehandler}
                                                    name="skills"
                                                    placeholder="e.g. Java"
                                                    error
                                                />
                                            </FormControl>
                                        </div>
                                </div>
                                <div className="post_parts">
                                    <p className="for_heading_name">Does this internship come with a pre-placement offer (PPO)? (Optional)</p>
                                    <FormControl component="fieldset">
                                        <RadioGroup aria-label="PPO" name="PPO"  onChange={changehandler}>
                                            <div className="stipendOptions">
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                            </div> 
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </div> 
                        </div>
                    </div>  
                </div>
                <div className="for_next_in_p3">        
                    <button className="card_btn" 
                    onClick={() => setSection("post2")}>
                        <GoChevronLeft
                            style={{ marginBottom: "2px", fontSize: "17px" }}
                        />{" "}
                            Back
                    </button>
                </div>
            </section>
            )}        
        </div>
    </>    
    )
}

export default Student_details;
