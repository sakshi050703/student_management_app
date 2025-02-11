import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Studata = () => {

    const [student,setStudent] = useState([])
    const [searchName, setSearchName] = useState('')

    const fetchData = async() =>{
        const response = await axios.get('http://localhost:8000/students')
        console.log(response)

        const result = await response.data
        console.log(result)
        setStudent(result)
    }

    useEffect(()=>{
        fetchData ()
    },[])

    const navigate = useNavigate()

    const logoutHandler = () =>{
        navigate('/admin')
    }

    const searchHandler = (event) =>{
        const search = event.target.value
        setSearchName(search)
    }

    const searchNameHandler = student.filter((stu)=>{
        return stu.course.toLowerCase().includes(searchName.toLowerCase())
    })

  return (
    <div>
        <h2>Student Details </h2>
        <div className='mt-3 mb-3 w-50 mx-auto'>
            <input 
                type="text"
                className='form-control'
                placeholder='Type Course Name.....'
                value={searchName}
                onChange={searchHandler}
            />
            <h4>Serch Value - {searchName}</h4>
        </div>
        <table className='table'>
            <thead>
                <tr>
                    <th>Sr.No</th>
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
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    searchNameHandler.map((stu,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{stu.fname}</td>
                                <td>{stu.lname}</td>
                                <td>{stu.mother_name}</td>
                                <td>{stu.father_name}</td>
                                <td>{stu.address}</td>
                                <td>{stu.gender}</td>
                                <td>{stu.course}</td>
                                <td>{stu.fees}</td>
                                <td>{stu.dob}</td>
                                <td>{stu.pincode}</td>
                                <td>{stu.password}</td>
                                <td>{stu.email}</td>
                                <td>
                                    <NavLink to={`/update/students/${stu._id}`}><button className='btn btn-warning me-1'>Edit</button></NavLink>
                                    <NavLink to={`/delete/students/${stu._id}`}><button className='btn btn-danger'>Delete</button></NavLink>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <div>
            <button className=' mt-5 mb-5 btn btn-warning w-50' onClick={logoutHandler}>LOGOUT</button>
        </div>
    </div>
  )
}

export default Studata