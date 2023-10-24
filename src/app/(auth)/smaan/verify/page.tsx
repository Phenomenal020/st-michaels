// VerifyEmailPage.tsx

import React from "react";
import styles from "./page.module.css";

const VerifyEmailPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Verify Your Email</h1>
      <p className={styles.p}>
        Thank you for signing up! We&apos;ve sent you an email with a verification
        link.
        {/* Please click the link to verify your email address. */}
      </p>
      {/* <a className={styles.verifyLink} href="/verify">
        Click here to verify
      </a> */}
    </div>
  );
};

export default VerifyEmailPage;
