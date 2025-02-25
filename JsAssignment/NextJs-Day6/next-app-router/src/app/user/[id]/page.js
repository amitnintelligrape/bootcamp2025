"use client"; 
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
export default function EmployeeDetail() {
  const [details, setDetails] = useState(null);
  const slug  = useParams();
  useEffect(() => {
    const fetchData = async ()=>{
       const res = await fetch(`https://dummyjson.com/users/${slug.id}`);
       const data = await res.json();
       setDetails(data);
    }
    fetchData();
  }, [slug]);
  console.log(details);
  return (
    <div>
      <h1>Employee Details for ID:</h1>
      <img src={details?.image} />
      <h2>{details?.firstName} {details?.lastName}</h2>
      <h3>DOB: {details?.birthDate}</h3>
      <h3>Email <Link href={`mailto: ${details?.email}}`}>{details?.email}</Link></h3>
      <h3>Education: {details?.university}</h3>
    </div>
  );
}
