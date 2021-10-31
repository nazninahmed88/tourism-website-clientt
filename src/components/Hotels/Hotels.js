import React, { useEffect, useState } from 'react';
import Hotel from '../Hotel/Hotel';

const Hotels = () => {
    const [hotels , sethotels] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/hotels')
            .then(res => res.json())
            .then(data => sethotels(data))
    }, [])
    return (
        <div>
        <h1 className='text-center'>Hotels</h1>
        
       <hr />
       <div className="row row-cols-1 row-cols-md-2 g-3 ms-5">
           {
              hotels.map(hotel=> <Hotel key={hotel.id} hotel={hotel}></Hotel>) 
           }

       </div>
   </div>
    );
};

export default Hotels;