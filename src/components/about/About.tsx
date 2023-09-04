import Image from "next/image";
import styles from "./about.module.css";
import Link from "next/link";

type Props = {};

const About = (props: Props) => {
  return (
    <section className={styles.container}>
      <h4 className={styles.welcomeText}>
        WELCOME TO ST.MICHAEL THE ARCHANGEL ACADEMY MAKURDI
      </h4>

      <div className={styles.wrapper}>
        <section className={styles.leftWrapper}>
          <Image
            src="/images/welcomeImg.jpeg"
            alt="welcome"
            fill={true}
            className={styles.missionImage}
          />
        </section>
        <section className={styles.rightWrapper}>
          <p className={styles.rightPara}>
            Welcome to St. Michael the Archangel Academy Makurdi, proudly
            serving the community with a commitment to nurturing young minds and
            guiding them on their educational journey towards excellence. At our
            esteemed institution, we believe that every step a child takes is a
            crucial one on the path to excellence. With our dedicated staff,
            enriching curriculum, and a supportive learning environment, we
            empower our students to take that first step and every subsequent
            one with confidence, enthusiasm, and a thirst for knowledge. Join us
            in shaping a brighter future for your child as we embark together on
            this remarkable educational adventure.
          </p>
          {/* <p className={styles.rightPara}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            hic vero maxime quis, fugit assumenda quaerat aliquam aliquid aut
            praesentium nam sint voluptatem asperiores veritatis doloribus est
            quasi beatae accusantium. Id, rerum libero? Architecto rem magni
            sequi atque unde incidunt.
          </p> */}

          <button className={styles.visitBlogBtn}>
            <Link href="/welcome">learn more &rarr;</Link>
          </button>
        </section>
      </div>
    </section>
  );
};

export default About;
