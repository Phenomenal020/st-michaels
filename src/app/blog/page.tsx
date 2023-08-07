import styles from "./page.module.css";
import Header from "@/components/header/Header";
import { featuredPosts } from "@/data/blogData";
import BlogCard from "@/components/blog-card/BlogCard";

import { Post } from "@/types/interface";

type Props = {};

function page({}: Props) {
  return (
    <>
      <Header text="Our Blog" />
      <section className={styles.container}>
        <div className={styles.cardWrapper}>
          {featuredPosts.map((post: Post) => (
            <BlogCard post={post} />
          ))}
        </div>
      </section>
    </>
  );
}

export default page;
// 