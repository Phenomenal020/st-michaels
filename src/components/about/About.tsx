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
            src="https://images.pexels.com/photos/8466790/pexels-photo-8466790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="welcome"
            fill={true}
            className={styles.missionImage}
          />
        </section>
        <section className={styles.rightWrapper}>
          <p className={styles.rightPara}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            tempora exercitationem eius ullam dolor nostrum aliquam quis velit,
            et voluptate asperiores architecto fuga dolores reiciendis!
            Sapiente, officiis voluptatum et eius molestiae esse cumque culpa
            fugit sed voluptas voluptate, repellendus qui ad nisi minima sit
            maiores rerum iste in animi officia.
          </p>
          <p className={styles.rightPara}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            hic vero maxime quis, fugit assumenda quaerat aliquam aliquid aut
            praesentium nam sint voluptatem asperiores veritatis doloribus est
            quasi beatae accusantium. Id, rerum libero? Architecto rem magni
            sequi atque unde incidunt.
          </p>

          <button className={styles.visitBlogBtn}>
            <Link href="/welcome">learn more &rarr;</Link>
          </button>
        </section>
      </div>
    </section>
  );
};

export default About;
