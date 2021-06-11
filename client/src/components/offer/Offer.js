import React,{useState,useEffect}from "react";
import Vector from "./Vector.png";
import banana from "./banana.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.css";
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom';
import authAction from '../../redux/auth/action';
import "./Offer.css";
import axios from 'axios'
const {yourId}=authAction;
const Offer = () => {

  const dispatch = useDispatch();
  const ids = useSelector(state => state.id);

  // for carting the product
   const onYourClick = (id) =>{
         console.log(id)
         //backend call for sending data to the cart
          const data={
            id,
          };
          const header={
            'content-type':'application/json'
          }
          axios.post('http://localhost:5008/cartproduct',data,{header})
          .then(response=>{
            console.log(response)
          })
          .catch(error=>console.log(error));
         // again one backend call for receving data from the backend
   }

  //ending in the for carting the product
  const history = useHistory()
  const onClickHandler = (id) =>{
    console.log("hey",id)
    history.push('/Description');
    dispatch(yourId(id))
    console.log("THIS IS YOUE ISD",ids)
       
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5008/allproduct')
    .then(response=>{
      setData(response.data);
    })
    .catch(error=>{
      console.log(error)
    })
  }, [])
  console.log("here is your data",data)
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        
        {
          data.map((data)=>{
            return(
              <SwiperSlide>
        <div key={data.id} className="this__offer">
        <div className="imge">
          <img src={banana} alt="" onClick={()=>{onClickHandler(data._id)}}/>
          <div className="heeading">
            <p>organic Bananas</p>
            <p>7pcs,Priceg</p>
          </div>
        </div>
        <div className="price__add">
          <p>$4.15</p>
          <button>
            <img src={Vector} onClick={()=>{onYourClick(data._id)}}  alt="" />
          </button>
        </div>
      </div>
      </SwiperSlide>
            )
          })
        }
        
      </Swiper>

    
    </>
  );
};

export default Offer;
