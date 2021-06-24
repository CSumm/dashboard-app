import {useRef, useEffect, useContext} from 'react';
import { DataContext } from './DataContext';

export default function AppWs() {
    const ws = useRef(null);
    const {setWarning, setLiveData, socketCurrentState} = useContext(DataContext);
   
    useEffect(() => {
        ws.current = new WebSocket("ws://localhost:3001");
        ws.current.onopen = () => console.log("ws opened");
        ws.current.onclose = () => console.log("ws closed");
        ws.current.onmessage = evt => {
            var object = JSON.parse(evt.data);
               setLiveData(object.waterLevel);
               setWarning(object.warning);
        }

        if(socketCurrentState === false){
            ws.current.close();
        }

        return () => {
            ws.current.close();
        };
    },[setWarning,setLiveData,socketCurrentState]);

    return (
        <div>
        </div>
    );
}