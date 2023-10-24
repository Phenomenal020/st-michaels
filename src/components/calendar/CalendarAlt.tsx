import { useState, useEffect, useCallback } from "react";
import styles from "./calendaralt.module.css";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import { CalendarInfo } from "@/types/interface";

import { useRouter } from "next/navigation";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "@/types/database.types";

const CalendarAlt = () => {
  const [translateIndex, setTranslateIndex] = useState<number>(0);
  // const [dates, setDates] = useState<CalendarInfo[]>([]);
  const [dates, setDates] = useState<CalendarInfo[]>([]);
  const [error, setError] = useState<string | null>(null);
  // const [data, setData] = useState<CalendarInfo[] | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const supabase = createClientComponentClient<Database>();

  // console.log("translateIndex", translateIndex);

  const getCalendar = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase.from("calendar").select();
      // .eq('id', user?.id)
      // .single()

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        // console.log("data arrived", data);
        setDates(data);
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  useEffect(() => {
    getCalendar();
  }, [getCalendar]);

  // console.log("Checking calendar error", error);
  // console.log("Checking calendar data", dates);

  const handleMoveDown = () => {
    if (translateIndex < dates.length - 1 || translateIndex === 0) {
      setTranslateIndex((prevIndex) => prevIndex + 1);
    } else setTranslateIndex(0);
  };

  const handleMoveUp = () => {
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
              <h4 className={styles.header}>{date.title}</h4>
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
                <span className={styles.month}>{date.month.toUpperCase()}</span>
                <span className={styles.year}>{date.year}</span>
              </div>
            ))}
          </div>
          <div className={styles.bottomIconDiv} onClick={handleMoveDown}>
            {/* <MdArrowDropDown className={styles.icon} /> */}
            <MdArrowDropDown className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarAlt;
