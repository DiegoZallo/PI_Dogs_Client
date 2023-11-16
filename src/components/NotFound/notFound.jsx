
import "./notFound.css"
import { useNavigate } from "react-router-dom";

const NotFound =()=>{
    const navigate = useNavigate();

    return(
        <div className="container_notFound">
            <div className="notFound">
                <img src="https://www.sniffspace.com.au/templates/front/images/error_404.png" alt="" />
            </div>
            <button onClick={()=>navigate('/home')}>⚠️Back to home⚠️</button>
        </div>

    )
};

export default NotFound