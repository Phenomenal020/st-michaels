import { useState, useEffect } from "react";
import styles from "./calendaralt.module.css";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import { CalendarInfo } from "@/types/interface";

import datesData from "../../data/dates";

const CalendarAlt = () => {
  const [translateIndex, setTranslateIndex] = useState<number>(0);
  // const [dates, setDates] = useState<CalendarInfo[]>([]);
  const [dates, setDates] = useState<CalendarInfo[]>(datesData);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const querySnapshot = await getDocs(collection(db, "calendar"));
  //       const fetchedDates: CalendarInfo[] = [];

  //       querySnapshot.forEach((doc) => {
  //         const data = doc.data();
  //         const calendarInfo: CalendarInfo = {
  //           day: data.day,
  //           month: data.month,
  //           year: data.year,
  //           header: data.header,
  //           comment: data.comment,
  //           idx: data.idx,
  //         };
  //         fetchedDates.push(calendarInfo);
  //       });

  //       setDates(fetchedDates);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
              key={date.idx}
              style={{ top: `${100 * (index - translateIndex)}%` }}
            >
              <h4 className={styles.header}>{date.header}</h4>
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
                key={date.idx}
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

export default CalendarAlt;
