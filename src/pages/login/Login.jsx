import React from 'react'

const Login = () => {
  return <div>
    <form action="">
      <h2>Hi Stranger, Welcome back.</h2>
      <input type="text" placeholder='Email' />
      <input type="password" placeholder='Password' maxLength={12} />
      <button>Sign In</button>
    </form>
  </div>
}

export default Login
