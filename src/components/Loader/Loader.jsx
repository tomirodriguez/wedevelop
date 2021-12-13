import styles from "./styles.module.scss";

export default function Loader({ show = true }) {
  return show ? <div className={styles.loader}></div> : null;
}
