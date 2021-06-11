import React from 'react'
import onbording from './orbording1.png'
import './onbording.css'
import {useHistory} from 'react-router-dom'

const Onbording = () => {   
    const history = useHistory()

    const onclickHandler = () =>{
        history.push('/Login')
    }

    return (
        <div className="onbording__container">
            <img src={onbording} alt=""/>
            <div className="contaeirn">
                
            <button onClick={onclickHandler}>Get Started</button>
            </div>
        </div>
    )
}

export default Onbording
