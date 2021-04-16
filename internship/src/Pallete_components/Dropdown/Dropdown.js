/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from "react";
import "./Dropdown.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useDetectOutsideClick } from "./useDetectOutsideClick";

import { makeStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';

import clsx from 'clsx';
import {TiArrowUnsorted} from 'react-icons/ti';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



export const Dropdown = (props) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="menu-container">
      <button className="menu-trigger" onClick={onClick}>
        <span>{props.children}</span>
        <div >
          <ArrowDropDownIcon />
        </div>
      </button>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li>
            <a
              aria-label={props.children1}
              onClick={(e) => console.log(e.target.ariaLabel)}
            >
              {props.children1}
            </a>
          </li>
          <li>
            <a
              aria-label={props.children2}
              onClick={(e) => console.log(e.target.ariaLabel)}
            >
              {props.children2}
            </a>
          </li>
          <li>
            {props.children3 && (
              <a
                aria-label={props.children3}
                onClick={(e) => console.log(e.target.ariaLabel)}
              >
                {props.children3}
              </a>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};



export const Updated_DropDown = ({options, placeHolder,onUpdate})=>{
  const classes = useStyles();
  const [dropdownValue, setDropDownValue] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const [index_,setId] = React.useState(0);

  return(
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-controlled-open-select-label">{placeHolder}</InputLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={dropdownValue}
        onChange={(e)=>{setDropDownValue(e.target.value)}}
      >
        {
          options.map((item,id)=>(
            <MenuItem value={item} onClick={()=>{onUpdate&&onUpdate(id)}}  key={id} >{item} </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
}


export const Basic_dropdown = ({placeHolder,options})=>{
  const classes = useStyles();
  const [dropdownValue, setDropDownValue] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return(
    <FormControl className={clsx(classes.formControl, classes.noLabel)}>
      <MenuItem >{placeHolder}</MenuItem>
    <Select
      // displayEmpty
      value={dropdownValue}
      onChange={(e)=>{setDropDownValue(e.target.value)}}
      input={<Input />}
    >
      <MenuItem disabled style={{display:'none'}} value="">
        {placeHolder}
      </MenuItem> 
      {options.map((name) => (
        <MenuItem  key={name} value={name}>
          {name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
  )
}



export const ThemeDropdown =({placeHolder,options,Icon,setOptionCB})=>{
  const dropdownRef = useRef(null);
  const [drpdwnState,setdrpdwnState]=useDetectOutsideClick(dropdownRef, false);
  const [value,setValue]=useState("");
  const [id,setId] =useState(0);

  if(placeHolder===undefined)placeHolder='Placeholder...';
  if(Icon===undefined)Icon = TiArrowUnsorted
  
  let tempOptions=options.map((option,id)=>{
    return {text:option,id};
  });
  const [filterOptions,setFilterOptions]=useState(tempOptions);
  
  let inputChangeHandler=(e)=>{
    setValue(e.target.value);
    let newFilterOptions=tempOptions.filter((option)=>{
      let text=option.text;
      return text.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setFilterOptions(newFilterOptions);
  }

  const setOption=(id)=>{
    setId(id);
    setValue(options[id]);
    setdrpdwnState(false);
    setOptionCB&&setOptionCB(id);
  }

  return(
    <div className='dropDown-container' >
      <div className='dropdownWrapper' ref={dropdownRef} onFocus={()=>setdrpdwnState(true)}>
        <div className="dropdown__input">
          <input type="text" className="dropdown__inputText" placeholder={placeHolder} onChange={inputChangeHandler} value={value} />
          <div className='dropdown__input-icon'><Icon/></div>
        </div>
        <div style={{textAlign:'left'}} className={`dropdown__list-container ${!drpdwnState?"display-hidden":''}`} >
          <ul className="dropdown__list">
            {
              filterOptions.map((option)=>{
                return <li key={option.id} className={`${id===option.id?'activeItem':''}`} onClick={(e)=>setOption(option.id)} >{option.text}</li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}



