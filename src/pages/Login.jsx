import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { basicRouteList } from "../routes/routeList";
import { URLAPI } from "../utils/constant";
import styles from "../styles/pages/login.register.module.css";

function Login() {
  const urlAPILogin = URLAPI + "/auth/login";
  const [errorInput, setErrorInput] = useState({
    username: "",
    password: "",
    api: "",
  });

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
      } catch (error) {
        alert(error.response.data.message);
      }
    };
    fetchAPI(urlAPILogin);
  };

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>Wallet</h1>
        <h2 className={styles.h2}>Sign in to your account</h2>
      </header>

      <form method="post" className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          className={styles.input}
          onChange={handleErrorInput}
        />
        {errorInput.username && (
          <p className={styles.errorInputMessage}>{errorInput.username}</p>
        )}

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className={styles.input}
          onChange={handleErrorInput}
        />
        {errorInput.password && (
          <p className={styles.errorInputMessage}>{errorInput.password}</p>
        )}

        {errorInput.api && (
          <p className={styles.errorLoginMessage}>
            Incorrect username or password
          </p>
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
