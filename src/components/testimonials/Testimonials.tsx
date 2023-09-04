"use client";

import Image from "next/image";
import styles from "./testimonials.module.css";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../services/firebase";

type Props = {};

interface imageIndices {
  first: number;
  second: number;
  third: number;
}

const Testimonials = (props: Props) => {
  const images: string[] = [
    "/images/testimonial001.jpeg",
    "/images/testimonial002.jpg",
    "/images/testimonial003.jpeg",
    "/images/testimonial004.jpeg",
    "/images/testimonial005.jpeg",
    "/images/testimonial006.jpeg",
  ];

  const testimonials: string[] = [
    "The teachers at this school are amazing! They truly care about each student's success. The teachers at this school are amazing! They truly care about each student's success. The teachers at this school are amazing! They truly care about each student's success.",
    "I love the friendly and inclusive atmosphere of this school. I feel safe and supported here. I love the friendly and inclusive atmosphere of this school. I feel safe and supported here. I love the friendly and inclusive atmosphere of this school. I feel safe and supported here",
    "The school provides a nurturing environment that fosters both academic and personal growth.",
    "I love the friendly and inclusive atmosphere of this school. I feel safe and supported here. I love the friendly and inclusive atmosphere of this school. I feel safe and supported here. I love the friendly and inclusive atmosphere of this school. I feel safe and supported here.",
    "The school provides a nurturing environment that fosters both academic and personal growth.",
    "I love the friendly and inclusive atmosphere of this school. I feel safe and supported here. I love the friendly and inclusive atmosphere of this school. I feel safe and supported here. I love the friendly and inclusive atmosphere of this school. I feel safe and supported here. I love the friendly and inclusive atmosphere of this school. I feel safe and supported here.",
  ];

  const [position, setPosition] = useState<imageIndices>({
    first: 3,
    second: 4,
    third: 5,
  });

  const handleRight = () => {
    if (position.first <= 0) {
      setPosition({
        first: 5,
        second: 0,
        third: 1,
      });
    } else if (position.second <= 0) {
      setPosition({
        first: 4,
        second: 5,
        third: 0,
      });
    } else if (position.third <= 0) {
      setPosition({
        first: 3,
        second: 4,
        third: 5,
      });
    } else {
      setPosition((prev: imageIndices) => ({
        first: prev.first === 0 ? 5 : prev.first - 1,
        second: prev.second === 0 ? 5 : prev.second - 1,
        third: prev.third === 0 ? 5 : prev.third - 1,
      }));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleRight();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // console.log(position);

  return (
    <section className={styles.container}>
      <div className={styles.topDiv}>
        <FaQuoteLeft className={styles.quoteIconLeft} size={36} color="#fff" />
        <div className={styles.quoteBox}>
          <p className={styles.quotesPara}> {testimonials[position.second]}</p>
        </div>
        <p className={styles.quoteAuthor}>Amarachi Ezenwaka</p>
        <p className={styles.quoteRole}>Mathematics Teacher</p>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.imgWrapper}>
            <Image
              src={images[position.first]}
              alt="recommendation"
              fill={true}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.mid}>
          <div className={styles.midImgWrapper}>
            <Image
              src={images[position.second]}
              alt="recommendation"
              fill={true}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imgWrapper}>
            <Image
              src={images[position.third]}
              alt="recommendation"
              fill={true}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
