import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { URLAPI } from "../utils/constant";
import { basicRouteList } from "../routes/routeList";
import InputForm from "../components/auth/InputForm";
import styles from "../styles/pages/login.register.module.css";

function Login() {
  const navigate = useNavigate();
  const urlAPILogin = URLAPI + "/auth/login";
  const [errorInput, setErrorInput] = useState({
    username: "",
    password: "",
    api: "",
  });
  const [responseAPI, setResponseAPI] = useState("");

  const handleErrorInput = (e) => {
    const { name, value } = e.target;
    let errorMessage = "";

    if (value.length == 0) {
      errorMessage = "This field is required";
    } else if (name == "username" && value.length < 3) {
      errorMessage = "Username must be at least 3 characters";
    }

    setErrorInput({ ...errorInput, [name]: errorMessage });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // check error messages
    if (Object.values(errorInput).some((value) => value !== "")) {
      // todo - add modal
      alert("Please fill in the form correctly");
      return;
    }

    // extract data
    const form = e.target;
    const formData = new FormData(form);
    const username = formData.get("username");
    const password = formData.get("password");

    const fetchAPI = async (url) => {
      try {
        const res = await axios.post(url, { username, password });
        const data = res.data;
        localStorage.setItem("access-token", data.data.accessToken);
        navigate("/profile");
      } catch (error) {
        setResponseAPI(error.response.data.message);
      }
    };
    fetchAPI(urlAPILogin);

    const inputUsername = document.querySelector("#username");
    const inputPassword = document.querySelector("#password");
    inputUsername.value = "";
    inputPassword.value = "";
  };

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>Wallet</h1>
        <h2 className={styles.h2}>Sign in to your account</h2>
      </header>

      <form method="post" className={styles.form} onSubmit={handleSubmit}>
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

        {/* <p>
          <Link className={styles.linkSignUp}>Forgot password</Link>
        </p> */}

        <button type="submit" className={styles.button}>
          Sign in
        </button>

        <p>
          <Link to={basicRouteList.register} className={styles.linkSignUp}>
            Don&apos;t have an account?
          </Link>
        </p>
      </form>
    </>
  );
}

export default Login;
