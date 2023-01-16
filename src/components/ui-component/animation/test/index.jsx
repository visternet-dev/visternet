import styles from "./style.module.css";

const line = "/assets/images/landing/line.svg";
const airPlane = "/assets/images/landing/airPlane.svg";

function TestAnimation() {
  return (
    <div className={styles.testAnimation}>
      <img src={line}  className={styles.line}/>
      <img src={airPlane}  className={styles.airPlane} />
    </div>
  );
}

export default TestAnimation;
