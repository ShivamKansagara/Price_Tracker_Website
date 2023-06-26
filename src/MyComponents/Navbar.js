import React from 'react'
import "./Underlinecomp.css"
import { Route,Routes,Link } from 'react-router-dom';
export default function Navbar() {
    let backnavcolor={
        backgroundColor: "#000000"
    };
  return (
    <>
    
    <div >
        <nav className="navbar sticky-top navbar-expand-lg " style={backnavcolor}>
  <div className="container-fluid">
    <a className="navbar-brand text-light underline-on-hover" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light underline-on-hover"   aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light underline-on-hover" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item text-dark underline-on-hover"  href="#">Action</a></li>
            <li><a className="dropdown-item text-dark underline-on-hover" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item text-dark underline-on-hover" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <Link to="/ShowProducts"><button className="btn btn-outline-info bg-light text-dark " type="submit">Click here to Search</button></Link>
        
      </form>
    </div>
  </div>
</nav>
    </div>
   </>
  )
}