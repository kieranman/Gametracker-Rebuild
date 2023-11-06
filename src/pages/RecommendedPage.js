import "./RecommendedPage.css"
import RecommendationCards from "../components/RecommendationCards"
import Navbar from "../components/Navbar"
import Modal from "../components/Modal";
import { useState,useEffect } from "react";
import AuthService from "../service/AuthService";
import axios from "axios";
export default function RecommendedPage(){
    const [game,setGame] = useState([]);
    const [openModal,setOpenModal] = useState(false);
    const [games,setGames]=useState([]);

    const handleModalOpen = (item) =>{
        setGame(item)
        setOpenModal(true);
    }
    const handleCloseModal = ()=>{
        setOpenModal(false)
    }


    const getGames = async ()=>{
        const userId = AuthService.getCurrentUser().id
        axios.get(`http://localhost:8080/userlist/recommendations/${userId}`).then
        (response=>response.data).then
        ((data)=>{
            setGames(data);
        });
    }

    const renderedGames = games.map((game)=>{
        return <RecommendationCards key={game.id} item={game} openModal={handleModalOpen}/>;
    })

    useEffect(() => {
        getGames()
    },[])


    return (
        <div className="outer-container">
            <Navbar/>
        <div className="recommended-container">
            {renderedGames}
        </div>
        </div>
    )
}