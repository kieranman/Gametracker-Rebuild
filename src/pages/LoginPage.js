import "./SignupPage.css";
import "./RelatedStyles.css"
import {useState,useEffect,useContext} from 'react';
import Avatar from "../images/avatar3.png"; 
import AuthService from "../service/AuthService";
import { Link ,useNavigate} from "react-router-dom";
export default function LoginPage(){


const [message,setMessage] = useState("");
const [username,setUsername] = useState("");
const [password,setPassword] = useState("");
const navigate = useNavigate();


const handleSubmit = (event) => {
    event.preventDefault();
    AuthService.login(username,password).then(
        () => {
           const user = AuthService.getCurrentUser();
           console.log(user);
      });
    }
const handleChangeUsername = (event)=>{
    setUsername(event.target.value);
    }

const handleChangePassword = (event)=>{
    setPassword(event.target.value);
    }

useEffect(() => {

}, [message]);

    return(
        <div className="background">
        <div className="signup-container">
        {message && <div className="message-container"><h3>{message}</h3></div>}
            <form className="signup-form" onSubmit={handleSubmit}>
                <img className="login-avatar" src={Avatar}/>
                <h1>Login</h1>
                <div className="input-contents">
                <input type="text" 
                placeholder="Username"
                onChange={handleChangeUsername}
                value={username}
                />
            </div>
            <div className="input-contents">
                <input type="password" 
                placeholder="Password" 
                onChange={handleChangePassword} 
                value={password}
                />
            </div>
            <button type="submit">Login</button>
            </form>

            <div className="account">   
            <a><Link to="/signup">Dont have an account</Link></a>
            </div>
        </div>
        </div>
    )
}