import {useState} from "react";
import { useInterval } from "../useInterval";
import './BatteryStatus.css';

const BatteryIcon = (props) => {

return (
<svg className="battery-icon" width="113" height="49" viewBox="0 0 113 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M95 15H112V34H95" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
<rect x="0.5" y="0.5" width="94" height="48" stroke="black"/>
<rect x="1" y="1" width="19" height="47" fill={
    props.percentage <= 5? props.veryLowBattery :
    props.percentage <= 15? props.lowBattery :
    "#66DA94"}/>
<rect  x="20" y="1" width="18" height="47" fill={props.percentage < 20? props.fill : "#66DA94"}/>
<rect  x="38" y="1" width="19" height="47" fill={props.percentage < 30? props.fill : "#66DA94"}/>
<rect  x="57" y="1" width="18" height="47" fill={props.percentage < 50? props.fill : "#66DA94"}/>
<rect  x="75" y="1" width="19" height="47" fill={props.percentage < 70? props.fill : "#66DA94"}/>
<rect  x="94" y="15" width="18" height="19" fill={props.percentage < 90? props.fill : "#66DA94"}/>
</svg>
)
}

export default function BatteryStatus({setSocketState}) {

   const [batteryLife, setBatteryLife] = useState(100);
   const [delay,setDelay] = useState(300000);
   const [isRunning, setIsRunning] = useState(true);

   if(batteryLife === 0){
    setSocketState(false);
   }

   useInterval(()=> {
       if(batteryLife > 0)
       setBatteryLife(batteryLife-1);
       else
       setIsRunning(!isRunning);
   }, isRunning ? delay : null);


    return (
        <div className="battery-life-block">
            <h3>Battery life</h3>
            <h1 className="battery-life-value">{batteryLife}%</h1>
            <BatteryIcon fill="white" percentage={batteryLife} lowBattery="#fdfd96" veryLowBattery="#ff3d41"/>
        </div>
    );
}