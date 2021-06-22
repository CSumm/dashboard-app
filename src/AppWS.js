import {useRef, useEffect} from 'react';

export default function AppWs({setMessage, setWarning, socketCurrentState}) {
    const ws = useRef(null);
   
    useEffect(() => {
        ws.current = new WebSocket("ws://localhost:3001");
        ws.current.onopen = () => console.log("ws opened");
        ws.current.onclose = () => console.log("ws closed");
        ws.current.onmessage = evt => {
            var object = JSON.parse(evt.data);
               setMessage(object.waterLevel);
               setWarning(object.warning);
        }

        if(socketCurrentState === false){
            ws.current.close();
        }

        return () => {
            ws.current.close();
        };
    },[setWarning,setMessage,socketCurrentState]);

    return (
        <div>
        </div>
    );
}