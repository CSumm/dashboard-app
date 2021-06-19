
import './App.css';
import AppWs from './AppWS';
import {useState, useEffect, useMemo} from 'react';
import WaterLevelAmount from './WaterLevelAmount';
import LevelWarning from './LevelWarning';
import LiveChart from './LiveChart';

function App() {
  const [msg, setMessage] = useState(' - '); 
  const [warning, setWarning] = useState('');
  const [warnings, setWarningArray] = useState([]);
  const [graphData, setGraphData] = useState([]);
  let date = useMemo(()=>new Date(),[]);
  const [timePassed, setTimePassed] = useState(`${date.getHours()}: ${(date.getMinutes()<10?'0':'') + date.getMinutes()}`);

 
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
        <AppWs setMessage={setMessage} setWarning={setWarning}/>
        <WaterLevelAmount msg={msg}/>
        <LevelWarning warning={warning} warnings={warnings} setArray={setWarningArray}/>
        <LiveChart graphData={graphData}/>
    </div>
  );
}

export default App;
