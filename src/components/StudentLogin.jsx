import React from "react";

export default function StudentLogin() {
  return (
    <div>
      <div>Student Login</div>
      <div>
        <form>
          <label>Parents Username</label>
          <input id="username" type="text"></input>
          <label>What is your Image?</label>
          <select id="gender">
            <option>Image 1</option>
            <option>Image 2</option>
            <option>Image 3</option>
          </select>
        </form>
      </div>
    </div>
  );
}
