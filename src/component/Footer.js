import React from 'react'

export default function Footer(props) {
    return (
        <>
            <nav className="navbar bg-primary" data-bs-theme="dark" style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
              <h1 style={{color: "white", fontStyle: "italic"}}>{props.title}</h1>
              <p style={{color: "white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis.</p>
            </nav>

        </>
    )
}
