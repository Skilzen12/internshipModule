import React from 'react';
import './Toasts.css';
import {Typo} from '../Typo/Typo';
import HelpIcon from '@material-ui/icons/Help';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import ErrorIcon from '@material-ui/icons/Error';

const STYLES = [
    "toasts-needhelp",
    "toasts-success",
    "toasts-error",
    "toasts-warning",
];

const ICON = [
    HelpIcon,
    CheckCircleIcon,
    CancelIcon,
    ErrorIcon
];

export const Toasts = ({ children, onClick, toastStyle,heading,toastIcon}) => {

    const checkToastStyle = STYLES.includes(toastStyle) ? toastStyle : STYLES[0];
    // const CheckToastIcon = ICON.includes(toastIcon) ? toastIcon : ICON[0];

    var CheckToastIcon;
   
    ICON.map(element => {
        let toastIcon1 = element;
        let toastIcon2 = toastIcon;
        if(toastIcon1==toastIcon2)
        {
            console.log(toastIcon2);
            return CheckToastIcon = toastIcon2;
        }else{
            console.log();
            return CheckToastIcon = ICON[0];
        }
    });
    return(

        <div className={`toastbox ${checkToastStyle}`} onClick={onClick}>
            <div className="sign">
                <CheckToastIcon/>
            </div>
            <div className="details">
            <Typo typoStyle="body">{heading}</Typo>
            <Typo typoStyle="toasts">{children}</Typo>
            </div>
            
        </div>
    )
}