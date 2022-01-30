import React from 'react';

export const Footer = () => {
  const style = {
    div1 : {
      // marginTop : '3vh',
      // position: 'absolute',
      left: '0',
      bottom: '0',
      width: '100%',
    }
  };
  return <>
  <div>
      <footer className="text-center text-lg-start bg-light text-muted" style={style.div1}>         
        <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
          © 2022 Copyright:<b>Foodiesoul.com</b>
        </div>
      </footer>
      
  </div> 
  </>;
};
