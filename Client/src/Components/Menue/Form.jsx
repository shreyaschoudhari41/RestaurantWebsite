import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Menue.css"

export const Form = (props) => {

  const history=useHistory();
  const style = {
    submitbot: {
      height: "3.2rem",
      fontFamily: "cursive",
      fontSize: "1.5rem",
      marginTop: "0.5rem",
    },
  };

  const [user, setUser] = useState({
    name : " ",
    number: " ",
    address: " ",
  });
  let name,value;
  const handleInputs = (e) =>{
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value})
  }

  const PostData = async(e)=>{
    e.preventDefault();

    const {name,number,address} = user;
    const res = await fetch("/submit",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name,number,address
      })
    });

    // const data = await res.json();
    
    window.alert("order placed");

    history.push("/");
  }

  return (
    <>
      <form method="POST">
        <div className="form-group">
          <label className="label">Name</label>
          <input
            type="text"
            className="form-control label"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            name="name"
            value={user.name}
            onChange={handleInputs}
          />
        </div>
        <div className="form-group">
          <label className="label">Mobile Number</label>
          <input
            type="number"
            className="form-control label"
            id="exampleInputPassword1"
            // placeholder="Mobile Number"
            name="number"
            value={user.number}
            onChange={handleInputs}
          />
        </div>
        <div className="form-group">
          <label className="label">Address</label>
          <textarea
            className="form-control label"
            id="exampleFormControlTextarea1"
            rows="2"
            placeholder="Enter your address here"
            name="address"
            value={user.address}
            onChange={handleInputs}
          ></textarea>
        </div>
        <div className="subbot">
          <button type="submit" className="btn btn-primary" onClick={PostData} style={style.submitbot}>
            Submit Order 
          </button>
        </div>
      </form>
    </>
  );
};
