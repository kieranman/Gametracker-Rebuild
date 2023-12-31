import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage"
import GamePage from "./pages/GamePage"
import ListPage from "./pages/ListPage";
import RecommendedPage from "./pages/RecommendedPage";
import "./pages/RelatedStyles.css"
import "./App.css";
import {BrowserRouter as Router, Route,Routes,Link, BrowserRouter} from 'react-router-dom';
export default function App() {
    return (
      <BrowserRouter>
        <div>
          <Routes>
          <Route path='' element={<SignupPage/>} />
            <Route path='/signup' element={<SignupPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/games' element={<GamePage/>} />
            <Route path='/list' element={<ListPage/>} />
            <Route path='/recommended' element={<RecommendedPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }