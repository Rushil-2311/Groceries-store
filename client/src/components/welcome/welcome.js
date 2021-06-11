import React from 'react'
import './welcome.css'
import  logo from './logo.png';
import {useHistory} from 'react-router-dom'


const Welcome = () => {
const history = useHistory()

    const onclickHandler = () =>{
        history.push('/onbording')
    }
    return (
        <div className="navigation__container">
        <div className="welcome__container">
        <div className="image__container">
           <img src={logo} alt="logo" />
           <h3>Gilroy-Medium</h3>
        </div>
        <button onClick={onclickHandler}>explore store</button>
        </div>
        </div>
    )
}

export default Welcome;
