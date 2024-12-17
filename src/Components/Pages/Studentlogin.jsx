import axios from 'axios'
import React, { useState } from 'react'
import StudentDetails from './StudentDetails'

const Studentlogin = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState()

    const handleLogin = async() =>{
        const response = await axios.get('http://localhost:8000/students')
        const result = response.data

        const stuLogin = result.find((stu)=>stu.email === email && stu.password === password)

        if(stuLogin){
            setLoggedIn(stuLogin)
            alert('Student Login Successful !!')
        }else{
            alert('Wrong Details !!!')
            setEmail('')
            setPassword('')
        }
    }
    const handleLogout = () =>{
        setLoggedIn()
        setEmail('')
        setPassword('')
    }

    if(loggedIn){
        return <StudentDetails stuLogin = {loggedIn} onLogout={handleLogout}/>
    }

  return (
    <div>
        <h2 className='mt-5 mb-5'>Welcome to Student Login </h2>
        <div className='bg-primary w-50 mx-auto p-3 rounded-3 mb-5'>
            <div className='mt-3 mb-3'>
                <input 
                    type='email'
                    className='form-control'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(event)=>setEmail(event.target.value)}
                />
            </div>
            <div>
                <input 
                    type='password'
                    className='form-control'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                />
            </div>
            <div className='mt-3'>
                <button className='btn btn-success' onClick={handleLogin}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Studentlogin