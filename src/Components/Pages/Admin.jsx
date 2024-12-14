import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Admin = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()

  const loginHandler = () =>{
    if(username === 'ADMIN' && password === 'ADMIN@123'){
      alert('LOGIN SUCCESSFULL !!!!!')
      navigate('/studata')
    }else{
      alert('Check Username or Password')
    }
  }
  return (
    <div>
      <div className='bg-danger w-50 mx-auto rounded-4 mt-3 mb-5 p-5'>
        <h1 className='mb-3'>Welcome to Admin</h1>
        <div className='mb-3'>
            <input 
              type='text'
              className='form-control p-3'
              placeholder='Enter Username'
              value={username}
              onChange={(event)=>setUsername(event.target.value)}
            />
        </div>
        <div className='mb-3'>
            <input 
              type='password'
              className='form-control p-3'
              placeholder='Enter Password'
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
            />
        </div>
        <button className='btn btn-success w-100' onClick={loginHandler}>LOGIN</button>
      </div>
    </div>
  )
}

export default Admin