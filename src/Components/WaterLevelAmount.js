import { useContext } from "react";
import { DataContext } from "../DataContext";
import './WaterLevelAmount.css';

export default function WaterLevelAmount() {

    const {liveData} = useContext(DataContext);
    let date = new Date();
    let timeOfDay = `${date.getHours()}:${(date.getMinutes()<10?'0':'') + date.getMinutes()}`;
    let timeOfYear = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    return (
        <div className="water-amount-block">
            <small>{timeOfYear} {timeOfDay} </small>
            <h3>Current water level</h3>
            <h1 className="water-amount-value">{liveData}</h1>
        </div>
    );
}