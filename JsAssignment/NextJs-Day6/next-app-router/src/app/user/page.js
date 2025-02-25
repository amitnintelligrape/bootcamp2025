'use client'; // Important: Keeps the component as a client-side component.

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from '../components/button';
export default function Users() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  async function fetchUserData() {
    try {
      const res = await fetch('https://dummyjson.com/users');
      const result = await res.json();
      setData(result);
    } catch (err) {
      setError('Failed to fetch user data');
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchUserData();
  }, []); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Button text="Click Me" />
      <h1>Server-rendered Data</h1>
      <div className="wrapper--1">
        {data?.users?.map((user, index) => (
          <div key={index} className="flex-grow border rounded border-black m-3 p-4">
            <img src={user?.image} alt={`${user?.firstName} ${user?.lastName}`} />
            <Link href={`user/${user?.id}`} className='text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'>
              {user?.firstName} {user?.lastName}
            </Link>
            <p>Age: {user?.age}</p>
            <p>Gender: {user?.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
