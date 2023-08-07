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
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="ict centre"
              fill={true}
              style={{ borderRadius: ".25em", objectFit: "cover" }}
            />
          </div>
          <p className={styles.welcomeText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero quis
            obcaecati voluptas quam molestiae illum quod praesentium impedit
            distinctio accusantium repellat ipsum modi, sed ut ducimus
            temporibus iste exerla? Ipsam accusantium ex nisi quidem enim
            impedit eos vero, laboriosam tenetur repellendus hic harum
            similique. Nemo cupiditate asperiores autem consectetur quae
            perferendis quas reprehend magnam autem illo! Voluptas, maxime quam.
            Perspiciatis ea commodi, doloribus eaque nostrum molestiae quia
            earum, rerum porro nulla minima quae saepe voluptas ipsam
            consequatur neque eos natus quo velit hic eligendi. Eos hic cumque
            amet tempore natus exercitationem. aque nostrum molestiae quia
            earum, rerum porro nulla minima quae saepe voluptas ipsam
            consequatur neque eos natus quo velit hic eligendi. Eos hic cumque
            amet tempore natus exercitationem.  
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero quis
            obcaecati voluptas quam molestiae illum quod praesentium impedit
            distinctio accusantium repellat ipsum modi, sed ut ducimus
            temporibus iste exerla? Ipsam accusantium ex nisi quidem enim
            impedit eos vero, laboriosam tenetur repellendus hic harum
            similique. Nemo cupiditate asperiores autem consectetur quae
            perferendis quas reprehend magnam autem illo! Voluptas, maxime quam.
            Perspiciatis ea commodi, doloribus eaque nostrum molestiae quia
            earum, rerum porro nulla minima quae saepe voluptas ipsam
            consequatur neque eos natus quo velit hic eligendi. Eos hic cumque
            amet tempore natus exercitationem. aque nostrum molestiae quia
            earum, rerum porro nulla minima quae saepe voluptas ipsam
            consequatur neque eos natus quo velit hic eligendi. Eos hic cumque
            amet tempore natus exercitationem.
          </p>
        </div>

        {/* management */}
      </section>
    </>
  );
}

export default page;
