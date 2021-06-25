import {useState, useEffect, useMemo} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import './App.css';
import AppWs from './AppWS';
import NotificationPopUp from './Components/NotificationPopUp';
import SideNavigation from './Components/SideNavigation';
import DashboardPage from './Pages/DashboardPage';
import Settings from './Pages/Settings';
import Login from './Pages/Login';
import { v4 as uuidv4 } from 'uuid';
import { SettingsContext } from './SettingsContext';
import {DataContext} from './DataContext';

function App() {
  let date = useMemo(()=>new Date(),[]);

  // live data variables
  const [liveData, setLiveData] = useState(' - '); 
  const [warning, setWarning] = useState('');
  const [warnings, setWarningArray] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [timePassed, setTimePassed] = useState(`${date.getHours()}: ${(date.getMinutes()<10?'0':'') + date.getMinutes()}`);
  const [isSocketOpen, setSocketState] = useState(true);

  // navbar variable to see whether page enabled or disabled it
  const [navBarHidden, setNavBarHidden] = useState(true);

  // applications settings variables
  const [productID] = useState(uuidv4());
  const [registeredOwner, setRegisteredOwner] = useState('');
  const [currentSMSLabel, setSMSLabel] = useState(false);
  const [isSMSSwitchOn, setSMSSwitch] = useState(false);
  const [currentEmailLabel, setEmailLabel] = useState(false);
  const [isEmailSwitchOn, setEmailSwitch] = useState(false);
  const [currentReceivingEmail, setReceivingEmail] = useState('');
  const [currentReceivingMobile, setReceivingMobile] = useState('');
  const [isCheckedSMS, setCheckedSMS] = useState(false);
  const [isCheckedEmail, setCheckedEmail] = useState(false);
  const [batteryLife, setBatteryLife] = useState(100);


  // gets saved data automatically from localstorage if it exists and populates the state fields

  useEffect(() => {
    const data = localStorage.getItem("settings");
    console.log(data);

    if(data){
      setRegisteredOwner(JSON.parse(data).registeredOwner);
     setSMSLabel(JSON.parse(data).currentSMSLabel);
     setCheckedSMS(JSON.parse(data).isCheckedSMS);
     setEmailLabel(JSON.parse(data).currentEmailLabel);
     setCheckedEmail(JSON.parse(data).isCheckedEmail);
     setReceivingEmail(JSON.parse(data).currentReceivingEmail);
     setReceivingMobile(JSON.parse(data).currentReceivingMobile);
    }
 },[])

 // sets current state fields into localstorage autpmatically
 useEffect(() => {
     localStorage.setItem("settings",JSON.stringify({
         registeredOwner: registeredOwner,
         currentSMSLabel: currentSMSLabel,
         isCheckedSMS: isCheckedSMS,
         currentEmailLabel: currentEmailLabel,
         isCheckedEmail: isCheckedEmail,
         currentReceivingEmail: currentReceivingEmail,
         currentReceivingMobile: currentReceivingMobile
     }));
 })

 /* creates a new date variable and is appended along with 
 live data to be put in the graph data array */
  useEffect(() => {
    date = new Date();
    setTimePassed(`${date.getHours()}: ${(date.getMinutes()<10?'0':'') + date.getMinutes()}`);

    if(liveData !== ' - '){
      setGraphData(graphData => [...graphData, {name: `${timePassed}`,value:liveData}]);
    }
},[liveData]);


// where the app starts
  return (
    <div className="App">
        <Router>
          <DataContext.Provider
          value={{
            setLiveData,
            setWarning,
            isSocketOpen,
            graphData,
            warning,
            warnings,
            liveData,
            setWarningArray,
            setSocketState,
            batteryLife,
            setBatteryLife
          }}>
          <SettingsContext.Provider 
          value={
            {productID,
            setRegisteredOwner,
            registeredOwner,
            setSMSLabel,
            currentSMSLabel,
            setSMSSwitch,
            isSMSSwitchOn,
            setEmailLabel,
            currentEmailLabel,
            setEmailSwitch,
            isEmailSwitchOn,
            isCheckedSMS,
            isCheckedEmail,
            setCheckedSMS,
            setCheckedEmail,
            setReceivingEmail,
            currentReceivingEmail,
            setReceivingMobile,
            currentReceivingMobile
            }}>
         <AppWs/>
        {isSocketOpen === false ?  
         <NotificationPopUp lowBatteryError={true}/> : <div></div>
        }
        {navBarHidden ? null: <SideNavigation/>}
        <Switch>
          <Route exact path="/">
          <Redirect to="/login" />
            </Route>
            <Route exact path="/dashboard">
            <DashboardPage
            setNavBarHidden={setNavBarHidden}/>
            </Route>
            <Route exact path="/settings">
            <Settings/>
            </Route>
            <Route exact path="/login">
            <Login setNavBarHidden={setNavBarHidden}/>
            </Route>
            <Route exact path="/logout">
            <Redirect to="/login" />
            </Route>
        </Switch>
        </SettingsContext.Provider>
        </DataContext.Provider>
       </Router>
    </div>
  );
}

export default App;
