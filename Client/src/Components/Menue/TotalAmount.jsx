import React from 'react';
import './Menue.css';


export const TotalAmount = (props) => {
  return<>
      <div className="incont amount">
        <p className="para">Total Amount</p>
        <div className=" btn-warning btnamount">
        Rs. {props.totalAmount}
        </div>
      </div>
  </>;
};
