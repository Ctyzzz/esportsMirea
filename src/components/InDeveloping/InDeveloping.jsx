import styles from "./InDeveloping.module.scss";

const InDeveloping = ({label}) => {
  const DEFAULT_TEXT = "In developing"
  const text = label ? `${label} ${DEFAULT_TEXT}` : DEFAULT_TEXT;

  return (
    <h1 className={styles.in_progress} data-text={text}>
      {text}
    </h1>
  );
};

export default InDeveloping;