import Image from "next/image";
import styles from "./anthem.module.css";

const Anthem = () => {
  return (
    <section>
      <h4 className={styles.header1}><span className={styles.headerSpan}>about the school</span></h4>
      <div className={styles.aboutDiv}>
        <div className={styles.topImgWrapper}>
          <Image
            src="/images/schoolImg.jpeg"
            alt="the school"
            fill={true}
            style={{ borderRadius: "4px", objectFit: "cover" }}
          />
        </div>
        <p className={styles.aboutText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere illo
          maiores non animi sed, excepturi quasi officiis optio et vel. Eius
          nobis placeat alias modi. Omnis, fugit eos alias dolor eaque ab ipsum
          porro itaque non, corporis voluptate accusamus mollitia tenetur
          impedit eum consequuntur perferendis perspiciatis. Animi illum eaque
          laboriosam exercitationem quia facere necessitatibus laborum voluptas,
          rerum quibusdam quas ipsam nemo minima, sed magnam! Aperiam officia
          vero vitae debitis ipsum ratione aspernatur! Culpa adipisci
          consequatur maxime facilis doloribus autem natus veniam iusto. Quidem
          perferendis ut laboriosam quos possimus obcaecati alias eius amet
          tempore reiciendis recusandae dolorem praesentium, dolore, dolorum
          necessitatibus. Vero laboriosam, porro quis natus ea excepturi
          doloremque consectetur sapiente hic voluptates laborum veritatis
          eveniet sit autem obcaecati veniam similique quo. Libero, fugit sed
          consequuntur a nobis totam quod temporibus ipsa, odit harum et,
          perferendis corrupti voluptate mollitia accusamus saepe dolor maiores
          iusto ad id fuga tempora eius culpa nemo?
          <br />
          rerum quibusdam quas ipsam nemo minima, sed magnam! Aperiam officia
          vero vitae debitis ipsum ratione aspernatur! Culpa adipisci
          consequatur maxime facilis doloribus autem natus veniam iusto. Quidem
          perferendis ut laboriosam quos possimus obcaecati alias eius amet
          tempore reiciendis recusandae dolorem praesentium, dolore, dolorum
          necessitatibus. Vero laboriosam, porro quis natus ea excepturi
          doloremque consectetur sapiente hic voluptates laborum veritatis
          eveniet sit autem obcaecati veniam similique quo. Libero, fugit sed
          consequuntur a nobis totam quod temporibus ipsa, odit harum et,
          perferendis corrupti voluptate mollitia accusamus saepe dolor maiores
          iusto ad id fuga tempora eius culpa nemo?
        </p>
      </div>

      <div className={styles.mainWrapper}>
        <div className={styles.left}>
          <h4 className={styles.header}>national anthem</h4>
          <p className={styles.aboutText}>
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
