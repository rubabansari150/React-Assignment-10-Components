import React from 'react'

export default function Content(props) {
  return (
    <>
    <div className="container" style={{display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center", marginLeft: "100px", marginTop: "40px", marginBottom: "40px"}}>
      <h3>{props.title}</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quibusdam accusantium impedit tempore, consequatur nulla doloremque unde et corrupti dolor excepturi exercitationem, beatae fugiat corporis doloribus aut iusto tempora ad?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas et deleniti, asperiores voluptates recusandae fugit itaque accusantium perspiciatis incidunt, nam esse explicabo id pariatur commodi illum sed eius odio.</p>
    </div>
    </>
  )
}
