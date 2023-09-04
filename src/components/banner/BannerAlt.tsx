"use client"

import Image from "next/image";
import styles from "./banneralt.module.css";
import { useState, useEffect } from "react";

function BannerAlt() {
  const images = [
    "/images/banner001.jpeg",
    "/images/banner002.jpeg",
    "/images/banner003.jpeg",
  ];

  const [currIndex, setCurrIndex] = useState<number>(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);

  const handleLeft = () => {
    const newIndex = (currIndex - 1 + images.length) % images.length;
    setNextIndex(newIndex);
    setTimeout(() => {
      setCurrIndex(newIndex);
      setNextIndex(null);
    }, 500); // Delay to allow fade-out transition
  };

  const handleRight = () => {
    const newIndex = (currIndex + 1) % images.length;
    setNextIndex(newIndex);
    setTimeout(() => {
      setCurrIndex(newIndex);
      setNextIndex(null);
    }, 500); // Delay to allow fade-out transition
  };

  const handleIndicatorClick = (index: number) => {
    setNextIndex(index);
    setTimeout(() => {
      setCurrIndex(index);
      setNextIndex(null);
    }, 5000);
  };

  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="banner"
            fill={true}
            className={`${styles.bannerImg} ${index === currIndex ? styles.active : ""} ${index === nextIndex ? styles.next : ""}`}
          />
        ))}
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

export default BannerAlt;
