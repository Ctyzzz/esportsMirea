import { useEffect } from "react";
import ReactDOM from 'react-dom';
import { FaTimes } from "react-icons/fa";

import styles from './Modal.module.scss'

const Modal = ({ show, onCloseButtonClick, children }) => {
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      onCloseButtonClick();
    }
  };

  useEffect(() => {
    if (!show) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code === 'Escape') {
        onCloseButtonClick();
      }
    };

    document.body.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onCloseButtonClick]);

  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div className={styles['modal-cover']} onClick={handleClose}>
        <div className={styles['modal-wrapper']}>
          <div className={styles['modal-content']}>
            <FaTimes
              className={styles["close"]}
              onClick={() => onCloseButtonClick()}
            />
            {children}
          </div>
        </div>
      </div>
    </>, document.body
  );
}

export default Modal