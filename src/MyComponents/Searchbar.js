import React from 'react'
import "./Searchbar.css"
export default function Searchbar() {
  return (
    <div>
        <div className="container h-100">
      <div className="d-flex justify-content-center h-100">
        <div className="searchbar">
          <input className="search_input" type="text" name="" placeholder="Search..."/>
          <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
        </div>
      </div>
    </div>
    </div>
  )
}
