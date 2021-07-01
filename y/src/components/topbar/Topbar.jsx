import React from 'react'
import app from "./../../base";
import "./topbar.css"
import {NotificationsNone, Language, Settings, AddCircle} from '@material-ui/icons';

import Timer from "./Timer";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                        <Timer date={new Date()}/>
                </div>
                
                <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder="Search by Job ID, Part ID... " >
            
        </input>
        <div className="iconcontainer">
        <AddCircle fontSize="large"/>
        </div>

        
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone fontSize="large" />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language fontSize="large" />
                        <span className="topIconBadge">2</span>
                    </div>
                    
                    <div className="topbarIconContainer">
                        <Settings fontSize="large" />
                        
                    </div>
                    
                    
                    <img src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="topAvatar"/>
                    <div className="adminName">
                        <div className="h3">
                            Elvijs Podnieks
                        </div>
                        <div className="buttn">
                            <button className="button" onClick={() => app.auth().signOut()}>Sign out</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
