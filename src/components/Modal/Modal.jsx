import { useEffect } from 'react';
import { ModalOverlay } from './Modal.styled';

const Modal = props => {
  useEffect(() => {
    window.addEventListener('keydown', handleClose);

    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, []);

  function handleClose(e) {
    if (e.key === 'Escape' || e.target === e.currentTarget) {
      props.onClose();
    }
  }

  return (
    <ModalOverlay onClick={handleClose}>
      <div className="Modal">
        <img src={props.imageUrl} alt="Large version" />
      </div>
    </ModalOverlay>
  );
};

export default Modal;
