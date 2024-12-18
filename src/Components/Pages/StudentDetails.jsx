import React from 'react'


const StudentDetails = ({onLogout, student}) => {
  //console.log(student)
  return (
    <div>
        <h2>Student Details - {student.fname}</h2>
        
        <table className='table'>
          <thead>
            <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Mother Name</th>
                    <th>Father Name</th>
                    <th>Address</th>
                    <th>Gender</th>
                    <th>Course</th>
                    <th>Fees</th>
                    <th>DOB</th>
                    <th>Pincode</th>
                    <th>Password</th>
                    <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{student.fname}</td>
              <td>{student.lname}</td>
              <td>{student.mother_name}</td>
              <td>{student.father_name}</td>
              <td>{student.address}</td>
              <td>{student.gender}</td>
              <td>{student.course}</td>
              <td>{student.fees}</td>
              <td>{student.dob}</td>
              <td>{student.pincode}</td>
              <td>{student.password}</td>
              <td>{student.email}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={onLogout}>Logout</button>
    </div>
  )
}

export default StudentDetails