import styles from "./header.module.css";

type Props = {
  text: string;
};

function Header({ text }: Props) {
  return (
    <section className={styles.container}>
      <h2 className={styles.headerText}>{text}</h2>
    </section>
  );
}

export default Header;
