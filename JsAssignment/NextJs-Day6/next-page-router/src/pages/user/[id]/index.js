import React from 'react';
const EmployeeDetail = ({ emp }) => {
  if (!emp) {
    return <div>Loading...</div>;
  }
  return (
    <div><br/><br/>
      <h1>User Details Page: ISR using generateStaticParams. </h1>
      <h1>Name: {emp.firstName} {emp.lastName}</h1>
      <h2>Email: {emp.email}</h2>
      <h2>DOB: {emp.birthDate}</h2>
      <h2>Educations: {emp.university}</h2>
    </div>
  );
};

export const getStaticPaths = async () => {
  try {
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json();
    const paths = data.users.map((user) => ({
      params: { id: user.id.toString() }, 
    }));
    return {
      paths, 
      fallback: 'blocking',
    };
  } catch (error) {
    return {
      paths: [], 
      fallback: 'blocking',
    };
  }
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;  
  try {
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    const emp = await res.json();
    if (!emp) {
      return { notFound: true }; 
    }
    return {
      props: {
        emp: emp || null,
      },
      revalidate: 60, 
    };
  } catch (error) {
    return { notFound: true };  
  }
};

export default EmployeeDetail;
