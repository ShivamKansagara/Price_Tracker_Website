import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from "../Images/image1.jpg";
export default function Accordion() {
  return (
    <>
    <br />
    <div className='container' >
    <div className="container marketing">
      <div className="row">
        <div className="col-lg-4">
          <img src={image1} alt="" width="140" height="140" className="rounded-circle"/>
          <h2 className="fw-normal text-light">Heading</h2>
          <p className='text-light'>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
          <p className='text-light'><a className="btn btn-secondary" href="#">View details »</a></p>
        </div>
        <div className="col-lg-4">
        <img src={image1} alt="" width="140" height="140" className="rounded-circle"/>
          <h2 className="fw-normal text-light">Heading</h2>
          <p className='text-light'>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
          <p><a className="btn btn-secondary" href="#">View details »</a></p>
        </div>
        <div className="col-lg-4">
        <img src={image1} alt="" width="140" height="140" className="rounded-circle"/>
          <h2 className="fw-normal text-light">Heading</h2>
          <p className='text-light'>And lastly this, the third column of representative placeholder content.</p>
          <p><a className="btn btn-secondary" href="#">View details »</a></p>
        </div>
      </div>
    </div>
    </div>
  </>
  )
}
