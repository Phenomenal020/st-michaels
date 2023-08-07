import Mission from "@/components/mission/Mission";
import styles from "./page.module.css";
import Anthem from "@/components/anthem/Anthem";
import Header from "@/components/header/Header";

type Props = {};

function page({}: Props) {
  return (
    <>
      <Header text="about us" />
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <Mission />
          <Anthem />
        </div>
      </section>
    </>
  );
}

export default page;
// 