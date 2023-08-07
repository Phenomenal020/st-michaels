import Image from "next/image";
import styles from "./blogcard.module.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import Link from "next/link";

import { Post } from "@/types/interface";

type Props = {
  post: Post;
};

function BlogCard({ post }: Props) {
  return (
    <section className={styles.card} key={Math.random() * 1000}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={post.imgSrc}
          alt={post.header}
          fill={true}
        />
      </div>
      <div className={styles.bodyWrapper}>
        <span className={styles.date}>
          <AiOutlineClockCircle fontSize={12} style={{ marginRight: "4px" }} />
          {post.date}
        </span>
        <h4 className={styles.categoryText}>{post.header}</h4>
        <p className={styles.categorySampleText}>{post.body}</p>
        <Link href="/blog" className={styles.more}>
          see more
        </Link>
      </div>
    </section>
  );
}

export default BlogCard;
