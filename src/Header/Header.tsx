import React, {useState } from 'react';
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"
import Avatar from "@material-ui/core/Avatar"
import image from "../images/log.png"
import { Link } from "react-router-dom"
function Header() {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header__left">
            <MenuIcon />
            <Link to="/">
            <img 
            className="header__logo"
            src={image}
            alt ="" 
            />
            </Link>
            </div>

            <div className="header__input">
            <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="search videos" 
            type="text" 
            />
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header__inputButton" />
            </Link>
            </div>

            <div className ="header__icons">
            <VideoCallIcon className="header__icon" />
            <AppsIcon className="header__icon" />
            <NotificationsIcon className="header__icon" />
            <Avatar className="header__icon"
             alt ="Group One"
            />
        </div>
        </div>
    );
}
export default Header
