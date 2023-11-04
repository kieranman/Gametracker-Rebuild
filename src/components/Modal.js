import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
export default function Modal({ closeModal, itemId }) {
  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  const [formVisible, setFormVisible] = useState(false); // Track the visibility of the form

  useEffect(() => {
    // When the component mounts, set the form as visible with a delay
    const timeoutId = setTimeout(() => {
      setFormVisible(true);
    }, 200); // You can adjust the delay as needed

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="modal-background">
      <div className="modal-box">
        <div className="exit-button"><AiOutlineCloseCircle size={50} color='#db2360' onClick={closeModal}/></div>
        <form className={`add-form ${formVisible ? 'form-visible' : ''}`} onClick={handleFormClick}>
          <h2>ADD GAME</h2>
          <input type="text" placeholder="Status" required />
          <input type="text" placeholder="Rating" />
          <br />
          <input className="review-box" type="text" placeholder="Review" />
          <br />
          <input className="add-button" type="submit" value="SUBMIT" />
        </form>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}
