// to use-
// 1.import { Typo } from "./Components/Typo/Typo";
// 2. <Typo typoStyle="pretitle"(any of the STYLES)>your content</Typo>

import React from 'react';
import './Typo.css';

const STYLES = [
    "title-h1",
    "title-h2",
    "title-h3",
    "subtitle",
    "body",
    "medium-body",
    "small-text",
    "pretitle",
    "toasts"
];

export const Typo = ({ children, typoStyle}) => {

    const checktypoStyle = STYLES.includes(typoStyle) ? typoStyle : STYLES[0];

    return(
        <span className={`typo ${checktypoStyle}`}>
            {children}
        </span>
    )
}