import React from 'react';
import './Hotel.css'


const Hotel = (props) => {
    const { name, img, description , price } = props.hotel;
    return (
        <div>
        <div className="col w-75 mx-auto mt-5 ">
            <div className="card text-center body-cerd cerd-container  text-white">
                <img src={img} className="card-img-top mx-auto img-card" alt="..."></img>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="card-text">{description}</p>
                    <h4> price : ${price}</h4>
                  <button className='btn-danger px-3 py-2'>Book Now</button>
                </div>
            </div>
        </div>

    </div>
    );
};

export default Hotel;