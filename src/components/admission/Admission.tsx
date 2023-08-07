// import { ButtonBig } from "@/shared-components/Button";
import Link from "next/link";
import styles from "./admission.module.css";

type Props = {};

export default function Admission({}: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.card}>
        <h2 className={styles.header}>Admission Process</h2>
        <p className={styles.paraText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          voluptate dignissimos quas, qui ea aut aliquam deserunt consequatur
          sequi error sapiente deleniti cumque rem adipisci et provident tenetur
          impedit maiores accusantium odit velit eaque possimus! Culpa, sint?
          Dicta blanditiis quisquam pariatur minus dignissimos! Quia cumque at
          magnam nesciunt est minima.
        </p>
        <button className={styles.admissionBtn}><Link href="/admission-process">read more &rarr;</Link></button>
      </div>
    </section>
  );
}