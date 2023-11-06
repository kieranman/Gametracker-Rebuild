import "./Card.css";
import { CircularProgressbar ,buildStyles } from 'react-circular-progressbar';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState,useEffect } from "react";
import 'react-circular-progressbar/dist/styles.css';
export default function RecommendationCards({ item ,openModal }) {
  const [isIconVisible,setIsIconVisible] = useState(false)

  const getCover = () => {
    let cover = item.photoURL;
    let newCover = cover.replace("t_thumb","t_cover_big")
    return newCover;
  }



  const renderRating = ()=>{
    const roundedRating = Math.round(item.score)
    if(roundedRating>=70){
      return <CircularProgressbar value={roundedRating} text={roundedRating} background styles={buildStyles({
        textColor: '#21d07a ',
        trailColor: '#333',
        pathColor: `#21d07a `,
        backgroundColor: '#161623 ',
        textSize: '30px'
      })}/>
    }
    else if(roundedRating>=60 && roundedRating <70){
      return <CircularProgressbar value={roundedRating} text={roundedRating} background styles={buildStyles({
        textColor: '#d2d531 ',
        trailColor: '#333',
        pathColor: `#d2d531 `,
        backgroundColor: '#161623 ',
        textSize: '30px'
      })}/>
    }
    else{
      return <CircularProgressbar value={roundedRating} text={roundedRating} background styles={buildStyles({
        textColor: '#db2360',
        trailColor: '#333',
        pathColor: `#db2360 `,
        backgroundColor: '#161623 ',
        textSize: '30px'
      })}/>
    }

    
  }

  return (
  
    <div className="card">
      <div className="score-container">
        {renderRating()}
      </div>
      <img src={getCover()} alt="Game Cover" />
      <div className="title-container"><h4>{item.title}</h4></div>
    </div>

  );
}
