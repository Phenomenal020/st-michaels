import styles from "./button.module.css";

type Props = {
  text: string;
  backgroundColor: string;
  color: string;
  border: string;
};

// #568263  - color
// background-color: transparent;
// border: 0.2px solid #242540 !important;
export const ButtonSmall = ({
  text,
  backgroundColor,
  color,
  border,
}: Props) => {
  return <button className={styles.btnSmall}>{text} &rarr;</button>;
};

// border: 0.5px solid #ddd !important;
// color: #ddd;
// background-color: transparent;
export const ButtonBig = ({ text, backgroundColor, color, border }: Props) => {
  return <button className={styles.btnBig}>{text} &rarr;</button>;
};
