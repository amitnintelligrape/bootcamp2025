import React,{ useEffect, useState } from 'react';
const Teacher = ()=>{
    const [teacher, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchTeachers = async () => {
          try {
            const res = await fetch('http://localhost:3000/api/school');
            const data = await res.json();
            setTeachers(data);
          } catch (error) {
            console.error('Error fetching teachers:', error);
          } finally {
            setLoading(false);
          }
        };
        fetchTeachers();
      }, []);
      console.log(teacher.teachers)
    return(
        <div>
            <h1>Teachers List</h1>
            <ul>
                {teacher.teachers?.map((teacher) => (
                <li key={teacher.id}>
                    {teacher.name} - {teacher.subject}
                </li>
                ))}
            </ul>
        </div>
    );
}

export default Teacher;