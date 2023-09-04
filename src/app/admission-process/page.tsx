import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/Header";

// import admissionImg from "../../../public/images/admissionProcess.jpeg"

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
                src="/images/admissionProcess.jpeg"
                alt="admission"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.left}>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  <span>&#10148;</span>
                  <span>
                    <b>Visit the School:</b>Begin the admission process by
                    visiting St. Michael the Archangel Academy in person.
                  </span>
                </li>
                <li className={styles.li}>
                  <span>&#10148;</span>
                  <span>
                    <b> Purchase Admission Forms: </b>Obtain the necessary
                    admission form&apos;s from the school&apos;s administrative
                    office.
                  </span>
                </li>
                <li className={styles.li}>
                  <span>&#10148;</span>
                  <span>
                    <b>Complete the Forms:</b> Fill out the admission forms
                    accurately and thoroughly.
                  </span>
                </li>
                <li className={styles.li}>
                  <span>&#10148;</span>
                  <span>
                    <b>Attach Documents:</b>Along with the completed forms,
                    attach essential documents such as a copy of the student&apos;s
                    birth certificate and a passport-sized photograph.
                  </span>
                </li>
                <li className={styles.li}>
                  <span>&#10148;</span>
                  <span>
                    <b>Submit the Application:</b>Return the completed forms,
                    along with the required documents, to the school&apos;s
                    administrative office.
                  </span>
                </li>
                <li className={styles.li}>
                  <span>&#10148;</span>
                  <span>
                    <b>Interview:</b>An interview will be carried out to assess
                    each applicant&apos;s eligibility and compatibility with the
                    school&apos;s values and mission.
                  </span>
                </li>
                {/* <li className={styles.li}>
                  <span>&#10148;</span>
                  <span>
                    Receive confirmation of admission and complete the
                    enrollment process.
                  </span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
