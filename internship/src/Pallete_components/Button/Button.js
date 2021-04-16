// to use button component ex- 
// 1.import { Button } from "./Components/Button/Button";
// 2. <Button onCilck="" type="" buttonStyle="">Articles</Button>

import React from 'react';
import './Button.css';

const STYLES = [
    "btn--default--outline",
    "btn--hover--outline",
    "btn--active--solid",
    "btn--disabled--outline",
];

const SIZES = ["btn--medium","btn--large"];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : STYLES[1];

    return(
        <button className={`butn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}