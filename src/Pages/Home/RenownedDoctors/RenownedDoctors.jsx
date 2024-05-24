import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import doctorsData from './doctors.json';


const RenownedDoctors = () => {
    const[doctors,setDoctor] = useState([]);
    useEffect(()=>{
        fetch('doctors.json')
        .then(res=>res.json())
        .then(data => {
            const renownedDoctors=data.filter(doctor => doctor.category === 'popular');
            setDoctor(renownedDoctors)
        })
    },[]);
    return (
        <section className="mb-12 px-10">
            <SectionTitle subHeading="Renowned Doctors" heading= "Who are the doctors"></SectionTitle>
            TODO: map through docotors with different categories.
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {doctorsData.map((doctor) => (
                <div key={doctor.id} className="bg-white rounded-lg shadow-md p-4">
                <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{doctor.name}</h3>
                <p className="text-gray-600 mb-2">{doctor.category}</p>
                <div>
                    <h4 className="text-sm font-semibold">Degrees:</h4>
                    <ul className="list-disc list-inside">
                    {doctor.degrees.map((degree, index) => (
                        <li key={index}>{degree}</li>
                    ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-sm font-semibold">Qualifications:</h4>
                    <ul className="list-disc list-inside">
                    {doctor.qualifications.map((qualification, index) => (
                        <li key={index}>{qualification}</li>
                    ))}
                    </ul>
                </div>
                </div>
            ))}
            </div>
        </section>
    )
}

export default RenownedDoctors;