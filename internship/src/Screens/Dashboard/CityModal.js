/* eslint-disable jsx-a11y/anchor-is-valid */
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import React, {useState, useRef, useContext} from 'react';
import { Modal, Form } from 'react-bootstrap';
import AdminService from '../../AdminServices/AdminService';

export default function CityModal() {
  const [modalShow, setModalShow] = useState(false);
  

  function MyVerticallyCenteredModal(props) {
    let city = '';
    const [value, setValue] = React.useState(false);

    const handleChange = (event) => {
      // console.log(event.target.value,typeof event.target.value);
      setValue(event.target.value);
    };

    const AddCity = () => {
      const City = {
          "location": city,
          "is_head_office": value
      }

      AdminService.createCompanyLocationDetails(City)
        .then(res => {
          if(res.statusText === "Created"){setModalShow(false)}
        })
        .catch(err => console.log(err))
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="flexColumn">
          <div className="flexRow mb-40">
            <h2 className="modal-head modal-head-center">Add Branch Location</h2>
          </div>
          <Form>
            <Form.Group controlId="formBasicEmail" className="flexRow  flexAlignCenter mb-20" style={{width: '90%', gap: 40}}>
              <Form.Label style={{width: '40%'}}>Add Branch City!</Form.Label>
              <input type="text" class="form-control" style={{width: '60%'}} placeholder="Eg: Mumbai, Jaipur, Pune" onChange={(e) => city = e.target.value}  />
            </Form.Group>
            <Form.Group controlId="formBasicYess" className="flexRow flexAlignCenter mb-20" style={{width: '90%', gap: 40}}>
              <Form.Label style={{width: '40%'}}>Is this your head location?</Form.Label>
              <RadioGroup aria-label="head-office" name="head-office" className="flexRow" value={value} onChange={handleChange}>
                <FormControlLabel value={"true"} control={<Radio />} label="Yes"  />
                <FormControlLabel value={"false"} control={<Radio />} label="No" />
              </RadioGroup>              
            </Form.Group>
          </Form>

          <div className="flexRow flexAlignCenter flexCenter mt-40">
            <button onClick={() => {
                AddCity()
            }} className="category__label dashboard__sidebarButton"  style={{width: '30%'}}>+ Add City</button>
          </div>
  
        </div>
      </Modal>
    );
  }

  return (
    <>
      <button onClick={() => setModalShow(true)} className="category__label dashboard__sidebarButton">+ Add City</button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
