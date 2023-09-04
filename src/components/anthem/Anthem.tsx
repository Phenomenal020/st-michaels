import Image from "next/image";
import styles from "./anthem.module.css";

const Anthem = () => {
  return (
    <section>
      <h4 className={styles.header1}>
        <span className={styles.headerSpan}>about the school</span>
      </h4>
      <div className={styles.aboutDiv}>
        <div className={styles.topImgWrapper}>
          <Image
            src="/images/schoolImg.jpeg"
            alt="the school"
            fill={true}
            style={{ borderRadius: "4px", objectFit: "cover" }}
          />
        </div>
        <div className={styles.parasWrapper}>
          <p className={styles.aboutText}>
            St. Michael the Archangel Academy Makurdi, a beacon of educational
            excellence, has a remarkable history that began on September 10,
            2018. Founded by Mr. Mathew Ezenwaka and Mrs.Stella Ezenwaka, the
            school opened its doors with a population of 141 eager pupils,
            housed in 10 classrooms, and supported by a dedicated team of
            fourteen staff members.
          </p>
          <p className={styles.aboutText}>
            One of the school's earliest symbols of unity and pride was its
            anthem, a poetic masterpiece crafted by Miss Ezenwaka Augusta
            Amarachi. This anthem, not only rich in words but deeply resonant in
            meaning, was brought to life through the musical talents of Mr.
            Henry Amagen, creating a melody that has been sung with heartfelt
            enthusiasm by generations of students.
          </p>
          <p className={styles.aboutText}>
            As the sun rose on that memorable first day of resumption, one name
            etched itself into the annals of the school's history - Master
            Onubuiyi Miracle. With a backpack filled with dreams and a heart
            brimming with excitement, he became the very first pupil to arrive,
            setting a precedent for the curiosity, determination, and spirit of
            exploration that would become synonymous with St. Michael the
            Archangel Academy, Makurdi.
          </p>
          <p className={styles.aboutText}>
            From these humble beginnings, St. Michael the Archangel Academy
            Makurdi has flourished into a nurturing institution dedicated to
            academic excellence, character development, and a commitment to
            shaping future generations. The school's journey is a testament to
            the enduring vision of its founder and the unwavering dedication of
            its staff, students, and the broader community. As it continues to
            evolve and inspire, the school's history remains a source of pride
            and motivation for all who walk its hallowed halls.
          </p>
        </div>
      </div>

      <div className={styles.mainWrapper}>
        <div className={styles.left}>
          <h4 className={styles.header}>national anthem</h4>
          <p className={styles.anthemText}>
            Arise, O compatriots
            <br />
            Nigeria's call obey
            <br />
            To serve our fatherland
            <br />
            With love and strength and faith
            <br />
            The labour of our heroes past
            <br />
            Shall never be in vain
            <br />
            To serve with heart and might
            <br />
            One nation bound in freedom, peace, and unity.
          </p>
          <p className={styles.anthemText}>
            Oh God of creation,
            <br />
            Direct our noble cause
            <br />
            Guide our leader’s right
            <br />
            Help our youth the truth to know
            <br />
            In love and honesty to grow
            <br />
            And living just and true
            <br />
            Great lofty heights attain
            <br />
            To build a nation where peace and justice shall reign.
          </p>
        </div>

        <div className={styles.right}>
          <h4 className={styles.header}>our anthem</h4>
          <p className={styles.anthemText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Minus,placeat velit, necessitatibus porro odit rem perferendis vero
            itaque delectus doloribus dolor sed repudiandae? Dolorem corporis
            iure ea, repudiandae odit magnam. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Minus,placeat velit, necessitatibus
            porro odit rem perferendis vero itaque delectus doloribus dolor sed
            repudiandae? Dolorem corporis iure ea, repudiandae odit magnam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Minus,placeat velit, necessitatibus porro odit rem perferendis vero
            itaque delectus doloribus dolor sed repudiandae? Dolorem corporis
            iure ea, repudiandae odit magnam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Anthem;
