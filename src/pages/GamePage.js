import "./RelatedStyles.css"
import Card from "../components/Card";
import "./GamePage.css"
import { useState,useEffect } from "react";
import axios from "axios";
export default function GamePage(){
    
    const [games,setGames]=useState([]);
    const renderedGames = games.map((game)=>{
        return <Card key={game.id} item={game}/>;
    })

    const getGames = async ()=>{
        axios.post("http://localhost:8080/gameapi/games/07fl0geh1ox6h94fieyazqjuc5d4xy").then
        (response=>response.data).then
        ((data)=>{
            setGames(data);
        });
    }

    useEffect(() => {
        getGames()
    },[])

    return(
            <div className="card-container">
            {renderedGames}
            </div>
   
    )
}