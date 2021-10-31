import React from 'react';
import { Link } from 'react-router-dom';
import './Servicecard.css'

const Servicecard = (props) => {
    const { name,  _id, img, description , price } = props.service;

    return (
        <div>
            <div ClassName="col w-75 mx-auto mt-5  ">
                <div className="card text-center body-card card-container  text-white">
                    <img src={img} className="card-img-top img-card" alt="..."></img>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p className="card-text">{description}</p>
                        <h4> price : ${price}</h4>
                        <Link to={`/service/${_id}`}><button className='btn-danger px-3 py-2'>Book Now</button></Link>
                    </div >
                </div>
            </div>

        </div>
    );
};

export default Servicecard;