import Table from "../components/Table"
import Navbar from "../components/Navbar"
import AuthService from "../service/AuthService"
import axios from "axios"
import "./ListPage.css"
import { useEffect, useState } from "react"

export default function ListPage(){
    const [games,setGames] = useState([]);

    const getUserList = async()=>{
        const username = AuthService.getCurrentUser().username
        axios.get(`http://localhost:8080/userlist/${username}`
      ).then(response=>{
        setGames(response.data)
      })
    }
    
    useEffect(() => {
        getUserList()
    },[])

    return(
        <div>
            <Navbar/>
            <div className="table-container">
                <Table games={games}/>
            </div>
        </div>
    )
}