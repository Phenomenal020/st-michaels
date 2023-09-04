"use client";

import Image from "next/image";
import styles from "./banner.module.css";
import { useState } from "react";
import { images } from "@/data/bannerData";
// import { BannerImage } from "@/types/interface";

function Banner() {
  // const [bannerImgs, setBannerImgs] = useState<BannerImage[]>(images);
  const [currIndex, setCurrIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(images?.length - 1);

  const moveRight = () => {
    if (currIndex === lastIndex) {
      setCurrIndex(0);
    } else setCurrIndex((prev) => prev + 1);
  };

  const moveLeft = () => {
    if (currIndex === 0) {
      setCurrIndex(lastIndex);
    } else setCurrIndex((prev) => prev - 1);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.wrapper}
        style={{
          width: `${images.length * 100}vw`,
          transform: `translateX(-${currIndex * 100}vw)`,
        }}
      >
        {images.map((image) => {
          return (
            <section className={styles.banner}>
              <Image
                src={image.source}
                alt="banner"
                fill={true}
                className={styles.bannerImg}
                key={image.index}
              />
              <h2></h2>
            </section>
          );
        })}
      </div>

      {/* forward/backward icons */}
      <div className={styles.left} onClick={moveLeft}>
        &lsaquo;
      </div>
      <div className={styles.right} onClick={moveRight}>
        &rsaquo;
      </div>
    </div>
  );
}

export default Banner;
