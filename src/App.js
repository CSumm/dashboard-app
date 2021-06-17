
import './App.css';
import AppWs from './AppWS';
import {useState} from 'react';
import WaterLevelAmount from './WaterLevelAmount';
import LevelWarning from './LevelWarning';
import LiveChart from './LiveChart';

function App() {
  const [msg, setMessage] = useState(''); 
  const [warning, setWarning] = useState('');
  const [warnings, setWarningArray] = useState([]);
  const [graphData, setGraphData] = useState([]);

    if(warning !== ''){
       setWarningArray(warnings => [...warnings, warning]);
       
    }
    if(msg !== ''){
      setGraphData(graphData => [...graphData, msg]);
    }

  return (
    <div className="App">
        <AppWs setMessage={setMessage} setWarning={setWarning}/>
        <WaterLevelAmount msg={msg}/>
        <LevelWarning warnings={warnings}/>
        <LiveChart liveData={graphData}/>
    </div>
  );
}

export default App;
