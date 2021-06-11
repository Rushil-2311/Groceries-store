import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import axios from 'axios'
import {Link,useHistory} from 'react-router-dom';
import Group from "./Group.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Login = () => {

  const history = useHistory()
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const onclickHandler = () =>{
      // history.push('/Home')
      const data={
        email:inputEmail,
        password:inputPassword
      };
      const header={
         'content-type':'application/json'
      }
      axios.post('http://localhost:5008/signin',data,{header})
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
    <div className="login__container">
      <div className="logo__conatiner">
        <img src={Group} alt="" />
      </div>
      <div className="loign__heading">
        <h1>Loging</h1>
        <p>Enter your emails and password</p>
      </div>
      <div className="form__container">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setInputEmail(e.target.value)}}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>{setInputPassword(e.target.value)}}/>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={onclickHandler}>
            Log in
          </Button>
        </Form>
      </div>
      <div className="last__step">
       <h6>Don't have an account? <Link to="/Signup">Sign up</Link>
</h6>
       
      </div>
    </div>
  );
};

export default Login;
