import Image from "next/image";
import styles from "./banneralt.module.css";
import { useState } from "react";
import { bannerInfo } from "@/types/interface";
import Link from "next/link";

function BannerAlt() {
  const [bannerHeaders, setBannerHeaders] = useState<bannerInfo[]>([
    {
      title: "First Step to Excellence",
      subtitle: "The best choice for your lovely kids",
      buttonText: "Learn more",
      link: "/about",
      imageSrc: "/images/banner001.jpg",
      index: 0,
    },
    {
      title: "School Admissions Now Open",
      subtitle: "The best choice for your lovely kids",
      buttonText: "Register Now",
      link: "/admission-process",
      imageSrc: "/images/banner002.jpg",
      index: 1,
    },
    {
      title: "First Step to Excellence",
      subtitle: "The best choice for your lovely kids",
      buttonText: "Learn more",
      link: "/about",
      imageSrc: "/images/banner003.jpg",
      index: 2,
    },
  ]);

  const [currIndex, setCurrIndex] = useState<number>(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);

  const handleLeft = () => {
    const newIndex = (currIndex - 1 + bannerHeaders.length) % bannerHeaders.length;
    setNextIndex(newIndex);
    setTimeout(() => {
      setCurrIndex(newIndex);
      setNextIndex(null);
    }, 500); // Delay to allow fade-out transition
  };

  const handleRight = () => {
    const newIndex = (currIndex + 1) % bannerHeaders.length;
    setNextIndex(newIndex);
    setTimeout(() => {
      setCurrIndex(newIndex);
      setNextIndex(null);
    }, 500); // Delay to allow fade-out transition
  };

  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        {bannerHeaders.map((image) => (
          <div
            key={image.index}
            className={`${styles.bannerDiv} ${
              image.index === currIndex ? styles.active : ""
            } ${image.index === nextIndex ? styles.next : ""}`}
          >
            <Image
              src={image.imageSrc}
              alt="banner"
              fill={true}
              className={styles.bannerImg}
            />
            <div className={styles.infoDiv}>
              <h2 className={styles.title}>{image.title}</h2>
              <p className={styles.subtitle}>{image.subtitle}</p>
              <button className={styles.visitBlogBtn}>
                <Link href={image.link}>{image.buttonText}</Link>
              </button>
            </div>
          </div>
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