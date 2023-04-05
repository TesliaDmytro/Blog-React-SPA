import styles from './Modal.module.css';

const Modal = ({ children, visibility, setVisibility }) => {
  const modalStyle = visibility
    ? [styles.modal, styles.active]
    : [styles.modal];

  return (
    <div className={modalStyle.join(' ')} onClick={() => setVisibility(false)}>
      <div
        className={styles.modalContent}
        onClick={(event) => event.stopPropagation()}
      >
        <p className={styles.closeX} onClick={() => setVisibility(false)}>
          X
        </p>
        {children}
      </div>
    </div>
  );
};

export default Modal;
