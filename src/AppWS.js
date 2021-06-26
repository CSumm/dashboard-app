import {useRef, useEffect, useContext, useState} from 'react';
import { DataContext } from './DataContext';
import {useInterval} from './useInterval';

export default function AppWs() {
    const ws = useRef(null);
    const {setWarning, setLiveData, isSocketOpen} = useContext(DataContext);
    const [isRunning,setIsRunning] = useState(true);

    useInterval(()=> {
        ws.current.send('');
    }, isRunning ? 20000 : null);
   
    useEffect(() => {
        ws.current = new WebSocket("wss://dashboard-app-backend.herokuapp.com/");
        ws.current.onopen = () => console.log("ws opened");
        ws.current.onclose = () => console.log("ws closed");
        ws.current.onmessage = evt => {
            var object = JSON.parse(evt.data);
               setLiveData(object.waterLevel);
               setWarning(object.warning);
        }

        if(isSocketOpen === false){
            ws.current.close();
            setIsRunning(false);
        }

        return () => {
            ws.current.close();
        };
    },[setWarning,setLiveData,isSocketOpen]);

    return (
        <div>
        </div>
    );
}
