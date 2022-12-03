import React, { useEffect, useState } from "react";

export default function SignUp() {
  const [auth, setAuth] = useState(false);
  const [stage1, setStage1] = useState(true);
  const [stage2, setStage2] = useState(false);
  const [stage3, setStage3] = useState(false);

  const setOne = (e) => {
    e.preventDefault();
    setStage1(false);
    setStage2(true);
  }


  // useEffect(() => {
  //   fetch("http://localhost:3001/test")
  //     .then((response) => response.json())
  //     .then((actualData) => setAuth(actualData));
  // }, [auth]);

  if (stage1) {
    return (
      <>
        <h2>Welcome to Reading Mastery Org</h2>
        <div>
          <form action="">
            <input type="email" placeholder="Email" />
            <p>
              By continuing, you agree to Reading Mastery's{" "}
              <a href="/">Privacy Policies</a> and our{" "}
              <a href="/">Terms of Use</a>
            </p>
            <button onClick={setOne}>Next</button>
          </form>
        </div>
      </>
    );
  } else if (stage2) {
    return (
      <>
      <h2>Please fill in the code from your email</h2>
      <div>
          <form action="">
            <input type="number" />
            <p>
              By continuing, you agree to Reading Mastery's{" "}
              <a href="/">Privacy Policies</a> and our{" "}
              <a href="/">Terms of Use</a>
            </p>
            <button >Next</button>
          </form>
        </div>
      </>
    )

  } else if (stage3) {

  } else {
    return (
      <h1>Error</h1>
    )
  }

  
}
