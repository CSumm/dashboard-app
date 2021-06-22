import WaterLevelAmount from '../Components/WaterLevelAmount';
import LevelWarning from '../Components/LevelWarning';
import LiveChart from '../Components/LiveChart';
import BatteryStatus from '../Components/BatteryStatus';



export default function MainContent({ socketData, graphData, warning, warnings, setWarningArray, setSocketState, setNavBarHidden }) {
   
        setNavBarHidden(false);
   

    return (
        <div className="main-content">
          <div className="App__first-row">
              <div className="small-card-section">
        <WaterLevelAmount msg={socketData}/>
        <BatteryStatus setSocketState={setSocketState}/>
        </div>
        <LiveChart graphData={graphData}/>
        </div>
        <div className="App__second-row">
        <LevelWarning warning={warning} warnings={warnings} setArray={setWarningArray}/>
        </div>
        </div>
    );
}