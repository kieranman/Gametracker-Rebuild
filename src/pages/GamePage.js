import "./RelatedStyles.css"
import Card from "../components/Card";
import "./GamePage.css"
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import { useState,useEffect } from "react";
import axios from "axios";
export default function GamePage(){

    const [openModal,setOpenModal] = useState(false);
    const [games,setGames]=useState([]);

    const handleModalOpen = () =>{
        setOpenModal(true)
    }
    const handleCloseModal = ()=>{
        setOpenModal(false)
    }

    const renderedGames = games.map((game)=>{
        return <Card key={game.id} item={game} openModal={handleModalOpen}/>;
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
        <div className="games-container">
        {openModal && <Modal closeModal={handleCloseModal}/>}
        <Navbar/>
            <div className="card-container">
            {renderedGames}
            </div>
        </div>
    )
}