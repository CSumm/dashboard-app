import WaterLevelAmount from '../Components/WaterLevelAmount';
import LevelWarning from '../Components/LevelWarning';
import LiveChart from '../Components/LiveChart';
import BatteryStatus from '../Components/BatteryStatus';
import { useContext } from 'react';
import { DataContext } from '../DataContext';
import './DashboardPage.css';



export default function DashboardPage({setNavBarHidden}) {
    const { 
        socketData, 
        graphData,
        warning,
        warnings, 
        setWarningArray, 
        setSocketState } = useContext(DataContext);
        
    
    setNavBarHidden(false);
   

    return (
        <div className="main-content">
          <div className="first-row">
              <div className="small-card-section">
        <WaterLevelAmount msg={socketData}/>
        <BatteryStatus setSocketState={setSocketState}/>
        </div>
        <LiveChart graphData={graphData}/>
        </div>
        <div className="second-row">
        <LevelWarning warning={warning} warnings={warnings} setArray={setWarningArray}/>
        </div>
        </div>
    );
}