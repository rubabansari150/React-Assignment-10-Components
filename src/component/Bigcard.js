import React from 'react';
import myImage from '../assests/fullNature.webp'; 

export default function Bigcard(props) {
  return (
   <>
  <div className="container-fluid mt-5">
  <div className="card bg-dark text-white" >
  <img src={myImage} className="card-img" alt="..."  style={{backgroundSize: "cover", height: "250px", backgroundPosition: "100%"}}/>
  <div className="card-img-overlay">
    <h1 className="card-title text-center" style={{marginTop: "180px", color: "blue", fontWeight: "bolder", fontStyle: "italic"}}>{props.text}</h1>
  </div>
</div>
</div>
   </>
  )
}
