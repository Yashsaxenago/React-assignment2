import React from "react";
import './Nav.css';
import SearchIcon from '@material-ui/icons/Search';
import NavContents from "./NavContents";
import AppsIcon from '@material-ui/icons/Apps'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
function Nav() {

    return (
        <div className="nav_container">
            <div className="nav_left">
            <NavContents Icon={MenuIcon}/>
                <img src="https://cdn4.vectorstock.com/i/1000x1000/23/08/gmail-new-icon-vector-34182308.jpg" alt="" />
                
                <div className="search_box">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>

            </div>
            <div className="nav_right">
                <NavContents Icon={AppsIcon} title="" />
        
                <NavContents Icon={NotificationsIcon} title="Notification" />
                <NavContents avatar title="Me" />
                
            </div>
        </div>
    )
}
export default Nav;