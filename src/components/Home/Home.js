// import React, { useEffect, useState } from 'react';
// import Homecard from '../Homecard/Homecard';
import Hotels from '../Hotels/Hotels';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
   
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./banner1.jpg" className="d-block w-75 mx-auto" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="./banner2.jpg" className="d-block w-75 mx-auto" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="./banner3.jpg" className="d-block w-75 mx-auto" alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <hr />
            <Services></Services>
            <hr />
            <Hotels></Hotels>
          
           <br />
        


            <div id="contact" className="form p-5">
                <h1>Contact Us</h1>


                <input className="form1 mt-3 w-75" type="text" name="fname" id="fname" placeholder="First Name..." /><br />

                <input className="form1 mt-3 w-75" type="text" name="lname" id="lname" placeholder="Last Name..." /><br />

                <input className="form1 mt-3 w-75" type="text" name="email" id="email" placeholder="Email..." /><br />

                <textarea className='mt-3 w-75' name="text" id="" cols="30" rows="10" placeholder="Your Message...."></textarea><br />
                <input className="button2" type="button" value="Submit" />
                <input className="button2" type="reset" value="Reset" />
            </div>



        </div>
    );
};

export default Home;