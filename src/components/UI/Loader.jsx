import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderBack}>
      <div className={styles.loader}></div>
      <h2 className={styles.text}>Loading . . .</h2>
    </div>
  );
};

export default Loader;
