import styles from "./MobileContainer.module.scss";

function MobileContainer({ title, description, children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>{title.toUpperCase()}</h1>
        <p>{description}</p>
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  );
}

export default MobileContainer;
