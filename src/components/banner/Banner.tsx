"use client";

import Image from "next/image";
import styles from "./banner.module.css";
import { useState } from "react";

// type Props = {};

function Banner() {
  const [image, setImage] = useState<string[]>([
    "/images/banner001.jpeg",
    "/images/banner002.jpeg",
    "/images/banner003.jpeg",
  ]);

  const [currIndex, setCurrIndex] = useState<number>(1);

  const handleLeft = (evt: React.MouseEvent) => {
    evt.preventDefault();
    if (currIndex === 0) {
      setCurrIndex(2);
    } else {
      setCurrIndex((prev) => prev - 1);
    }
  };

  const handleRight = (evt: React.MouseEvent) => {
    evt.preventDefault();
    if (currIndex === 2) {
      setCurrIndex(0);
    } else {
      setCurrIndex((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.container}>
      {/* banner */}
      <section className={styles.banner}>
        <Image
          src={image[currIndex]}
          alt="banner"
          width={1000}
          height={700}
          className={styles.bannerImg}
        />
      {/* forward/backward icons */}
        <div className={styles.left} onClick={handleLeft}>
          &lsaquo;
        </div>
        <div className={styles.right} onClick={handleRight}>
          &rsaquo;
        </div>
      </section>
    </div>
  );
}

export default Banner;
