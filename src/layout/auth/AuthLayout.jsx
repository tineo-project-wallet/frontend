import { Outlet } from "react-router-dom";
import styles from "../../styles/layout/auth/auth.layout.module.css";

function AuthLayout() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>Wallet</h1>
        <h2 className={styles.h2}>Sign in to your account</h2>
      </header>

      <Outlet />
    </>
  );
}

export default AuthLayout;
