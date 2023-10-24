// components/Login.tsx
import React from "react";
import SignupForm from "./SignupForm";

import styles from "./page.module.css";

const Signup: React.FC = () => {
  return (
    <div className={styles.SignUpContainer}>
      <h1>Sign up</h1>
      <SignupForm />
    </div>
  );
};

export default Signup;
