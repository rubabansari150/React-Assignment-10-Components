import React from 'react'

export default function Form(props) {
  return (
    <>
    <div className="container mt-5">
    <form>
    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" style={{ marginLeft: "70px"}}>{props.text}</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width: "400px", marginLeft: "70px"}} />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" style={{ marginLeft: "70px"}}>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width: "400px", marginLeft: "70px"}}/>
    <div id="emailHelp" className="form-text" style={{ marginLeft: "70px"}}>We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label" style={{ marginLeft: "70px"}}>Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" style={{width: "350px", marginLeft: "70px"}} />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" style={{ marginLeft: "50px"}} />
    <label className="form-check-label ms-2" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" style={{ marginLeft: "70px"}}>Submit</button>
</form>
    </div>
    </>
  )
}
