import "./card.css";
import React from "react";
import { Link } from 'react-router-dom';

const Card = ({ id, name, height, weight, temperament, image }) => {
  
  return (

      <div className="card">
          <div className="breedName">{name}</div>
          
          <Link to={`/detail/${id}`}>
            <div className="image">
              <img src={image} alt={name} />
            </div>
          </Link> 

          <div className="height"> 
            <img src="https://cdn-icons-png.flaticon.com/128/7925/7925674.png" alt="height" />{height + ' cms'}
          </div>
          
          <div className="weight"> 
            <img src="https://cdn-icons-png.flaticon.com/128/2928/2928937.png" alt="weight" />
            {weight + ' kgs'}
          </div>
          <br />
          <div className="temperament">
            <img src="https://cdn-icons-png.flaticon.com/128/12384/12384369.png" alt="temperament" />
            <div className="temperament-text">{temperament?.join(', ')}</div>
          </div>

          {isNaN(id) &&
          <div className="myDogs" >
            <img src='.\images\Dogs icons\paw.png' alt='my dogs' />
          </div>
          }
      </div>

  );
};

export default Card;


