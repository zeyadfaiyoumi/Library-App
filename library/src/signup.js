import "./signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [form, setform] = useState({ name: "", email: "", pas: "" });
  let navigate = useNavigate();
  const SubmitHandel = (e) => {
    e.preventDefault();
    console.log(form);
    localStorage.setItem("users", JSON.stringify(form));
    navigate("/Home");
  };
  return (
    <>
      <h2>Sign Up</h2>
      <form action="/submit_form" method="post" onSubmit={SubmitHandel}>
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={form.name}
          onChange={(e) => {
            setform({ ...form, name: e.target.value });
          }}
        />

        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={(e) => {
            setform({ ...form, email: e.target.value });
          }}
        />

        <label for="password">Password</label>
        <input type="password" id="password" name="password" />

        <label for="confirm_password">Confirm Password</label>
        <input type="password" id="confirm_password" name="confirm_password" />

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
export default Signup;
