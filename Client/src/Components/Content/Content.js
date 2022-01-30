import React from "react";
import { Link } from "react-router-dom";
import "./Content.css";

export const Content = () => {
  return (
    <>
      <div className="bgimage">
        <div className="bg">
          <div className="div1"><h1>Welcome to FoodieSoul</h1></div>
          <div className="div2">
            <h2>
            It’s not true that money can’t buy happiness. I mean, have you tried
            buying our dishes? It’s the same thing!
            <br />
            <button type="button" className="btn btn-outline-primary btncls">
              <Link to="/about">Explore</Link>
            </button>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
