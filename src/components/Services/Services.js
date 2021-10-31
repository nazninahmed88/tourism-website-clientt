import React, { useEffect, useState } from 'react';

import Servicecard from '../Servicecard/Servicecard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
             <h1 className='text-center'>Services</h1>
            <hr />
            <div className="row row-cols-1 row-cols-md-3 g-5 ms-5">
                {
                    services.map(service => <Servicecard key={service._id} service={service}></Servicecard>)
                }

            </div>
        </div>
    );
};

export default Services;