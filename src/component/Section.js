import React from 'react'


export default function Section(props) {
  return (
    <>
   
   <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={props.img1} className="d-block w-100" alt="..." style={{height: "700px"}} />
    </div>
    <div className="carousel-item">
      <img src={props.img2} className="d-block w-100" alt="..." style={{height: "700px"}} />
    </div>
    <div className="carousel-item">
      <img src={props.img3} className="d-block w-100" alt="..." style={{height: "700px"}} />
    </div>
  </div>
</div>
  
    </>
  )
}
