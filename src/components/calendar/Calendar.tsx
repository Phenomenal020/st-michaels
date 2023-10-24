import { useRouter } from "next/navigation"

import styles from "./calendar.module.css";

interface CalendarInfo {
  day: string;
  month: string;
  year: number;
  comment: string;
}

const Calendar = async () => {
  const router = useRouter();

  const res = await fetch("http://localhost:3000/api/tickets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(["hello"]),
  });

  const json = await res.json();
  if (json.error) {
    console.log(json.error.message);
  }
  if (json.data) {
    router.refresh();
    console.log(json.data);
  }

  const dates: CalendarInfo[] = [
    {
      day: "02",
      month: "january",
      year: 2023,
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugit accusantium veniam!",
    },
    {
      day: "19",
      month: "february",
      year: 2024,
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugit accusantium veniam!",
    },
    {
      day: "29",
      month: "december",
      year: 2023,
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugit accusantium veniam",
    },
  ];
  return (
    <div className={styles.container}>
      <h4 className={styles.header}>Calendar</h4>
      <div className={styles.wrapper}>
        {dates.map((date, index) => (
          <div className={styles.card} key={Math.random() * 1000}>
            <div className={styles.date}>
              <p className={styles.day}>{date.day}</p>
              <div className={styles.monthYearDiv}>
                <span>{date.month}</span>
                <span>{date.year}</span>
              </div>
            </div>
            <div className={styles.event}>{date.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
//

export default Calendar;
