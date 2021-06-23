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
import MainContent from './Pages/MainContent';
import Settings from './Pages/Settings';
import Login from './Pages/Login';

function App() {
  const [msg, setMessage] = useState(' - '); 
  const [warning, setWarning] = useState('');
  const [warnings, setWarningArray] = useState([]);
  const [graphData, setGraphData] = useState([]);
  let date = useMemo(()=>new Date(),[]);
  const [timePassed, setTimePassed] = useState(`${date.getHours()}: ${(date.getMinutes()<10?'0':'') + date.getMinutes()}`);
  const [isSocketOpen, setSocketState] = useState(true);
  const [navBarHidden, setNavBarHidden] = useState(true);
 
  useEffect(() => {
    date = new Date();
    setTimePassed(`${date.getHours()}: ${(date.getMinutes()<10?'0':'') + date.getMinutes()}`);

    if(msg !== ' - '){
      setGraphData(graphData => [...graphData, {name: `${timePassed}`,value:msg}]);
    }
    console.log('i fire once');
    return () => {

  };
},[msg]);

  return (
    <div className="App">
        <Router> 
<AppWs setMessage={setMessage} setWarning={setWarning} socketCurrentState={isSocketOpen}/>
        {isSocketOpen === false ?  <NotificationPopUp lowBatteryError={true}/> : <div></div>}
          {navBarHidden ? null: <SideNavigation/>}
          <Switch>
          <Route exact path="/">
          <Redirect to="/login" />
            </Route>
            <Route exact path="/dashboard">
            <MainContent socketData={msg} graphData={graphData} warning={warning} warnings={warnings} setWarningArray={setWarningArray} setSocketState={setSocketState} setNavBarHidden={setNavBarHidden}/>
            </Route>
            <Route exact path="/settings">
            <Settings setNavBarHidden={setNavBarHidden}/>
            </Route>
            <Route exact path="/login">
            <Login setNavBarHidden={setNavBarHidden}/>
            </Route>
            <Route exact path="/logout">
            <Redirect to="/login" />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
