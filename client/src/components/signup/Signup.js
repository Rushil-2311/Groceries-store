import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signup.css";
import axios from 'axios'
import {Link,useHistory} from 'react-router-dom';
import Group from "./Group.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Signup = () => {
    const history = useHistory()
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
     
     //featch request's from the backend...
    // const data={
    //   name:inputName,
    //   email:inputEmail,
    //   password:inputPassword
    // };
    // const header={
    //    'content-type':'application/json'
    // }
    // axios.post('http://localhost:5000/signup',data,{header})
    //  .then(response=>console.log(response))
    //  .catch(error=>console.log(error));


  const onclickHandler = () =>{
      const data={
        name:inputName,
        email:inputEmail,
        password:inputPassword
      };
      const header={
        'content-type':'application/json'
      }
      axios.post('http://localhost:5008/signup',data,{header})
      .then(response=>{
        alert("you logged succesfully")
        history.push('/Location')
      })
      .catch(error=>console.log(error));
  //   fetch("/signup",{
  //     method:"post",
  //     headers:{
  //         "Content-Type":"application/json"
  //     },
  //     body:JSON.stringify({
  //       name:inputName,
  //       email:inputEmail,
  //       password:inputPassword
  //     })
  // }).then(res=>res.json())
  // .then(data=>{
  //     if(data.err){
  //       console.log(data.err)
  //     }
  //     else{
  //         console.log(data.message);
  //         history.push('/Location')
  //     }
  //  }).catch(err=>{
  //      console.log(err)
  //  })
   

  }
    return (
        <div className="signup__container">
        <div className="logo__conatiner">
          <img src={Group} alt="" />
        </div>
        <div className="loign__heading">
          <h1>Signup</h1>
          <p>Enter your credentials to continue</p>
        </div>
        <div className="form__container">
          <Form>
          <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="Username" placeholder="Enter Username" onChange={(e)=>{setInputName(e.target.value)}} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setInputEmail(e.target.value)}}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
  
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e)=>{setInputPassword(e.target.value)}} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={onclickHandler}>
              Log in
            </Button>
          </Form>
        </div>
        <div className="term__condition">
            <p>By continuing you agree to our Terms of Service
and Privacy Policy.</p>
        </div>
        <div className="last__step1">
         <h6>Already have an account? <Link to="/Login">Login</Link>
  </h6>
         
        </div>
      </div>
    )
}

export default Signup