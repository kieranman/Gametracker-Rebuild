import "./SignupPage.css";
import "./RelatedStyles.css"
import {useState,useEffect,useContext} from 'react';
import Avatar from "../images/avatar3.png"; 
import AuthService from "../service/AuthService";
import { Link } from "react-router-dom";
export default function SignupPage(){


const [message,setMessage] = useState("")
const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const [email,setEmail] = useState("")

const handleSubmit = (event) => {
    event.preventDefault();
    AuthService.register(username,email,password).then(response =>{
        setMessage(response.data.message)
      })
      
    }
const handleChangeUsername = (event)=>{
    setUsername(event.target.value);
    }

const handleChangeEmail = (event)=>{
    setEmail(event.target.value);
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
                <img className="signup-avatar" src={Avatar}/>
                <h1>Sign Up</h1>
                <div className="input-contents">
                <input type="text" 
                placeholder="Username"
                onChange={handleChangeUsername}
                value={username}
                />
            </div>
            <div className="input-contents">
                <input type="email"
                placeholder="Email"
                onChange={handleChangeEmail} 
                value={email}
                />
            </div>
            <div className="input-contents">
                <input type="password" 
                placeholder="Password" 
                onChange={handleChangePassword} 
                value={password}
                />
            </div>
            <button type="submit">Sign Up</button>
            </form>

            <div className="account">   
            <a><Link to="/login">Already have an account</Link></a>
            </div>
        </div>
        </div>
    )
}