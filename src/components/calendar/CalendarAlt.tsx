"use client";

import { useState } from "react";
import styles from "./calendaralt.module.css";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

interface CalendarInfo {
  day: string;
  month: string;
  year: number;
  header: string;
  comment: string;
  idx: number;
}

const CalendarAlt = () => {
  const [translateIndex, setTranslateIndex] = useState<number>(0);
  const dates: CalendarInfo[] = [
    {
      day: "02",
      month: "jan",
      year: 2023,
      header: "resumption",
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugit accusantium veniam! first",
      idx: 1,
    },
    {
      day: "19",
      month: "feb",
      year: 2024,
      header: "resumption",
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugit accusantium veniam! second",
      idx: 1,
    },
    {
      day: "29",
      month: "dec",
      year: 2023,
      header: "resumption",
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugit accusantium veniam last",
      idx: 1,
    },
  ];

  const handleMoveUp = () => {
    if (translateIndex < dates.length - 1) {
      setTranslateIndex((prevIndex) => prevIndex + 1);
    } else setTranslateIndex(0);
  };

  const handleMoveDown = () => {
    if (translateIndex > 0) {
      setTranslateIndex((prevIndex) => prevIndex - 1);
    } else setTranslateIndex(dates.length - 1);
  };

  return (
    <div className={styles.container} id="calendar">
      <h4 className={styles.heading}>Calendar</h4>

      <div className={styles.wrapper}>
        <div className={styles.leftWrapper}>
          {dates.map((date: CalendarInfo, index) => (
            <div
              className={styles.left}
              key={Math.random() * 1000}
              style={{ top: `${100 * (index - translateIndex)}%` }}
            >
              <h4 className={styles.header}>header</h4>
              <p className={styles.comment}>{date.comment}</p>
            </div>
          ))}
        </div>
        <div className={styles.right}>
          <div className={styles.topIconDiv} onClick={handleMoveUp}>
            <MdArrowDropUp className={styles.icon} />
          </div>
          <div className={styles.mid}>
            {dates.map((date: CalendarInfo, index) => (
              <div
                className={styles.midToggle}
                style={{ display: translateIndex === index ? "flex" : "none" }}
                key={Math.random()*10000000}
              >
                <span className={styles.day}>{date.day}</span>
                <span className={styles.month}>{date.month}</span>
                <span className={styles.year}>{date.year}</span>
              </div>
            ))}
          </div>
          <div className={styles.bottomIconDiv} onClick={handleMoveDown}>
            <MdArrowDropDown className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};
//

export default CalendarAlt;
