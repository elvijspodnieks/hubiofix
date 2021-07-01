import React from 'react'
import "./sidebar.css"
import {LineStyle, Timeline, TrendingUp, PermContactCalendar, Print} from "@material-ui/icons";
import firebase from "firebase/app";
    import "firebase/auth";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                            <div className="logoo">
                                     <span className="logo">HubioFix</span>
                            </div>
                        
                        <ul className="sidebarList">
                            <li className="sidebarListItem active">
                                <LineStyle fontSize="large"/>
                                <div className="listName">Dashboard</div>
                                
                            </li>

                            <li className="sidebarListItem">
                                <Timeline fontSize="large"/>
                                <div className="listName">Jobs</div>
                            </li>

                            <li className="sidebarListItem">
                                <PermContactCalendar fontSize="large"/>
                                <div className="listName">Contacts</div>
                            </li>
                            <li className="sidebarListItem">
                                <PermContactCalendar fontSize="large"/>
                                <div className="listName">Stock</div>
                            </li>
                            <li className="sidebarListItem">
                                <TrendingUp fontSize="large"/>
                                <div className="listName">Services</div>
                            </li>
                            <li className="sidebarListItem">
                                <Print fontSize="large"/>
                                <div className="listName">Invonce</div>
                            </li>

                            
                        </ul>

                    </div>

            </div>
        </div>
    )
}
