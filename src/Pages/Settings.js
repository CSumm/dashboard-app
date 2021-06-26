import { useState, useEffect } from "react";
import SettingsComponent from "../Components/SettingsComponent";
import NotificationPopUp from "../Components/NotificationPopUp";
import './Settings.css';

export default function Settings()
{

    const [settingsChanged, setSettingsChanged] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    function changeSettings(){
        setSettingsChanged(true);
    }

    return (
        <div className="settings-page">
            <div className="settings-container">
            <NotificationPopUp settingsChanged={settingsChanged}/>
            <SettingsComponent 
            heading="Device Information" 
            displayDeviceInfo={true}
            changeSettings={changeSettings}
            />
            <SettingsComponent 
            heading="Notifications" 
            displayNotificationInfo={true} 
            changeSettings={changeSettings}
            />
            <div className="settings-block">
            <button className="btn settings-save" onClick={changeSettings}>Save Settings</button>
            </div>
            </div>
        </div>
    );
}