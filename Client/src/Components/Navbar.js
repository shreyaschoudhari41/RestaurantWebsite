import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
  const style = {
    home: {
      marginLeft: "20px",
    },
    about: {
      marginLeft: "20px",
    },
    recent: {
      marginLeft: "20px",
    },
    write: {
      marginLeft: "20px",
    },
    
    mainname: {
      fontSize:'25px',
      marginTop: '10px',
      marginLeft:'15px',
    },

    navstyle : {
        padding : '0',
        fontSize : '25px',
        color : 'black',
        backgroundColor: "#FFE5B4",
    },
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={style.navstyle}>
        <div className="container-fluid" style={style.navcolor}>
          <Link className="navbar-brand" to="#">
            <h4  style={style.mainname}>FoodieSoul</h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" style={style.home}>
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item" style={style.about}>
                <Link className="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item" style={style.recent}>
                <Link className="nav-link active" aria-current="page" to="/menue">
                  Menue
                </Link>
              </li>
              {/* <li className="nav-item" style={style.write}>
                <Link className="nav-link active" aria-current="page" to="/writecontent">
                  Order Food
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
