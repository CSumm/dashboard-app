import { useContext } from "react";
import { SettingsContext } from "../SettingsContext";
import './SettingsComponent.css';

export default function SettingsComponent({
    heading, 
    displayNotificationInfo, 
    displayDeviceInfo,
}) {

    const {
        productID,
        registeredOwner,
        currentSMSLabel,
        isSMSSwitchOn,
        currentEmailLabel,
        isEmailSwitchOn,
        currentReceivingEmail,
        currentReceivingMobile,
        setRegisteredOwner,
        setSMSLabel,
        setSMSSwitch,
        setEmailLabel,
        setEmailSwitch,
        setReceivingEmail,
        setReceivingMobile,
        isCheckedSMS,
        isCheckedEmail,
        setCheckedSMS,
        setCheckedEmail
    } = useContext(SettingsContext);

    //handling registered owner on change
    function handleRegisteredOwnerChange(e){
        setRegisteredOwner(e.target.value);
    }

    //handling sms switch on change
  function turnOnSMS(e) {
        setSMSLabel(!currentSMSLabel);
        setSMSSwitch(!e.target.value);
        setCheckedSMS(!isCheckedSMS);
    }

    //handling emails switch on change 
     function turnOnEmails(e) {
        setEmailLabel(!currentEmailLabel);
        setEmailSwitch(!e.target.value);
        setCheckedEmail(!isCheckedEmail);
    }

    //handling receiving email data on change
    function setReceivingEmailOnChange(e){
        setReceivingEmail(e.target.value);
        console.log(currentReceivingEmail);
    }

      //handling receiving email data on change
      function setReceivingMobileOnChange(e){
        setReceivingMobile(e.target.value);
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
                <input 
                type="text" 
                value={registeredOwner} 
                onChange={handleRegisteredOwnerChange} 
                id="registered-to" 
                placeholder="Jane Doe"/>
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
                    <span>
                    {currentEmailLabel ? 
                    'Email notification currently on': 
                    'Email notification currently off'
                    }
                    </span>
                    <span></span>
                </label>
                <input
                className="switch" 
                id="email-notification-switch" 
                type="checkbox"
                checked={isCheckedEmail}
                value={isEmailSwitchOn} 
                onChange={turnOnEmails}/>
                </fieldset>


                {currentEmailLabel ?
                <fieldset className="vertical-fieldset">
                <label htmlFor="#email-to-receive-msg">Receiving Email</label>
                <input 
                value={currentReceivingEmail} 
                id="email-to-receive-msg" 
                type="email" 
                onChange={setReceivingEmailOnChange}/>
                </fieldset>
                :
                null
            }

                <fieldset className="horizontal-fieldset">
                <label 
                className="notification-switch-label" 
                htmlFor="#sms-notification-switch">
                    {currentSMSLabel ? 
                    'SMS notification currently on': 
                    'SMS notification currently off'
                    }
                </label>
                <input
                className="switch"  
                id="sms-notification-switch" 
                type="checkbox" 
                checked={isCheckedSMS}
                value={isSMSSwitchOn}
                onChange={turnOnSMS}/>
                </fieldset>

                {currentSMSLabel ?
                <fieldset className="vertical-fieldset">
                <label htmlFor="#mobile-to-receive-msg">Receiving Mobile Number</label>
                <input  
                id="mobile-to-receive-msg" 
                type="tel" 
                value={currentReceivingMobile}
                onChange={setReceivingMobileOnChange}
                />
                </fieldset>
                :
                null
            }
                </form>
                : null}
        </div>
    );
}