// dependencies
import React, { useState } from 'react';
// components
import LoginValidation from '../components/alerts/LoginValidation'
// utilities
import loginAPI from '../APICalls/login'

// Form validation

const validateUsername = username => {
  const usernameRegex = /^[a-zA-Z0-9_-]+$/;
  if (username.length > 7 && username.match(usernameRegex)) {
    return true
  }

  return false
}

function Login() {
  // Component State
  const [ username, setUsername ] = useState("");
  const [ usernameInvalid, setUsernameInvalid] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validateUsername(username)) {
      setUsernameInvalid(false)
      loginAPI(username)
      setUsername("")
    } else {
      setUsernameInvalid(true)
    }
  }

  // On change handler
  const handleChanges = event => {
    setUsername(event.target.value);
    console.log("this hittin?", username)
    console.log(usernameInvalid)
  }

  return (
    <div>
      {/* Login form */}
      <p>This is the login field.  Just your username</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="username"
          placeholder="username"
          value={ username }
          onChange={ handleChanges }
          />
        <input type="submit"/>
      </form>
      {usernameInvalid && <LoginValidation />}
    </div>
  )
}

export default Login;