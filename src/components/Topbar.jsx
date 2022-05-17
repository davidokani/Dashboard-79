import { Language, Notifications, Settings } from '@mui/icons-material';
// import { Notifications, Language, Settings } from '@mui/materials';
import React from 'react'
import "./topbar.css"


export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Dashbord79</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <span className="topIconBags">12</span>
                        <Notifications />
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBags">12</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                        <span className="topIconBags">12</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
