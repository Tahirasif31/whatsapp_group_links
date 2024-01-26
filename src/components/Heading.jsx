import styles from "./Heading.module.css";

function Heading({ title }) {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>Join {title} Groups for Daily News</h1>
    </div>
  );
}
export default Heading;
