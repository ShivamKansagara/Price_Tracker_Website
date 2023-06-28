import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Card.css";
import Searchbar from "./Searchbar";
import Loadingpage from './Loadingpage';
import Loading from './Loadingpage';
import price_logo from "../Images/price_logo.jpeg";
import flipkart_avatar from "../Images/Flipkart_avatar.png";
import amazon_avatar from "../Images/Amazon.webp";

export default function ShowCard() {
  const [data, setData] = useState([]);
  const [inputString, setInputString] = useState('');
  const [loading, setLoading] = useState(true);

  const handleInputChange = (event) => {
    setInputString(event.target.value);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/electronics', { productName: inputString });
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
        <Searchbar handleInputChange={handleInputChange} fetchData={fetchData} />
      </div>
      <div className="container">
        {loading ? ( <Loading/> ) : (
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
                    <p className="card-description">{product.name}</p>
                    <div className="flex-row">
                      <div className="coin-base">
                        <img src={price_logo} alt="Ethereum" className="small-image" />
                        <h2 className='card-price'>{product.price}</h2>
                      </div>
                      <div className="time-left">
                        <img src="https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png" alt="clock" className="small-image" />
                        <p className='text-light'>{product.reviews.toString().substring(0, 3) + "/5"}</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-attribute">
                    <img src={avatarImage} alt="avatar" className="small-avatar" />
                    <button className='btn btn-primary' onClick={() => window.open(product.link, '_blank')}>View details</button>
                    <p></p>
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
