import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function Id(){
    const router = useRouter();
    const slug = router.query.id;
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
    },[slug]);
    const emp = aboutData?.employees.find((emp)=> emp.employeeID == slug)
    return(
        <div className="wrapper--1">
            {emp &&
            <>
            <h1>{emp.firstName} {emp.lastName}</h1>
            <p><strong>Employee ID:</strong> {emp.employeeID}</p>
            <p><strong>Position:</strong> {emp.position}</p>
            <p><strong>Department:</strong> {emp.department}</p>
            <p><strong>Date Of Joining:</strong> {emp.dateOfJoining}</p>
            <p><strong>Email:</strong> {emp.email}</p>
            <p><strong>Phone:</strong> {emp.phone}</p>
            <p><strong>Salary:</strong> {emp.salary}</p>
            {emp.skills &&
            <> 
            <h2>Skill</h2>
            {emp.skills.map((item, index)=>(
            <span key={index} className='inline-block pr-2'>{item}</span>
            ))}
            </>
            }
            {emp.manager &&
            <>
            <p><strong>Reporting Manage:</strong> {emp.manager.firstName} {emp.manager.lastName}</p>
            <p><strong>Position:</strong> {emp.manager.position}</p>
            </>
            }
            </>
            }
        </div>
    )
}