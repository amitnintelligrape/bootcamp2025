import Link from 'next/link';
import React,{useEffect, useState} from 'react';

export default function About(){
    const [aboutData, setAboutData] = useState();
    useEffect(()=>{
        const dataFetch = async ()=>{
            try{
                const response = await fetch('http://localhost:3000/api/about');
                const data = await response.json();
                setAboutData(data.about);
            }
            catch(error){
                console.error('Content not found', error);
            }
        }
        dataFetch();
    },[]);
    return(
        <div className='wrapper--1'>
            <h1>{aboutData?.companyName}</h1>
            <h2>{aboutData?.mission}</h2>
            <h4>Vision: {aboutData?.vision}</h4>
            <h4>Services</h4>
            <ul>
                {aboutData?.services.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
            {aboutData?.employees &&
            <div className="inline-flex w-full">
            {aboutData?.employees.map((emp)=>(
                <div className="flex-grow border rounded border-black m-3 p-4" key={emp.employeeID}>
                <Link  href={`about/${emp.employeeID}`} className='max-w-md mx-auto mt-10 bg-white rounded-lg shadow-lg'>
                    <p><strong>{emp.firstName} {emp.lastName}</strong></p>
                    <p><strong>{emp.position}</strong></p>
                </Link>
                </div>
            ))}
            </div>
            }
        </div>
    );
}