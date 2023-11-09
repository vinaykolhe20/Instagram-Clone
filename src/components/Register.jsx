import React from 'react'


import "../Styles/register.css"
const Regsiter = () => {
  return (
    <div className='registerContainer'>
        <h3>Register</h3>
      <div>
        <input type="email" name="email" id="" placeholder='Enter email' />
      </div>
      <div>
        <input type="password" name="password" id="" placeholder='Enter password'/>
      </div>
      <button>Registration</button>
      <button className='link'>Want to Login?</button>

    </div>
  )
}

export default Regsiter
