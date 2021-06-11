import React from 'react'
import Ddetails from '../Ddetails/Ddetails';
import apple from '../home/Five/apple.png'
import './Description.css'
import {useHistory} from 'react-router-dom';
import backarrow from '../home/Five/backarrow.png'
import save from '../home/Five/save.png';

const Description = () => {
  const history = useHistory()

  const onclickHandler =() =>{
    history.push('/Home')
        
  }
    return (
        <>
      <div className="description__container">
      <div className="description__icon">
        <div className="special__flex">
            <img src={backarrow} onClick={onclickHandler} alt=""/>
            <img src={save} alt=""/>
        </div>
      </div>
      <div className="center">
           <img src={apple} alt=""/>
      </div>
      </div>
      <Ddetails/>
      </>
    )
}

export default Description;