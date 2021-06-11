import React from "react";
import Groceries from "../Grocerie/Groceries";
import Offer from "../offer/Offer";
import { Input} from 'antd';
import vector from './Five/Vector.png'
import cart from './Five/cart.png';
import like from './Five/like.png';
import search from './Five/search.png';
import home from './Five/home.png';
import Group from './Group.png'
import Exclude from './Exclude.png'
import { AudioOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'; 
import './home.css'
import {useHistory} from 'react-router-dom';

const { Search } = Input;
const Home = () => {
 
  const history = useHistory()
   
  //this is for antd
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  const clickHandler = () =>{
     history.push('/cart');
  }
   
  const clickableHandler = () =>{
    history.push('/Explore');
  }
  const onSearch = value => console.log(value);

  return (
    <div className="home__container">
      <div className="search__container">
        <div className="img__container">
          <img src={Group} alt="" />
        </div>
        <div className="location__container">
        <img src={Exclude} alt=""/>
        <h6>Dhaka,Banaras</h6>
        </div>
        <div className="search2__container">
        <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
        </div>
      </div>
      <div className="offer__container">
       <div className="same__class">

        <h1>Exclusive Offer</h1>
        <a href="#">see all</a>
       </div>
      </div>
      <div className="inside__offer">
        <Offer/>
      </div>


      <div className="offer__container">
      <div className="same__class">

        <h1>Best Selling</h1>
        <a href="#">see all</a>
      </div>
      </div>
      <div className="inside__offer">
        <Offer/>
      </div>

      <div className="offer__container">
      <div className="same__class">

        <h1>Groceries</h1>
        <a href="#">see all</a>
      </div>
      </div>
      <div className="inside__offer">
        <Groceries
        />
      </div>



      <div className="offer__container">
      </div>
      <div className="inside__offer">
        <Offer/>
      </div>

      <div className="footer__container">
       <div className="img__container">
         <img src={home} alt=""/>
         <p>Shop</p>
       </div>
       <div className="img__container">
         <img src={search} onClick={clickableHandler} alt=""/>
         <p>Explore</p>
       </div>
       <div className="img__container">
         <img src={cart} onClick={clickHandler} alt=""/>
         <p>Cart</p>
       </div>
       <div className="img__container">
         <img src={like} alt=""/>
         <p>Favourite</p>
       </div>
       <div className="img__container">
         <img src={vector} alt=""/>
         <p>Account</p>
       </div>
      </div>
    
    </div>
  );
};

export default Home;
