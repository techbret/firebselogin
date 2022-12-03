import React, { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRecoilState, useRecoilValue } from "recoil";
import { loggedInState, tokenState } from "../contexts/atoms";

export default function ParentLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [_, setAuthState] = useRecoilState(loggedInState);
  const [tk, setTokenState] = useRecoilState(tokenState);
  const tokenValue = useRecoilValue(tokenState);
  const authState = useRecoilValue(loggedInState);
  const [isLoggedIn, setIsLoggedIn] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );
  const [user, setUser] = useState({});
  const auth = getAuth();

  useEffect(() => {    
    auth.onAuthStateChanged((userCredential) => {
      if (userCredential) {
        setIsLoggedIn(true);
        setAuthState(isLoggedIn);
        window.localStorage.setItem("auth", "true");
        userCredential.getIdToken().then((token) => {
          setTokenState(token);
        });
      } else {
        window.localStorage.setItem("auth", "false");
      }
    });
  }, []);

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) {
          setUser(userCredential);
          setIsLoggedIn(true);
          setAuthState(isLoggedIn);
          window.localStorage.setItem("auth", "true");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome</h1>
      ) : (
        <>
          <div>Sign In</div>
          <form>
            <div>
              <label htmlFor="">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              ></input>
              <label htmlFor="">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                required
              ></input>
              <button onClick={login}>Login</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
