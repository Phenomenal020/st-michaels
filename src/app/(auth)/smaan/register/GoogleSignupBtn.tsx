"use client";

import React from "react";
// import { supabase } from "../utils/supabase";

import styles from "./page.module.css";

const GoogleSignupBtn: React.FC = () => {
  // const handleSupabaseLogin = async () => {
  //   // const { user, session, error } = await supabase.auth.signIn(
  //   //   { provider: "google" } // You can use other providers as well
  //   // );
  //   // if (error) {
  //   //   console.error("Supabase login error:", error);
  //   // } else {
  //   //   console.log("Supabase login successful:", user);
  //   // }
  // };

  return (
    <button className={styles.googleSignupBtn} disabled>
      Sign up with Google
    </button>
  );
};

export default GoogleSignupBtn;
