import React, { useState } from "react";
import "./Menue.css";

export const Menue = (props) => {
  return (
    <>
      <div className="incont">
        <p className="para">{props.product.name}</p>
        <div className="btn-group" role="group" aria-label="Basic example grp">
          <button
            type="button"
            className="btn  bot btn-danger"
            onClick={() => props.decreament(props.index)}
          >
            -
          </button>
          <button type="button" className="btn  bot btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn  bot btn-success"
            onClick={() => props.increament(props.index)}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};
