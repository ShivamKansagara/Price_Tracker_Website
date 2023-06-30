import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Card.css";
import Searchbar from "./Searchbar";
import Loading from './Loadingpage';
import price_logo from "../Images/price_logo.jpg";
import flipkart_avatar from "../Images/Flipkart_avatar.png";
import amazon_avatar from "../Images/Amazon.webp";
import review_logo from "../Images/review_logo.jpg";

export default function ShowCard() {
  const [data, setData] = useState([]);
  const [inputString, setInputString] = useState('');
  const [selectedDropdownItem, setSelectedDropdownItem] = useState('');
  const [loading, setLoading] = useState(true);

  const handleInputChange = (event) => {
    setInputString(event.target.value);
  };

  const handleDropdownSelect = (item) => {
    setSelectedDropdownItem(item);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      // console.log(inputString);
      // console.log(selectedDropdownItem);
      const response = await axios.post('http://localhost:5000/api/electronics', {
        productName: inputString,
        category: selectedDropdownItem,
      });
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <Searchbar
          handleInputChange={handleInputChange}
          handleDropdownSelect={handleDropdownSelect}
          fetchData={fetchData}
        />
      </div>
      <div className="container">
        {loading ? (<Loading />) : (
          <div className="row">
            {data.map((product) => {
              const isFlipkart = product.link.includes('flipkart');
              const isAmazon = product.link.includes('amazon');
              const avatarImage = isFlipkart ? flipkart_avatar : (isAmazon ? amazon_avatar : "https://i.postimg.cc/SQBzNQf1/image-avatar.png");

              return (
                <div key={product.link} className="card-container">
                  <div className='card-image'>
                    <img className="card-image" src={product.image} alt="Spinning glass cube" />
                  </div>
                  <div className="card-content">
                    <p className="card-description">{product.name.toString().substring(0,69)}</p>
                    <div className="flex-row">
                      <div className="coin-base d-flex justify-content-center align-items-center">
                        <div>
                        <img src={price_logo} alt="Ethereum" className="small-image" />
                        </div>
                        <div>
                        <h2 className='card-price'>{product.price}</h2>
                        </div>
                      </div>
                      <div className="time-left d-flex justify-content-center align-items-center">
                        <div >
                        <img src={review_logo} alt="clock" className="small-image" />
                        </div>
                        <div>
                        <p style={{color:"white"}}>{product.reviews.toString().substring(0, 3) + "/5"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-attribute">
                    <img src={avatarImage} alt="avatar" className="small-avatar" />
                    <div className='view_button-container'>
                        <button className='view_button' onClick={() => window.open(product.link, '_blank')}>View details</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
