import React from "react";
import logo from '../../../images/logo.png'
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetail from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import ListItemText from "@material-ui/core/ListItemText";

import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

export const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    firstName,
    lastName,
    email,
    city,
    country,
    college,
    degree,
    company,
    date,
    designation,
    description,
  } = formData;

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="internship__content__card my-5 p-5 signup__container">
        <img
          className="mb-5"
          src={logo}
          style={{ width: "50%" }}
          alt="skilzen logo"
        />
        <h3 className="text-center mb-4">Review</h3>
      <RenderAccordion
        summary="Personal"
        go={go}
        details={[
          { "First Name": firstName },
          { "Last Name": lastName },
          { Email: email },
          { City: city },
          { Country: country },
        ]}
      />
      <RenderAccordion
        summary="Education"
        go={go}
        details={[{ College: college }, { Degree: degree }]}
      />
      <RenderAccordion
        summary="Experience"
        go={go}
        details={[
          { company: company },
          { Date: date },
          { Designation: designation },
          { Description: description },
        ]}
      />
      <Button
        color="primary"
        variant="contained"
        style={{ marginTop: "1.5rem" }}
        onClick={() => go("submit")}
      >
        Submit
      </Button>
    
    </div>
    </div>
  );
};

export const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      {summary}
    </AccordionSummary>
    <AccordionDetail>
      <div>
        {details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return (
            <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
          );
        })}
        <IconButton
          color="primary"
          component="span"
          onClick={() => go(`${summary.toLowerCase()}`)}
        >
          <EditIcon />
        </IconButton>
      </div>
    </AccordionDetail>
  </Accordion>
  
);
