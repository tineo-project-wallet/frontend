import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { URLAPI } from "../utils/constant";
import { basicRouteList } from "../routes/routeList";
import InputForm from "../components/auth/InputForm";
import styles from "../styles/pages/login.register.module.css";

function Register() {
  const navigate = useNavigate();
  const urlAPIRegister = URLAPI + "/auth/register";
  const [errorInput, setErrorInput] = useState({
    username: "",
    password: "",
  });
  const [responseAPI, setResponseAPI] = useState("");

  const handleErrorInput = (e) => {
    const { name, value } = e.target;
    let errorMessage = "";

    if (name != "fullname" && value.length === 0) {
      errorMessage = "This field is required";
    } else if (name === "username" && value.length < 3) {
      errorMessage = "Username must be at least 3 characters";
    }

    setErrorInput({ ...errorInput, [name]: errorMessage });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(errorInput).some((value) => value !== "")) {
      // todo - add modal
      alert("Please fill in the form correctly");
      return;
    }

    const form = e.target;
    const formData = new FormData(form);
    const fullname = formData.get("username");
    const username = formData.get("username");
    const password = formData.get("password");

    const body = {
      username,
      password,
    };
    if (fullname.length == 0) {
      body.fullname = fullname;
    }

    const fetchAPI = async (url) => {
      try {
        const res = await axios.post(url, body);
        const data = res.data;
        localStorage.setItem("access-token", data.data.accessToken);
        navigate("/profile");
      } catch (error) {
        setResponseAPI(error.response.data.message);
      }
    };
    fetchAPI(urlAPIRegister);

    const inputUsername = document.querySelector("#username");
    const inputPassword = document.querySelector("#password");
    inputUsername.value = "";
    inputPassword.value = "";
  };

  return (
    <>
      <form method="post" className={styles.form} onSubmit={handleSubmit}>
        <InputForm
          type="text"
          idName="fullname"
          placeholder="Full name"
          onChange={handleErrorInput}
        />

        <InputForm
          type="text"
          idName="username"
          placeholder="Username"
          onChange={handleErrorInput}
        />

        {errorInput.username && (
          <p className={styles.errorInputMessage}>{errorInput.username}</p>
        )}

        <InputForm
          type="password"
          idName="password"
          placeholder="Password"
          onChange={handleErrorInput}
        />

        {errorInput.password && (
          <p className={styles.errorInputMessage}>{errorInput.password}</p>
        )}

        {responseAPI && (
          <p className={styles.errorLoginMessage}>{responseAPI}</p>
        )}

        <button type="submit" className={styles.button}>
          Sign up
        </button>

        <p>
          <Link to={basicRouteList.login} className={styles.linkSignUp}>
            Already have an account?
          </Link>
        </p>
      </form>
    </>
  );
}

export default Register;
