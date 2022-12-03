import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
        <button><Link to="/parent-login">Parent Login</Link></button>
        
        <button><Link to="/student-login">Student Login</Link></button>

    </div>
  )
}
