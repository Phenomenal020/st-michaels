import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/Header";

type Props = {};

function page({}: Props) {
  return (
    <>
      <Header text="Admission Process" />
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.processWrapper}>
            <div className={styles.right}>
              <Image
                src="https://images.pexels.com/photos/5905918/pexels-photo-5905918.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="admission"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.left}>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  <span>&#10148;</span>
                  <span> Complete the online application form.</span>
                </li>
                <li className={styles.li}>
                  <span>&#10148;</span>
                  <span>
                    Submit required documents, such as birth certificate and
                    previous academic records.
                  </span>
                </li>
                <li className={styles.li}>
                  <span>&#10148;</span>
                  <span>
                    Attend an admission interview with the school staff.
                  </span>
                </li>
                <li className={styles.li}>
                  <span>&#10148;</span>
                  <span>
                    Participate in an entrance examination, if applicable.
                  </span>
                </li>
                <li className={styles.li}>
                  <span>&#10148;</span>
                  <span>
                    Pay the admission fee within the specified deadline.
                  </span>
                </li>
                <li className={styles.li}>
                  <span>&#10148;</span>
                  <span>
                    Receive confirmation of admission and complete the
                    enrollment process.
                  </span>
                </li>
                <li className={styles.li}>
                  <span>&#10148;</span>
                  <span>
                    Receive confirmation of admission and complete the
                    enrollment process.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
