import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import {Link,useHistory} from 'react-router-dom';
import location from './location.png'
import Button from "react-bootstrap/Button";
import black from './black.png'
import axios from 'axios'
import './Location.css'
const Location = () => {
    const [zone, setZone] = useState("")
    const [area, setArea] = useState("")
    console.log(zone)
    const history = useHistory()
     const imageOnclickHandler = () =>{
         history.push('/Signup')
     }
    const onclickHandler = () =>{
        const data={
         zone,
         area,
      };
      const header={
         'content-type':'application/json'
      }
      axios.post('http://localhost:5008/location',data,{header})
       .then(response=>{
         alert("you logged succesfully")
         history.push('/Home')
       })
       .catch(error=>{
         console.log(error)
         alert(error)
       });
    }
  return (
    <div className="location__container">
    <div className="logoss">
        <img src={black} alt="" onClick={imageOnclickHandler}/>
    </div>
      <div className="photo__container">
      <div className="image__containerr">
        <img src={location} alt="" />
      </div>
        <div className="heading">
          <h1>Select your location</h1>
          <p>
            Swithch on your location to stay in tune with what’s happening in
            your area
          </p>
        </div>
      </div>
      <div className="form__container">
   
        <Form.Group controlId="formBasicEmail">
              <Form.Label>Your Zone</Form.Label>
              <Form.Control type="Username" placeholder="India" onChange={e=>setZone(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Your Area</Form.Label>
              <Form.Control type="Username" placeholder="Ahmedabad" onChange={e=>setArea(e.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={onclickHandler}>
            Submit
            </Button>
      </div>
    </div>
  );
};

export default Location;
