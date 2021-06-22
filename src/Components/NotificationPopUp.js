import { useState } from "react";

export default function NotificationPopUp() {
    const [isNotifOpen, setOpen] = useState(true);

    function closeNotif() {
        setOpen(!isNotifOpen);
    }

    function reloadPage(){
        window.location.reload()
    }

    return (
        <div className={isNotifOpen ? 'notification notification-open': 'notification notification-closed'}>
           <p className="notification-message">Your FloatMellow is offline. Check if the battery is charged or registered correctly with the app. 
           Then, <a href="/" onClick={reloadPage}>refresh</a> the app.</p>
           <button className="close-notification" onClick={closeNotif}>X</button>
        </div>
    );
}