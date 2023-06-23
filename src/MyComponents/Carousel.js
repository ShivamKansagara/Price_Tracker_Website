import React from 'react';
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";

export default function Carousel() {
  return (
    // <div>
    //     <div className='container-fluid'>
    //   <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
    //     <div className="carousel-indicators">
    //       <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    //       <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    //       <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    //     </div>
    //     <div className="carousel-inner">
    //       <div className="carousel-item active">
    //         <img src={image1} className="d-block w-100" alt="Slide 1" />
    //         <div className="carousel-caption d-none d-md-block">
    //           <h5>First slide label</h5>
    //           <p>Some representative placeholder content for the first slide.</p>
    //         </div>
    //       </div>
    //       <div className="carousel-item">
    //         <img src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60108448d93c73801f3e8ef6_6002086f72b72704e901e452_web-design-inspiration-p-2000.jpeg" className="d-block w-100" alt="Slide 2" />
    //         <div className="carousel-caption d-none d-md-block">
    //           <h5>Second slide label</h5>
    //           <p>Some representative placeholder content for the second slide.</p>
    //         </div>
    //       </div>
    //       <div className="carousel-item">
    //         <img src={image3} className="d-block w-100" alt="Slide 3" />
    //         <div className="carousel-caption d-none d-md-block">
    //           <h5>Third slide label</h5>
    //           <p>Some representative placeholder content for the third slide.</p>
    //         </div>
    //       </div>
    //     </div>
    //     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    //       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //       <span className="visually-hidden">Previous</span>
    //     </button>
    //     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    //       <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //       <span className="visually-hidden">Next</span>
    //     </button>
    //   </div>
    // </div>
    // </div>
    <div>
         <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" style={{ height: "500px" }}>
      {/* <ol className="carousel-indicators">
        <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
      </ol> */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block w-100" alt="First slide" style={{ maxHeight: "500px",filter: 'blur(6px)' }} />
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Example headline.</h1>
              <p>Some representative placeholder content for the first slide of the carousel.</p>
              <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image2} className="d-block w-100" alt="Second slide"  style={{ maxHeight: "500px",filter: 'blur(6px)' }}/>
          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>Some representative placeholder content for the second slide of the carousel.</p>
              <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image3} className="d-block w-100" alt="Third slide" style={{ maxHeight: "500px",filter: 'blur(6px)' }} />
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>One more for good measure.</h1>
              <p>Some representative placeholder content for the third slide of this carousel.</p>
              <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
    </div>
  );
}
