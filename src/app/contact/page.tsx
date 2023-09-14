import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";
import styles from "./page.module.css";
import Header from "@/components/header/Header";

import { BsSend } from "react-icons/bs";

type Props = {};

function page({}: Props) {
  return (
    <>
      <Header text="Contact us" />

      <section className={styles.container}>
        <div className={styles.contactWrapper}>
          <div className={styles.contactDetails}>
            <div>
              <h4 className={styles.questionsHeader}>Have any Questions?</h4>
              <p className={styles.happyText}>We are happy to hear from you</p>
              <div className={styles.box}>
                <h4 className={styles.boxHeader}>
                  <span>
                    <AiOutlineHome size={20} color="#273F6F" />
                  </span>
                  <b style={{ marginLeft: ".25em" }}>address</b>
                </h4>
                <p className={styles.boxField}>
                  Address: No.4 Aliade Street Highlevel , Makurdi Benue State,
                  Nigeria. Opposite Bishop Murray medical centre Highlevel
                  Makurdi.
                </p>
              </div>
              <div className={styles.box}>
                <h4 className={styles.boxHeader}>
                  <span>
                    <AiOutlineMail size={20} color="#273F6F" />
                  </span>
                  <b style={{ marginLeft: ".25em" }}>email</b>
                </h4>
                <p className={styles.boxField}>
                  St.michaelthearchangelacademymakurdi2@gmail.com
                </p>
              </div>
              <div className={styles.box}>
                <h4 className={styles.boxHeader}>
                  <span>
                    <AiOutlinePhone size={20} color="#273F6F" />
                  </span>
                  <b style={{ marginLeft: "4px" }}>phone number</b>
                </h4>
                <p className={styles.boxField}>
                  +234 (0) 806 9371 264, +234 (0) 704 4362 422
                </p>
              </div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.6224695424953!2d8.5324221!3d7.7235923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105081b5bf555d3f%3A0xce4723f7aa0f48d!2sSt.Micheal%20The%20Archangel%20Academy!5e0!3m2!1sen!2sng!4v1689471807820!5m2!1sen!2sng"
                width="600"
                height="450"
                loading="lazy"
                id="map"
                style={{
                  border: 0,
                  width: "100%",
                  aspectRatio: "4/3",
                  maxHeight: "300px",
                  marginTop: "1em",
                }}
              ></iframe>
            </div>
          </div>

          <div className={styles.contactForm}>
            <form className={styles.form}>
              <div className={styles.iconWrapper}>
                <BsSend size={40} color="#fff" />
              </div>
              <h4 className={styles.formHeader}>General enquiry</h4>
              <input
                type="text"
                placeholder="your full name"
                name="name"
                id="name"
                className={styles.formInput}
              />
              <input
                type="email"
                placeholder="your email address"
                name="email"
                id="email"
                className={styles.formInput}
              />
              <input
                type="tel"
                placeholder="your phone number"
                name="phone"
                id="phone"
                className={styles.formInput}
              />
              <textarea
                name="enquiry"
                id="enquiry"
                cols={30}
                rows={10}
                placeholder="your enquiry"
                className={styles.formTextArea}
              ></textarea>
              <button type="submit" className={styles.submitBtn}>
                submit enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
