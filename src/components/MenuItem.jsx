import React from 'react';
import { useNavigate } from "react-router-dom";

function MenuItem({ image, name, price }) {

  let navigate = useNavigate();

  const goTo = (path) => {
    navigate(path, { replace: true });
  };

  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> R{price} </p>
      
      <button className='btn' onClick={() => goTo("./products")} >
        Buy Now
      </button>
    </div>
  );
}

export default MenuItem;



