import React from "react";
import { Collapse } from "antd";
import "./Ddetails.css";
import { useSelector, useDispatch } from "react-redux";
import { Rate } from "antd";
import pluse from "../home/Five/luse.png";
import minus from "../home/Five/minus.png";
import authAction from "../../redux/auth/action";
import fevret from "../home/Five/fevret.png";
const { Panel } = Collapse;
const { add, remove } = authAction;

const Ddetails = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  console.log("counter",counter)

  function callback(key) {
    console.log(key);
  }
  const text = `
  Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.
`;
  return (
    <div>
      <div className="details__container">
        <div className="details__flex">
          <h6>Naturel Red Apple</h6>
          <img src={fevret} alt="" />
        </div>
        <div className="price__kg">
          <p>1kg,price</p>
        </div>
        <div className="adding__tocart">
          <div className="cart__plus">
            <img src={minus} alt="" onClick={()=>{dispatch(remove())}}/>
            <button>{counter}</button>
            <img src={pluse} alt="" onClick={()=>{dispatch(add())}}/>
          </div>
          <h6>$4.99</h6>
        </div>
      </div>
      <div className="collaps">
        <Collapse defaultActiveKey={["1"]} onChange={callback}>
          <Panel header="product details" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="Nutritions" key="2">
            <p>
              Apples Are Nutritious. ... Apples May Be Good for Weight Loss. ...
              Apples May Be Good for Your Heart. ... They're Linked to a Lower
              Risk of Diabetes. ... They May Have Prebiotic Effects and Promote
              Good Gut Bacteria. ...
            </p>
          </Panel>
          <Panel header="Review" key="3">
            <Rate />
          </Panel>
        </Collapse>
      </div>
      <button className="big__button" >Add To Basket</button>
    </div>
  );
};

export default Ddetails;
