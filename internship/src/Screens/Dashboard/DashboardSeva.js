import React from 'react';
import CountUp from "react-countup";
import {AiFillProfile} from 'react-icons/ai';
import {BsFillBagFill} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'

const DashboardCard = ({name, color, darkcolor, Icon, number, content, decimal}) => {
    return(
        <div className="dashboard__card">
            <div className="dashboard__logo" style={{backgroundColor: color}}>
                <Icon style={{color: darkcolor, fontSize: 20}} />
            </div>
            <div className="dashboard__Cardcontent">
            {decimal ? (
                <div className="dashboard__cardNum"><CountUp duration={4} decimal="." decimals={1} end={number} />{content}</div>
            ) : (
                <div className="dashboard__cardNum"><CountUp duration={4} end={number} />{content}</div>
            )}
                <div className="dashboard__cardTitle">{name}</div>
            </div>
        </div>
    );
}


const DashboardSeva = ({localCards}) => {
    const CardCollection = [
        {name: "Posted Internships", color: 'rgba(71, 67, 219, 0.1)', decimal : false, darkcolor: 'rgb(71, 67, 219)', number: (localCards?.active_internships||0), icon : BsFillBagFill},
        {name: "Total Applicants", color: 'rgba(252, 73, 128, 0.1)', decimal : false, darkcolor: 'rgb(252, 73, 128)', icon : FaUserAlt, number : (localCards?.active_applicants||0)}, 
        {name: "Jobs View", color: 'rgba(250, 95, 28, 0.1)', decimal : false, darkcolor: 'rgb(250, 95, 28)', number: (localCards?.active_internship_views||0), icon : AiFillProfile},
        // {name: "Applied Rate", color: 'rgba(2, 191, 213, 0.1)', decimal : true, darkcolor: 'rgb(2, 191, 213)', number: 18.5, content: '%', icon : RiLayout4Fill}, 
    ];

    return(
        <>
        {localCards&&CardCollection.map(card => (
            <DashboardCard decimal={card.decimal} name={card.name} color={card.color} darkcolor={card.darkcolor} Icon={card.icon} number={card.number} content={card.content} />
        ))}
        </>
    );
}

export default DashboardSeva;