import React, { useState } from 'react';
import "./Searchbar.css";

export default function Searchbar({ handleInputChange, handleDropdownSelect, fetchData }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    handleDropdownSelect(item); // Pass the selected item to the parent component
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <br />
    <br />
    <br />
      <div className="container d-flex justify-content-center align-items-center">
        <div>
          <div className={`dropdown ${isOpen ? "show" : ""} `}>
            <button
              className="btn btn-secondary dropdown-toggle bg-light text-dark"
              type="button"
              onClick={toggleDropdown}
              id="dropdownButton"
            >
              {selectedItem ? selectedItem : 'Category'}
            </button>
            <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
              <li><a className="dropdown-item" href="#" onClick={() => handleItemClick('electronics')}>Electronics</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleItemClick('fashion')}>Fashion</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleItemClick('Something else here')}>Something else here</a></li>
            </ul>
          </div>
        </div>
        <div>
          
          <div className="container h-100">
            <div className="d-flex justify-content-center h-100">
              <div className="searchbar">
                <input
                  className="search_input"
                  type="text"
                  placeholder="Search..."
                  onChange={handleInputChange}
                  onKeyPress={(event) => {
                    if (event.key === 'Enter' && selectedItem) {
                      fetchData();
                    }
                  }}
                  disabled={!selectedItem} // Disable input when no dropdown item is selected
                />
                <button className="search_icon" onClick={fetchData} disabled={!selectedItem}>
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br/>
      <br />
    </>
  );
}
