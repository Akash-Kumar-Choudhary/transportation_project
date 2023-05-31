import classes from "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Layout } from "../Component/Layout/Layout";
const Login = () => {
  const [EnterEmail, setEnterEmail] = useState("");
  const [EnterPassword, setEnterPassword] = useState("");
  const PasswordIsValid = EnterPassword.trim() !== "";
  const EmailIsValid = EnterEmail.includes("@");

  const navigate=useNavigate()


  const emailChangeHandler = (event) => {
    setEnterEmail(event.target.value);
  };


  const passwordChangeHandler = (event) => {
    setEnterPassword(event.target.value);
  };
  const submitChangeHandler = async (event) => {
    event.preventDefault();
    if (!EmailIsValid || !PasswordIsValid) {
      return toast.error("wrong password and Email");
    }

    const data ={
      password:EnterPassword,
      email:EnterEmail
  };

    try {
      const response = await fetch("http://localhost:8000/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data1 = await response.json();
      localStorage.setItem("token",data1.token)
      if (data1.success) {
        navigate('/')
        toast.success(data1.message);
      } else {
        navigate('/login')
        toast.error(data1.error);
      }
    } catch (error) {
      navigate('/login')
      toast.error("something went wront");
    }
    setEnterEmail("");
    setEnterPassword("");
  };
  return (
    <Layout>
    <div className={classes.login}>
      <h1>Login Form</h1>
      <form onSubmit={submitChangeHandler} className={classes["login-form"]}>
        <div className="mb-3">
          <input
            value={EnterPassword}
            onChange={passwordChangeHandler}
            type="text"
            className="form-control"
            placeholder="Enter the Password"
            required
          />
        </div>
        <div className="mb-3">
          <input
            value={EnterEmail}
            onChange={emailChangeHandler}
            type="email"
            className="form-control"
            placeholder="Enter the Email"
            required
          />
        </div>
        <div>
        <button 
        type='submit'
        className="btn btn-primary form-control"
        >Submit</button>
        </div>
      </form>
    </div>
    </Layout>
  );
};
export default Login;
