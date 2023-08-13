import Image from "next/image";
import styles from "./page.module.css";
import BlogCard from "@/components/blog-card/BlogCard";

import { Post } from "@/types/interface";
import { featuredPosts } from "@/data/blogData";

type Props = {};

function page({}: Props) {
  const topPosts: Post[] = featuredPosts.slice(0, 3);
  return (
    <section className={styles.container}>
      <section className={styles.main}>
        <div className={styles.top}>
          <h1 className={styles.headText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            provident?
          </h1>
          <span className={styles.dateText}>Jul 11, 2023</span>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/images/blogDetail01.jpg"
            fill={true}
            alt="image"
            className={styles.image}
          />
        </div>

        <div className={styles.bottom}>
          <p className={styles.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facere
            officiis nisi culpa dicta autem!
          </p>
          <p className={styles.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            quaerat ab, tenetur quia ullam voluptates incidunt molestiae facere
            porro omnis! Maxime obcaecati recusandae non corporis eaque eos
            assumenda quo hic dolores. Labore voluptatem ea hic.
          </p>
          <p className={styles.para}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            optio nihil iste repudiandae maxime aspernatur corporis reiciendis
            exercitationem architecto incidunt! Asperiores, natus. Deleniti
            nihil corporis repellendus voluptatem nulla eveniet eum iure in
            aliquid natus earum non magni quia, consectetur vitae nostrum sit
            ut. Accusamus, illum voluptatum beatae reprehenderit corporis, nulla
            sunt officiis tenetur qui ipsa, commodi et molestias dignissimos in
            consequuntur aliquam. Cum error ut magnam corrupti, quaerat officia
            dolorum ad explicabo. Aspernatur dignissimos, dolore optio aut est
            ratione iusto!
          </p>
          <p className={styles.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            obcaecati, repellat voluptatem nihil minus adipisci ducimus facere.
            Sit ipsum cupiditate qui eos nam id repellendus, molestias quaerat
            iure aperiam reprehenderit.
          </p>
        </div>
      </section>

      <section className={styles.aside}>
        <h4 className={styles.relatedHeading}>related</h4>
        <div className={styles.cardWrapper}>
          {topPosts.map((post: Post) => (
            <BlogCard post={post} key={Math.random() * 10000000} />
          ))}
        </div>
      </section>
    </section>
  );
}

export default page;
