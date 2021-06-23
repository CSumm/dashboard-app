import { useState } from "react";
import SettingsComponent from "../Components/SettingsComponent";
import NotificationPopUp from "../Components/NotificationPopUp";

export default function Settings() {

    const [smsLabel, setSMSLabel] = useState(false);
    const [emailLabel, setEmailLabel] = useState(false);
    const [settingsChanged, setSettingsChanged] = useState(false);

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
            smsLabel={smsLabel} 
            setSMSLabel={setSMSLabel}
            emailLabel={emailLabel}
            setEmailLabel={setEmailLabel}
            changeSettings={changeSettings}
            />
            <div className="settings-block">
            <button className="btn settings-save" onClick={changeSettings}>Save Settings</button>
            </div>
            </div>
        </div>
    );
}