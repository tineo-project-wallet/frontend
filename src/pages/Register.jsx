import { Link } from "react-router-dom";
import { basicRouteList } from "../routes/routeList";

import styles from "../styles/pages/login.register.module.css";

function Register() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>Wallet</h1>
        <h2 className={styles.h2}>Create your account</h2>
      </header>

      <form method="post" className={styles.form}>
        <input
          type="text"
          id="fullname"
          name="fullname"
          placeholder="Full name"
          className={styles.input}
        />

        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username*"
          required
          className={styles.input}
        />
        <p className={styles.errorInputMessage}>This field is required</p>

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password*"
          required
          className={styles.input}
        />
        <p className={styles.errorInputMessage}>This field is required</p>

        <p className={styles.errorLoginMessage}>
          Incorrect username or password
        </p>

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
