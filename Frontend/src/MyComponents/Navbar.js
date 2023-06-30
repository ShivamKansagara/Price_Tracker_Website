import React from 'react'
import "./Underlinecomp.css"
import { Route,Routes,Link } from 'react-router-dom';
export default function Navbar() {
    let backnavcolor={
        backgroundColor: "#c5d5cb"
    };
  return (
    <>
    
    <div >
        <nav className="navbar fixed-top navbar-expand-lg " style={backnavcolor}>
  <div className="container-fluid">
    <Link className="navbar-brand text-light underline-on-hover text-dark font-weight-bold"  to="/">PriceHub</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light underline-on-hover text-dark"   aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light underline-on-hover text-dark" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
        <Link to="/ShowProducts"><button className="btn btn-dark" type="submit">Click here to Search</button></Link>
        
      </form>
    </div>
  </div>
</nav>
    </div>
   </>
  )
}
