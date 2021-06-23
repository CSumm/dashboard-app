import { useState } from "react";

export default function NotificationPopUp({lowBatteryError, settingsChanged}) {
    const [isNotifOpen, setOpen] = useState(true);
    let errorMessage = (
    <div className="notification">
    <p className="notification-message">Your FloatMellow is offline. 
    Check if the battery is charged or registered correctly with the app. 
    Then, refresh the app</p>
    <button className="close-notification" onClick={closeNotif}>X</button>
    </div>
    );

    let settingsSuccessMessage = (
        <div className="notification notification--green">
          <p className="notification-message">Your settings have been successfully updated.</p>
          <button className="close-notification" onClick={closeNotif}>X</button>
        </div>
    );
    

    function closeNotif() {
        setOpen(!isNotifOpen);
    }

    return (
        <div className={isNotifOpen ? 'notification-open': 'notification-closed'}>
          {lowBatteryError?errorMessage:settingsChanged ? settingsSuccessMessage: null}
        </div>
    );
}