import Image from "next/image";
import styles from "./testimonials.module.css";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
// 
type Props = {};

interface imageIndices {
  first: number;
  second: number;
  third: number;
}

const Testimonials = (props: Props) => {
  const images: string[] = [
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4071709/pexels-photo-4071709.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/1937791/pexels-photo-1937791.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
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
        <p  className={styles.quoteRole}>Mathematics Teacher</p>
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
