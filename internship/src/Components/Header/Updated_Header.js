/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import {IconButton,Badge} from '@material-ui/core';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';

function Updated_Header() {
    return (
        <nav className="navbar navbar-expand-xl navbar-light bg-light header">
            <img className="header__logo" src={logo} alt="skilzen logo"/>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
                <div className="navbar-nav">
                    <a href="#" className="nav-item nav-link active">Internships</a>
                </div>
                <div className="navbar-nav ml-auto">
                    <a href="/login" className="nav-item nav-link signIn">Sign In</a>
                    <div className="form-inline" style={{marginRight:'14px'}} >
                        <a href="/signUp" className="btn btn-sm btn-dark header__signup">Sign Up</a>
                    </div>
                    <div classname="icons_header">
                        <IconButton  aria-label="Show cart items">
                            <Badge badgeContent={2} color="primary">
                                <LocalMallOutlinedIcon style={{color:"#200E32"}}/>
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="Show cart items">
                            <Badge badgeContent={2} color="primary">
                                <FavoriteBorderOutlinedIcon style={{color:"#200E32"}}/>
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="Show cart items">
                            <Badge badgeContent={2} color="primary">
                                <NotificationsOutlinedIcon style={{color:"#200E32"}}/>
                            </Badge>
                        </IconButton>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Updated_Header
