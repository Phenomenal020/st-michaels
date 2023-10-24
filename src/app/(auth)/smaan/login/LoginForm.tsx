"use client";

// components/SignupForm.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

import styles from "./page.module.css";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import GoogleLoginButton from "./GoogleLoginBtn";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleEmailChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(email, password);
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    }
    if (!error) {
      router.push("/");
      router.refresh()
    }
  };

  return (
    <form className={styles.LoginForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        className={styles.loginInput}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className={styles.loginInput}
        value={password}
        onChange={handlePasswordChange}
        required
      />
      {error && <p className={styles.error}>{error}</p>}
      <button className={styles.loginBtn} type="submit">
        Log in
      </button>
      <div className={styles.orDivider}>
        <div className={styles.line}></div>
        <span>OR</span>
        <div className={styles.line}></div>
      </div>
      <GoogleLoginButton />
    </form>
  );
};

export default LoginForm;
