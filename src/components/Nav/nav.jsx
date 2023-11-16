import SearchBar from '../SearchBar/searchBar';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';

const Nav = ({ onSearch, temperaments, setPage, setFilterCond, filterCond, setName, name }) => {
  const { pathname } = useLocation();
  
  const [startImageSrc, setStartImageSrc] = useState('https://cdn-icons-png.flaticon.com/128/12280/12280747.png');
  const [homeImageSrc, setHomeImageSrc] = useState('https://cdn-icons-png.flaticon.com/128/11706/11706652.png');
  const [formImageSrc, setFormImageSrc] = useState('https://cdn-icons-png.flaticon.com/128/11706/11706661.png');


  const handleStartMouseOver = () => {setStartImageSrc('https://cdn-icons-gif.flaticon.com/12280/12280747.gif')};
  const handleStartMouseOut = () => {setStartImageSrc('https://cdn-icons-png.flaticon.com/128/12280/12280747.png')};

  const handleHomeMouseOver = () => {setHomeImageSrc('../public/images/Dogs icons/dog-house.gif')};
  const handleHomeMouseOut = () => {setHomeImageSrc('https://cdn-icons-png.flaticon.com/128/11706/11706652.png')};

  const handleFormMouseOver = () => {setFormImageSrc('https://cdn-icons-gif.flaticon.com/11706/11706661.gif')};
  const handleFormMouseOut = () => {setFormImageSrc('https://cdn-icons-png.flaticon.com/128/11706/11706661.png')};      

  console.log(pathname);
  return (
    <div>
      <nav className="navbar">
        <div className="gif-icons-container">
            <div className="gif-container" onMouseOver={handleStartMouseOver} onMouseOut={handleStartMouseOut}>
                <div className="gif-icon">
                    <Link to="/">
                        <img id="start-gif-icon" src={startImageSrc} alt="Start"/>
                        <div className="text-overlay">Start</div>
                    </Link>
                </div>
            </div>
          {pathname !== '/home' && (
            <div className="gif-container" onMouseOver={handleHomeMouseOver} onMouseOut={handleHomeMouseOut}>
                <div className="gif-icon">
                    <Link to="/home">
                        <img id="home-gif-icon" src={homeImageSrc} alt="Home"/>
                        <div className="text-overlay">Home</div>
                    </Link>
                </div>
            </div>
          )}
          {pathname !== '/form' && (
            <div className="gif-container" onMouseOver={handleFormMouseOver} onMouseOut={handleFormMouseOut}>
                <div className="gif-icon">
                    <Link to="/form" className="create-dog-link">
                        <img id="form-gif-icon" src={formImageSrc} alt="Create Dog" />
                        <div className="text-overlay">Create Dog</div>
                    </Link>
                </div>
            </div>
          )}
        </div>

        {pathname === '/home' && (
          <SearchBar onSearch={onSearch} temperaments={temperaments} setPage={setPage} filterCond={filterCond} setFilterCond={setFilterCond} setName={setName} name={name}/>
        )}
      </nav>
    </div>
  );
};

export default Nav;
