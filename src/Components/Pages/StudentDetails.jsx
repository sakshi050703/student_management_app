import React from 'react'


const StudentDetails = ({onLogout}) => {
  return (
    <div>
        <h2>Student Details -</h2>
        <button onClick={onLogout}>Logout</button>
    </div>
  )
}

export default StudentDetails