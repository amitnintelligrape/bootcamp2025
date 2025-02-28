import Link from 'next/link';
import React,{ useEffect, useState } from 'react';
import Button from '../components/button';

const Teacher = ()=>{
    const [teacher, setTeachers] = useState([]);
    const [students, setStudents] = useState([]);
    const [selectedTeacherId, setSelectedTeacherId] = useState(null);

    useEffect(() => {
        const fetchTeachers = async () => {
          try {
            const res = await fetch('http://localhost:3000/api/teachers');
            const data = await res.json();
            setTeachers(data.teachers);
          } catch (error) {
            console.error('Error fetching teachers:', error);
          }
        };
        fetchTeachers();
      }, []);

      useEffect(() => {
          const fetchStudents = async () => {
            try {
              const res = await fetch(`http://localhost:3000/api/students`);
              const data = await res.json();
              setStudents(data.students);
            } catch (error) {
              console.error('Error fetching students:', error);
            }
          };
          fetchStudents();
      }, []);

      const studentsUnderTeacher = students?.filter(
        (student) => student.teacherId === parseInt(selectedTeacherId, 10)
      );
    return(
        <div className='wrapper--1'>
            <h3><Link href="http://localhost:3000/api/teachers" target='_blank'>Teachers API &raquo;</Link></h3>
            <h3><Link href="http://localhost:3000/api/students" target='_blank'>Students API &raquo;</Link></h3>
            <h1>Teachers List</h1>
            <table border="1" className='min-w-full table-auto border-collapse border border-gray-200'>
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">S N.</th>
                  <th className="px-4 py-2 text-left">Teacher Name</th>
                  <th className="px-4 py-2 text-left">Subject</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                  {teacher?.map((teacher) => (
                    <tr key={teacher.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2">{teacher.id}</td>
                      <td className="px-4 py-2">{teacher.first_name}</td>
                      <td className="px-4 py-2">{teacher.subject}</td>
                      <td className="px-4 py-2">
                        <Button onClick={() => setSelectedTeacherId(teacher.id)} text="Show Students" />
                      </td>
                    </tr>
                  ))}
                </tbody>
            </table>
            {selectedTeacherId && (
              <>
                <h1>Students List Based on Teacher</h1>
                <table border="1" className='min-w-full table-auto border-collapse border border-gray-200'>
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 text-left">Student Name</th>
                      <th className="px-4 py-2 text-left">Grade</th>
                      <th className="px-4 py-2 text-left">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentsUnderTeacher.length > 0 ? (
                      studentsUnderTeacher.map((student) => (
                        <tr key={student.id} className="border-b hover:bg-gray-50">
                          <td className="px-4 py-2">{student.first_name}</td>
                          <td className="px-4 py-2">{student.grade}</td>
                          <td className="px-4 py-2">{student.email}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4">No students found for this teacher.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </>
            )}
            <h1>Students List</h1>
            <table border="1" className='min-w-full table-auto border-collapse border border-gray-200'>
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">S N.</th>
                  <th className="px-4 py-2 text-left">Teacher Name</th>
                  <th className="px-4 py-2 text-left">Grade</th>
                  <th className="px-4 py-2 text-left">Email</th>
                </tr>
              </thead>
              <tbody>
                  {students?.map((students) => (
                    <tr key={students.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2">{students.id}</td>
                      <td className="px-4 py-2">{students.first_name}</td>
                      <td className="px-4 py-2">{students.grade}</td>
                      <td className="px-4 py-2">{students.email}</td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </div>
    );
}

export default Teacher;