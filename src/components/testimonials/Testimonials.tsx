"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Image from "next/image";
import styles from "./testimonials.module.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../services/firebase";

type Props = {};

interface testimonial {
  left: string;
  main: string;
  right: string;
  comment: string;
  role: string;
  name: string;
}

const Testimonials = (props: Props) => {
  /* Custom styles for Swiper navigation buttons */

  const testimonials: testimonial[] = [
    {
      left: "/images/testimonial001.jpeg",
      main: "/images/testimonial002.jpg",
      right: "/images/testimonial003.jpeg",
      comment:
        "The teachers at this school are amazing! They truly care about each student's success. The teachers at this school are amazing! They truly care about each student's success. The teachers at this school are amazing! They truly care about each student's success.",
      role: "Mathematics teacher",
      name: "Amarachi Ezenwaka",
    },
    {
      left: "/images/testimonial002.jpg",
      main: "/images/testimonial003.jpeg",
      right: "/images/testimonial004.jpeg",
      comment:
        "I love the friendly and inclusive atmosphere of this school. I feel safe and supported here. I love the friendly and inclusive atmosphere of this school. I feel safe and supported here. I love the friendly and inclusive atmosphere of this school. I feel safe and supported here",
      role: "English teacher",
      name: "Kalu Stephen Eke",
    },
    {
      left: "/images/testimonial003.jpeg",
      main: "/images/testimonial004.jpeg",
      right: "/images/testimonial005.jpeg",
      comment:
        "The school provides a nurturing environment that fosters both academic and personal growth.",
      role: "Parent",
      name: "Joy Amadi",
    },
    {
      left: "/images/testimonial004.jpeg",
      main: "/images/testimonial005.jpeg",
      right: "/images/testimonial006.jpeg",
      comment:
        "I love the friendly and inclusive atmosphere of this school. I feel safe and supported here. I love the friendly and inclusive atmosphere of this school. I feel safe and supported here. I love the friendly and inclusive atmosphere of this school. I feel safe and supported here.",
      role: "Student",
      name: "Peace Gentle",
    },
    {
      left: "/images/testimonial005.jpeg",
      main: "/images/testimonial006.jpeg",
      right: "/images/testimonial001.jpeg",
      comment:
        "The school provides a nurturing environment that fosters both academic and personal growth.",
      role: "Receptionist",
      name: "Ada Precious",
    },
    {
      left: "/images/testimonial006.jpeg",
      main: "/images/testimonial001.jpeg",
      right: "/images/testimonial002.jpg",
      comment:
        "I love the friendly and inclusive atmosphere of this school. I feel safe and supported here. I love the friendly and inclusive atmosphere of this school. I feel safe and supported here. I love the friendly and inclusive atmosphere of this school. I feel safe and supported here. I love the friendly and inclusive atmosphere of this school. I feel safe and supported here.",
      role: "Head Boy",
      name: "Emmanuel James",
    },
  ];

  const customPrevButton = (
    <div className={styles.customPrevBtn}> &lsaquo;</div>
  );

  const customNextButton = (
    <div className={styles.customNextBtn}> &rsaquo;</div>
  );
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: `${styles.customPrevBtn}`,
          nextEl: "styles.customNextBtn",
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className={styles.container}
      >
        {testimonials.map((testimonial: testimonial) => {
          return (
            <SwiperSlide key={Math.random()*1000000}>
              <div className={styles.wrapper}>
                <div className={styles.topDiv}>
                  <FaQuoteLeft
                    className={styles.quoteIconLeft}
                    size={36}
                    color="#fff"
                  />
                  <div className={styles.quoteBox}>
                    <p className={styles.quotesPara}>{testimonial.comment}</p>
                  </div>
                  <p className={styles.quoteAuthor}>{testimonial.name}</p>
                  <p className={styles.quoteRole}>{testimonial.role}</p>
                </div>

                <div className={styles.commentWrapper}>
                  <div className={styles.left}>
                    <div className={styles.imgWrapper}>
                      <Image
                        src={testimonial.left}
                        alt="recommendation"
                        fill={true}
                        className={styles.image}
                      />
                    </div>
                  </div>
                  <div className={styles.mid}>
                    <div className={styles.midImgWrapper}>
                      <Image
                        src={testimonial.main}
                        alt="recommendation"
                        fill={true}
                        className={styles.image}
                      />
                    </div>
                  </div>
                  <div className={styles.right}>
                    <div className={styles.imgWrapper}>
                      <Image
                        src={testimonial.right}
                        alt="recommendation"
                        fill={true}
                        className={styles.image}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Testimonials;
