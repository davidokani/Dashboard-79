import React from 'react'

const Login = () => {
  return <div>
    <div className='container'>
      <form action="">
        <h2>Hi Stranger, Welcome back.</h2>
        <label htmlFor="email">Email</label>
        <input id='email' type="text" placeholder='Email' />
        <label htmlFor="password">Password</label>
        <input id='password' type="password" placeholder='Password' maxLength={12} />
        <button>Sign In</button>
      </form>
    </div>
  </div>
}

export default Login
