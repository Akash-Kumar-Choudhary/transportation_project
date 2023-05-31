import classes from "./Register.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Layout} from "../Component/Layout/Layout";
import toast from "react-hot-toast";
const Register = () => {
  const [EnterEmail, setEnterEmail] = useState("");
  const [EnterPassword, setEnterPassword] = useState("");
  const [EnterAddress, setEnterAddress] = useState("");
  const [formIsValid, setformIsValid] = useState(false);
  const PasswordIsValid = EnterPassword.trim() !== "";
  const AddressIsValid = EnterAddress.trim() !== "";
  const EmailIsValid = EnterEmail.includes("@");
  const Navigate = useNavigate();


  useEffect(() => {
    if (
      EmailIsValid &&
      PasswordIsValid &&
      AddressIsValid
    ) {
      setformIsValid(true);
    } else {
      setformIsValid(false);
    }
  }, [
    EmailIsValid,
    AddressIsValid,
    PasswordIsValid,
  ]);
  const SubmitChangeHandler = async (e) => {
    e.preventDefault();
    if (
      !EmailIsValid ||
      !AddressIsValid ||
      !PasswordIsValid 
    ) {
      return;
    }
    const data = {
      password: EnterPassword,
      email: EnterEmail,
      address: EnterAddress,
    };
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/auth/register",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data1 = await response.json();
      if (data1.success) {
        Navigate("/login");
        toast.success(data1.message);
      } else {
        toast.error(data1.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
    setEnterEmail("");
    setEnterAddress("");
    setEnterPassword("");
  };
  const enterPasswordChangeHandler = (event) => {
    setEnterPassword(event.target.value);
  };
  const enterMailChangeHandler = (event) => {
    setEnterEmail(event.target.value);
  };
  const enterAddressChangeHandler = (event) => {
    setEnterAddress(event.target.value);
  };
  return (
    <Layout>
      <div className={classes.regis}>
        <h1>Register Form</h1>
        <form onSubmit={SubmitChangeHandler} className={classes["form-text"]}>
          <div className="mb-3">
            <input
              value={EnterPassword}
              onChange={enterPasswordChangeHandler}
              type="text"
              className="form-control"
              placeholder="Enter the Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              value={EnterEmail}
              onChange={enterMailChangeHandler}
              type="email"
              className="form-control"
              placeholder="Enter the Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              value={EnterAddress}
              onChange={enterAddressChangeHandler}
              type="text"
              className="form-control"
              placeholder="Enter the Address"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!formIsValid}
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};
export default Register;
