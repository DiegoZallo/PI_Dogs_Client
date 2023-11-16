import "./details.css"; 
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Details = ({handleDelete}) => {
  const { id } = useParams();
  const [dog, setDog] = useState({});
  const [error, setError] = useState();
  
  useEffect(() => {
    axios(`http://localhost:3003/dogs/${id}`)
      .then(({ data }) => {
        setDog(data);
      })
      .catch((error) => setError(error));

    return () => {setDog({}); setError()}
  }, [id, handleDelete]);

  return (
    <div className="detail">
      {!error? ( 
        <div className="detailSpace">
          <div className="box">
            <div className="side back">
              <img src={dog.image} alt={dog.name} />
            </div>
            <div className="side left">
              <img src={dog.image} alt={dog.name} />
            </div>
            <div className="side rigth">
              <img src={dog.image} alt={dog.name} />
            </div>
            <div className="side front">
              <img src={dog.image} alt={dog.name} />
            </div>
          </div>
          <div className="otherDetails">
            <div className="det_id">🆔 {dog?.id}</div>
            <div className="det_name">🐶 {dog.name}</div>
            <div className="det_weight">⚖️ {dog.weight} kgs</div>
            <div className="det_height">📏 {dog.height} cms</div>
            <div className="det_life_span">❤️ {dog.life_span}</div>
            <div className="det_temperament">🎭 {dog.temperament?.join(", ")}</div>            
            {isNaN(id)&& 
            <div className="delete_dog"> 
              <img onClick={()=>handleDelete(id)} src="https://cdn-icons-png.flaticon.com/128/11186/11186844.png" alt="" />
              Delete  Dog
            </div>}            
          </div>
        </div>
      ) : (
        <div className="notFound">
          <img src="https://www.sniffspace.com.au/templates/front/images/error_404.png" alt="Page not found" />
        </div>
      )}

    </div>
  );
};

export default Details;
