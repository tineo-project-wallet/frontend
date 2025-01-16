import { Link } from "react-router-dom";
import { basicRouteList } from "../routes/routeList";

function Login() {
  return (
    <>
      <h1>Wallet</h1>

      <h2>Welcome back</h2>

      <form method="post">
        <label htmlFor="email">
          Email address
          <input
            type="text"
            id="email"
            name="email"
            placeholder="demo@gmail.com"
            required
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*************"
            required
          />
        </label>

        <button type="submit">Sign in</button>
      </form>

      <p>
        <Link to={basicRouteList.register}>Don&apos;t have an account?</Link>
      </p>
    </>
  );
}

export default Login;
