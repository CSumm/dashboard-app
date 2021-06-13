import {useRef, useEffect} from 'react';

export default function AppWs() {
    const ws = useRef(null);

    useEffect(() => {
        ws.current = new WebSocket("ws://localhost:3001");
        ws.current.onopen = () => console.log("ws ahhhhh");
        ws.current.onclose = () => console.log("ws closed");
        ws.current.onmessage = evt => {
          const msg = evt.data;
          console.log(msg);
        }

        return () => {
            ws.current.close();
        };
    }, []);

    return (
        <div>
           <h1>hi</h1>
        </div>
    );
}