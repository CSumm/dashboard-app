import { useEffect } from "react";

export default function LevelWarning({warning,warnings, setArray}) {
    useEffect(() => {    
    if(warning !== ''){
        setArray(warnings => [...warnings, warning]);
     }
        return () => {
            
        }
    }, [setArray,warning])

    const listItems = warnings.map((w, index) => <li key={index}>{w}</li>);
    function clearWarningList(){
        setArray([]);
    }
    return (
        <div>
            <ul>{listItems}</ul>
            <button onClick={clearWarningList}>Clear warnings</button>
        </div>
    );
}