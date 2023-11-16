import { Link } from "react-router-dom";
import './landing.css'


const Landing = () => {
    return (
        <div className="container-landing">
            <Link to='/home'>
                <img src="https://cdn-icons-gif.flaticon.com/12280/12280747.gif" alt="https://cdn-icons-png.flaticon.com/128/12280/12280747.png" />
            </Link>
            <div className="landingText">
            🐾Hi! Join me learning about all types of dogs, and even play creating new breeds!🐾 
            </div>
            
        </div>
    );
};

export default Landing
