"use client";

import styles from "./navbar.module.css";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

type Props = {};

function Logout({}: Props) {
  const router = useRouter();
  const handleLogout = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();
    if (!error) {
      // console.log("logged out");
      router.push("/");
      router.refresh();
    }
    //   if(error) {
    //     console.log(error)
    //   }
  };

  return (
    <li className={styles.navList}>
      <button className={styles.logoutBtn} onClick={handleLogout}>
        Logout
      </button>
    </li>
  );
}

export default Logout;
