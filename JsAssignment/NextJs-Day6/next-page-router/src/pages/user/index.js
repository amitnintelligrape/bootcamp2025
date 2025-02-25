import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function User() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        setUserData(data.users);
      } catch (error) {
        console.error('Content not found', error);
      }
    };
    dataFetch();
  }, []);

  return (
    <div className="wrapper--1"><br/>
        <h1>User: Client-side fetching</h1>
        {userData?.map((user, index) => (
          <div key={index} className="flex-grow border rounded border-black m-3 p-4">
            <img src={user?.image} />
            <Link href={`user/${user?.id}`}>{user?.firstName} {user?.lastName}</Link>
            <p>Age: {user?.age}</p>
            <p>Gender: {user?.gender}</p>
          </div>
        ))}
    </div>
  );
}
