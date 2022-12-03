import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { loggedInState } from "../contexts/atoms";
import { getAuth, signOut } from "firebase/auth";


function Navbar() {
  const [_, setAuthState] = useRecoilState(loggedInState);
  const authState = useRecoilValue(loggedInState);
  const [isLoggedIn, setIsLoggedIn] = useState(authState || window.localStorage.getItem("auth") === "true")

  const auth = getAuth();
  const navigate = useNavigate()

  useEffect(() => {
    if (!authState) {
      window.localStorage.setItem("auth", "false");
    }
  })

  const logout = (e) => {
    signOut(auth).then(() => {
      setAuthState(false)
      window.localStorage.setItem("auth", "false");      
      navigate('/login')
    }).catch((error) => {
      // An error happened.
    });
  }

  const testLogout = () => {
    console.log('Logout Works')
  }



  return (
    <div>
      <nav>
       <Link to="/"> Home </Link> | 
       <Link to="/parents"> For Parents </Link> | 
       <Link to="/our-approach"> Our Approach </Link> | 
       <Link to="/research"> Research </Link> | 
       <Link to="/sign-up"> Create Account </Link> |   
       {isLoggedIn ? <button onClick={logout}> Logout</button> : <Link to="/login"> Login</Link> }                   
      </nav>
      
      
    </div>
  );
}

export default Navbar;
