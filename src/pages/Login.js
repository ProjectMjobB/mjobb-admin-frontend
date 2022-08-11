import React, {useState} from 'react';

function Login() {

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }
  
  const [user, setUser] = useState({name:"", email:"", password:""}));
  const [error, setError] = useState("");


  const Login = details => {
    console.log(details);
  }

  return (
    <div>Login</div>
  )
}

export default Login