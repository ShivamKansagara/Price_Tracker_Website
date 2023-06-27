import React from 'react';
import "./Searchbar.css";

export default function Searchbar({ handleInputChange, fetchData }) {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchData();
    }
  };

  return (
    <>
    <br />
    <div className="container h-100">
      <div className="d-flex justify-content-center h-100">
        <div className="searchbar">
          <input
            className="search_input"
            type="text"
            placeholder="Search..."
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button className="search_icon" onClick={fetchData}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
    
    <hr className='hr hr-blurry' />
    </>
  );
}