import Image from "next/image";
import styles from "./mission.module.css";
import { ReactElement } from "react";
// import { BsFillEyeFill } from "react-icons/bs";
import missionImg from "../../../public/icons/ourMission.png";
import visionImg from "../../../public/icons/ourVision.png";
import goalsImg from "../../../public/icons/ourGoals.png";
import coreValuesImg from "../../../public/icons/ourCoreValues.png";

type Props = {};

const Mission = (props: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.column}>
          {/* <BsFillEyeFill size={60} color="#fff" /> */}
          <Image
            src={visionImg}
            width={70}
            height={70}
            alt="vision icon"
            className={styles.icon}
          />
          <h4 className={styles.header}>our vision</h4>
          <p className={styles.columnText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            eaque harum earum dolore quos impedit, sunt, obcaecati sint autem
          </p>
        </section>

        <section className={styles.column}>
          {/* <BsFillEyeFill size={60} color="#fff" /> */}
          <Image
            src={missionImg}
            width={70}
            height={70}
            alt="mission icon"
            className={styles.icon}
          />
          <h4 className={styles.header}>our mission</h4>
          <p className={styles.columnText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            eaque harum earum dolore quos impedit, sunt, obcaecati sint autem
          </p>
        </section>

        <section className={styles.column}>
          {/* <BsFillEyeFill size={60} color="#fff" /> */}
          <Image
            src={goalsImg}
            width={70}
            height={70}
            alt="our goals icon"
            className={styles.icon}
          />
          <h4 className={styles.header}>our goals</h4>
          <p className={styles.columnText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            eaque harum earum dolore quos impedit, sunt, obcaecati sint autem
          </p>
        </section>

        <section className={styles.column}>
          {/* <BsFillEyeFill size={60} color="#fff" /> */}
          <Image
            src={coreValuesImg}
            width={70}
            height={70}
            alt="our core values"
            className={styles.icon}
          />
          <h4 className={styles.header}>our core values</h4>
          <p className={styles.columnText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            eaque harum earum dolore quos impedit, sunt, obcaecati sint autem
          </p>
        </section>
      </div>
    </section>
  );
};

export default Mission;

// Icon by <a class="link_pro" href="https://freeicons.io/succes-icon-set-32642/business-development-flag-mission-mountain-startup-success-icon-1240446">manshagraphics</a>
//                 on <a href="https://freeicons.io">freeicons.io</a>
