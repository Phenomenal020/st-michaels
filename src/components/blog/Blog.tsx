"use client";

import styles from "./blog.module.css";

import { featuredPosts } from "@/data/blogData";
import BlogCard from "../blog-card/BlogCard";

import { Post } from "@/types/interface";
import Link from "next/link";

type Props = {};

const BlogSection = (props: Props) => {
  // show only the top 3 blogs
  const topPosts: Post[] = featuredPosts.slice(0, 3);

  return (
    <section className={styles.container}>
      <h2 className={styles.headerText}>Featured News</h2>
      <p className={styles.paraText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        perferendis itaque autem, aut voluptatum quidem tempore ex illo! Quo,
        nihil?
      </p>

      <div className={styles.cardWrapper}>
        {topPosts.map((post: Post) => (
          <Link href="/blog/123" key={Math.random() * 1000}>
            {/* <BlogCard post={post} key={Math.random()*1000}/> */}
            <BlogCard post={post} />
          </Link>
        ))}
      </div>

      <button className={styles.visitBlogBtn}>
        <Link href="/blog">see all activities &rarr;</Link>
      </button>
    </section>
  );
};

export default BlogSection;
