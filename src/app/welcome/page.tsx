import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/Header";

type Props = {};

function page({}: Props) {
  return (
    <>
      <Header text="founder's note" />
      <section className={styles.container}>
        <div className={styles.midDiv}>
          <div className={styles.topImgWrapper}>
            <Image
              src="/images/Founders.jpg"
              alt="ict centre"
              fill={true}
              style={{ borderRadius: ".25em", objectFit: "cover" }}
            />
          </div>
          <div className={styles.welcomeDiv}>
            <p className={styles.welcomeText}>Dear Parents, Students, and Esteemed Guests,</p>

            <p className={styles.welcomeText}>
              It is with immense joy that we welcome you to St. Michael the
              Archangel Academy Makurdi.
            </p>

            <p className={styles.welcomeText}>
              Our journey began on September 10, 2018, guided by a profound
              vision - a vision to create a school where children would not only
              excel in their achievements but also be inspired to continue
              learning in the future. This vision became the driving force
              behind our mission.
            </p>

            <p className={styles.welcomeText}>
              Our motto, &quot;The First Step to Excellence,&quot; reminds us that every
              journey begins with a single step. Each child who walks through
              our doors takes that crucial first step toward a future filled
              with limitless possibilities. Our goal is to support and guide
              them on this journey, ensuring that they grow not only
              academically but also as responsible, compassionate, and ethical
              individuals.
            </p>

            <p className={styles.welcomeText}>
              As the founders of this institution, we are humbled by the
              dedication of our staff, the enthusiasm of our students, and the
              unwavering support of our parents and the community. Together, we
              have transformed a vision into a thriving reality, and I am
              excited about the boundless potential that lies ahead.
            </p>

            <p className={styles.welcomeText}>
              We invite you all to join us in this remarkable educational
              adventure, where every day is an opportunity to learn, grow, and
              aspire to greatness. Together, we shall continue to uphold the
              values that define us, celebrate the diversity that enriches us,
              and strive for excellence in all that we do.
            </p>

            <p className={styles.welcomeText}>
              Thank you for entrusting us with the education and development of
              your children. Together, we shall inspire and shape the leaders
              and learners of tomorrow.
            </p>

            <p className={styles.welcomeText}>With warm regards,</p>

            <p className={styles.welcomeText}>
              Mr & Mrs. Ezenwaka
              <br />
              Founders, St. Michael the Archangel Academy Makurdi.
            </p>
          </div>
        </div>

        {/* management */}
      </section>
    </>
  );
}

export default page;
