import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/Header";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Header text="our gallery" />
      <section className={styles.container}>
        <div className={styles.wrapper}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={Math.random() * 10000} className={styles.card}>
              <div className={styles.imgWrapper}>
                <Image
                  src="https://images.pexels.com/photos/5621950/pexels-photo-5621950.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="ict centre"
                  fill={true}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h4 className={styles.subHeader}>ict centre</h4>
              <p className={styles.paraText}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
                eos ipsa distinctio quod aperiam omnis quo accusantium quidem at
                deleniti, nulla laborum corrupti, enim voluptatem maxime atque
                ut nihil excepturi!
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
