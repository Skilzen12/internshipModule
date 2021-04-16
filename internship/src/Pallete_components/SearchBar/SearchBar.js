// to use-
// 1.import { SearchBar } from "./Components/SearchBar/SearchBar";
// 2. <SearchBar
// type="text"
// placeholder="Search for Colleges"
// SearchStyle="search-primary"(any of the STYLES)
// ></SearchBar>

import React from 'react';
import './SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';

const STYLES = [
    "search-primary",
    "search-secondary"
];



export const SearchBar = ({ children,type,placeholder,onChange, SearchStyle}) => {

    const checkSearchStyle = STYLES.includes(SearchStyle) ? SearchStyle : STYLES[0];

    return(
        <div className="search2">
            <SearchIcon className="search-icon"/>
        <input className={`search ${checkSearchStyle}`} placeholder={placeholder} type={type} onChange={onChange}>
        </input>
        </div>
    )
}