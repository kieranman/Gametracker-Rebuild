import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import axios from "axios";
import AuthService from '../service/AuthService';
import { AiOutlineCloseCircle } from 'react-icons/ai';
export default function Modal({ closeModal, item }) {
  const [message,setMessage] = useState("");
  const [rating,setRating] = useState("");
  const [review,setReview] = useState("");
  const [status,setStatus] = useState("");
  const itemId = item.id;

  const game = {
    id:itemId,
    photoURL:item.cover.url,
    score:item.rating,
    title:item.name
};
  const addedGame = {
    rating: rating,
    review: review,
    status: status,
    gameId: itemId
  }

  const addGameToDatabase = async()=>{
    axios.post("http://localhost:8080/games",game
  )
  }
  const addToList = async()=>{
    const user = AuthService.getCurrentUser();
    axios.post("http://localhost:8080/userlist/add/"+user.accessToken,
      addedGame
    ).then(response =>{
      setMessage(response.data.message)
    })
  }

  const handleSubmit = (event)=>{
    addToList()
    event.preventDefault();
    
  }
  const onChangeRating= (event)=>{
    setRating(event.target.value);
  }
  const onChangeReview= (event)=>{
    setReview(event.target.value);
  }
  const onChangeStatus= (event)=>{
    setStatus(event.target.value);
  }

  const [formVisible, setFormVisible] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFormVisible(true);
      addGameToDatabase()
    }, 200);

    return () => {
      clearTimeout(timeoutId);

    
    
    };
  
  }, [message]);

  return ReactDOM.createPortal(
    <div className="modal-background">
      <div className="modal-box">
        <div className='outer-message-container'>{message && <div className="message-container"><h3>{message}</h3></div>}</div>
        <div className="exit-button"><AiOutlineCloseCircle size={50} color='#db2360' onClick={closeModal}/></div>
        <form className={`add-form ${formVisible ? 'form-visible' : ''}`} onSubmit={handleSubmit}>
          <h2>ADD GAME</h2>
          <input type="text" 
          placeholder="Status" required
          onChange={onChangeStatus}
          value={status}/>
          <input type="text"
           placeholder="Rating" 
           onChange={onChangeRating}
           value={rating}
           />
          <br />
          <input className="review-box" 
          type="text" placeholder="Review"
          onChange={onChangeReview}
          value={review}
          />
          <br />
          <input className="add-button" 
          type="submit" 
          value="SUBMIT" />
        </form>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}
