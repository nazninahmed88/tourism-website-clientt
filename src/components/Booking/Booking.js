import React, { useEffect, useState } from 'react';
import Bookingcard from '../Bookingcard/Bookingcard';


const Booking = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-6">
                {
                    doctors.map(doctor => <Bookingcard key={doctor.id} doctor={doctor}></Bookingcard>)
                }
            </div>
        </div >
    );
};

export default Booking;