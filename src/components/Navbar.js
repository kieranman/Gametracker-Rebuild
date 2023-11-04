import "./Navbar.css";
import { IoGameControllerSharp ,IoListCircleSharp ,IoLogOut} from "react-icons/io5";
import { MdOutlineRecommend } from "react-icons/md";
import { Link ,useNavigate} from "react-router-dom";
import AuthService from "../service/AuthService";
export default function Navbar(){
    const navigate = useNavigate();


    const handleLogout = ()=>{
        AuthService.logout();
        navigate("/login")
    }


    return(
        <nav>
            <ul>
                <li><Link to="/games"><p><IoGameControllerSharp size={20}/></p>Games</Link></li>
                <li><p><IoListCircleSharp size={20}/></p>My List</li>
                <li><p><MdOutlineRecommend size={20}/></p>Recommended</li>
                <li onClick={handleLogout}><p><IoLogOut size={20}/></p>Logout</li>
            </ul>
        </nav>
    )
}