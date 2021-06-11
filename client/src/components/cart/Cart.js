import React, { useEffect,useState } from "react";
import "./Cart.css";
import cartin from "../home/Five/cartin.png";
import luse from "../home/Five/luse.png";
import minus from "../home/Five/minus.png";
import { CloseOutlined } from "@ant-design/icons";
import { Popover, Button } from "antd";
import axios from 'axios'

const Cart = () => {

   const [data, setData] = useState([]);


      //calling the api call to the backend
      useEffect(() => {
        axios.get('http://localhost:5008/allcartproduct')
        .then(response=>{
          setData(response.data)
        })
        .catch(error=>console.log(error))
      }, [])
      
     console.log(data)
     //ending the api call



   //this is a calling a api for removieng the item from cart
   const handleYourClick =(ids)=>{
     console.log(ids)
    // console.log(isdata)
     axios.delete(`http://localhost:5008/${ids}`)
     .then(response=>{
       console.log(response)
       setData(data.filter((arr)=>arr._id!==ids))
       console.log(data)
     })
     .catch(err=>{
       console.log("error",err)
     })
   }

  const content = (
    <div className="propover">
      <p>Remove item from the cart</p>
    </div>
  );
  return (
    <div>
    <div className="this__heading">
      <h2>My cart</h2>
    </div>
    {
      data.map((data,i)=>{
        return(
       <>
          <hr />
      <div key={i} className="cart__container">
        <div className="cart__image">
          <img src={cartin} alt="" />
        </div>
        <div className="cart__details">
          <div className="cartdetails__flex">
            <h6>{data.name}</h6>
            <p>{data.pice}</p>
          </div>
          <div className="counter__cart">
            <button>
              <img src={luse} alt="" />
            </button>
            <p>1</p>
            <button>
              <img src={minus} alt="" />
            </button>
          </div>
        </div>
        <div className="fro__delete">
          <Popover content={content} trigger="hover">
            <CloseOutlined style={{ fontSize: "20px" }} onClick={()=>{handleYourClick(data._id)}}/>
          </Popover>
          <p>{data.price}</p>
        </div>
      </div>
      <hr/>
     </>
        )
      })
    }

    </div>
  );
};

export default Cart;
