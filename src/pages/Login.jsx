import { Link } from "react-router-dom";
import { basicRouteList } from "../routes/routeList";

import styles from "../styles/pages/login.register.module.css";

function Login() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>Wallet</h1>
        <h2 className={styles.h2}>Sign in to your account</h2>
      </header>

      <form method="post" className={styles.form}>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
          className={styles.input}
        />
        <p className={styles.errorInputMessage}>This field is required</p>

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <p className={styles.errorInputMessage}>This field is required</p>

        <p className={styles.errorLoginMessage}>
          Incorrect username or password
        </p>

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
