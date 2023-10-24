// components/Login.tsx
import React from "react";
import LoginForm from "./LoginForm";

import styles from "./page.module.css";
import AuthForm from "./AuthForm";

const Signup: React.FC = () => {
  return (
    <div className={styles.LoginContainer}>
      <h1>Log in</h1>
      <LoginForm />
      {/* <AuthForm /> */}
    </div>
  );
};

export default Signup;
