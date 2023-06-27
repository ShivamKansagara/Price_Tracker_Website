import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Card.css";
import Searchbar from "./Searchbar";
import Loadingpage from './Loadingpage';
import Notfound from './Notfound';

export default function ShowCard() {
  const [data, setData] = useState([]);
  const [inputString, setInputString] = useState('');
  const [loading, setLoading] = useState(true);
  // const [Error, setError] = useState(false);

  const handleInputChange = (event) => {
    setInputString(event.target.value);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/electronics', { productName: inputString });
      setData(response.data);
      setLoading(false);
      // setError(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // setError(true);
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
        {loading ? (<Loadingpage/>) : 
        // Error ? (<Notfound/>) : 
        <div className="row">
          {data.map((product) => (
            <div key={product.link} className="card-container">
              <div className='card-image'>
                <img className="card-image" src={product.image} alt="Spinning glass cube" />
              </div>
              <div className="card-content">
                <h2 className='card-title'>
                  <a href="#">Equilibrium</a>
                </h2>
                <p className="card-description">{product.name}</p>
                <div className="flex-row">
                  <div className="coin-base">
                    <img src="https://i.postimg.cc/T1F1K0bW/Ethereum.png" alt="Ethereum" className="small-image" />
                    <h2 className='card-price'>{product.price}</h2>
                  </div>
                  <div className="time-left">
                    <img src="https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png" alt="clock" className="small-image" />
                    <p>{product.reviews}</p>
                  </div>
                </div>
              </div>
              <div className="card-attribute">
                <img src="https://i.postimg.cc/SQBzNQf1/image-avatar.png" alt="avatar" className="small-avatar" />
                <button className='btn btn-danger' onClick={() => window.open(product.link, '_blank')}>click me</button>
                <p></p>
              </div>
            </div>
          ))}
        </div>
        }
      </div>
    </>
  );
}
