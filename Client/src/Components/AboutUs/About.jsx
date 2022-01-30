import React from "react";
import "./About.css";
import logo1 from "../Images/p1.jpg";
import logo2 from "../Images/p2.jpg";
import logo3 from "../Images/p3.png";

export const About = () => {
  return (
    <>
      <div className="main">
        <div className="outer">
          <div className="first">
            <h1>About Us:</h1>
            For the first time in Mumbai, FoodieSoul has brought the Open
            Kitchen restaurant and Fresh Beans Coffee varieties concept where
            you can enjoy a variety of dishes each prepared by the expert chef
            to give you the best dining experience. We provide you with a wide
            variety of dishes to choose from, each created with the perfection
            which you can enjoy with your family and friends in a peaceful
            environment.
          </div>
        </div>
        <div className="features">
          <div className="feature1">
            <img srcSet={logo1} alt="feature image" className="p1" />
            <p className="blockhead">Tasty food with reasonable cost</p>
            <p className="blockcontent">
              Our restaurant has tasty food 
              prepared by professional chefs with affordable price.
            </p>
          </div>

          <div className="feature1">
            <img src={logo2} alt="feature image" className="p1" />
            <p className="blockhead">Variety of dishes</p>
            <p className="blockcontent">
              We offfer wide varirty of dishes including indian, italian,
              chinese, continental etc.
            </p>
          </div>

          <div className="feature1">
            <img src={logo3} alt="feature image" className="p1" />
            <p className="blockhead">Convenient Location and Home delivery</p>
            <p className="blockcontent">
              Location is easily reachable and home delivery is also provided .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
