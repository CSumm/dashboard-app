import { v4 as uuidv4 } from 'uuid';
export default function SettingsComponent({
    heading, 
    displayNotificationInfo, 
    displayDeviceInfo, 
    smsLabel, 
    setSMSLabel,
    emailLabel,
    setEmailLabel,
    changeSettings
}) {

    let productID = uuidv4();
   

    //write persisting data
    if(changeSettings){
        localStorage.setItem("settings",JSON.stringify({
        }));
    }

    function turnOnSMS() {
        setSMSLabel(!smsLabel);
    }

    function turnOnEmails() {
        setEmailLabel(!emailLabel);
    }


    return (
        <div className="settings-block">
            <h1>{heading}</h1>
            {displayDeviceInfo ? 
            <form className="device-info-form">
                <fieldset className="vertical-fieldset">
                <label htmlFor="#uuid-value">Product ID</label>
                <input className="uuid-input" id="uuid-value" value={productID} readOnly/>
                </fieldset>
                <fieldset className="vertical-fieldset">
                <label htmlFor="#registered-to">Registered owner</label>
                <input type="text" id="registered-to" placeholder="Jane Doe"/>
                </fieldset>
            </form>
            : null
            }


            {displayNotificationInfo ? 
            <form className="settings-notification-form">
                   <fieldset className="horizontal-fieldset">
                <label 
                className="email-notification-switch-label" 
                htmlFor="#email-notification-switch">
                    {emailLabel ? 
                    'Email notification currently on': 
                    'Email notification currently off'
                    }
                </label>
                <input
                className="switch" 
                id="email-notification-switch" 
                type="checkbox" 
                onChange={turnOnEmails}/>
                </fieldset>


                {emailLabel ?
                <fieldset className="vertical-fieldset">
                <label htmlFor="#email-to-receive-msg">Receiving Email</label>
                <input id="email-to-receive-msg" type="email"/>
                </fieldset>
                :
                null
            }

                <fieldset className="horizontal-fieldset">
                <label 
                className="notification-switch-label" 
                htmlFor="#sms-notification-switch">
                    {smsLabel ? 
                    'SMS notification currently on': 
                    'SMS notification currently off'
                    }
                </label>
                <input
                className="switch"  
                id="sms-notification-switch" 
                type="checkbox" 
                onChange={turnOnSMS}/>
                </fieldset>

                {smsLabel ?
                <fieldset className="vertical-fieldset">
                <label htmlFor="#mobile-to-receive-msg">Receiving Mobile Number</label>
                <input id="mobile-to-receive-msg" type="tel"/>
                </fieldset>
                :
                null
            }
                </form>
                : null}
        </div>
    );
}