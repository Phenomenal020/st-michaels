"use client";

// components/SignupForm.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import GoogleSignupBtn from "./GoogleSignupBtn";

import styles from "./page.module.css";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const SignupForm = () => {

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
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // to get code we can exchange for user session
        emailRedirectTo: `${window.location.origin}/api/auth/callback`,
      },
    });
    if (error) {
      setError(error.message);
    }
    if (!error) {
      router.push("/smaan/verify");
    }
  };

  return (
    <form className={styles.SignupForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        className={styles.signupInput}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className={styles.signupInput}
        value={password}
        onChange={handlePasswordChange}
        required
      />
      {error && <p className={styles.error}>{error}</p>}
      <button className={styles.signupBtn} type="submit">
        Sign up
      </button>
      <div className={styles.orDivider}>
        <div className={styles.line}></div>
        <span>OR</span>
        <div className={styles.line}></div>
      </div>
      <GoogleSignupBtn />
    </form>
  );
};

export default SignupForm;
