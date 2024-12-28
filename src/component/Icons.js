import React from 'react'

export default function Icons(props) {
  return (
   <>
   <div className="container" style={{display: "flex", justifyContent: "end", marginBottom: "10px"}}>
   <h4 className="me-3 mt-2" style={{display: "flex", alignItems: "center", fontStyle: "italic", fontWeight: "bold"}}>{props.text}</h4>
   <i className="bi bi-facebook" style={{fontSize: "35px", color: "blue", paddingRight: "30px"}}></i>
   <i className="bi bi-youtube" style={{fontSize: "35px", color: "red", paddingRight: "30px"}}></i>
   <i className="bi bi-instagram" style={{fontSize: "35px", color: "pink", paddingRight: "30px"}}></i>
   <i className="bi bi-whatsapp" style={{fontSize: "35px", color: "green", paddingRight: "30px"}}></i>
   <i class="bi bi-linkedin" style={{fontSize: "35px", color: "blue", paddingRight: "30px"}}></i>
   <i class="bi bi-twitter" style={{fontSize: "35px", color: "blue", paddingRight: "30px"}}></i>
   </div>
   </>
  )
}
