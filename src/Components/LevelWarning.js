import { useEffect} from "react";

export default function LevelWarning({warning,warnings, setArray}) {
    useEffect(() => {    
    if(warning !== '' && warnings.includes(warning) === false){
        setArray(warnings => [...warnings, warning]);
     }

        return () => {
            
        }
    }, [setArray,warning, warnings])

    const listItems = warnings.map((w, index) => <li className="warning-item" key={index}>{w}</li>);
    function clearWarningList(){
         setArray([]);
    }
    return (
        <div className="level-warning-block">
            <h4 className="level-warning_section-header">Warnings</h4>
            <ul className="level-warning">{warnings.length >= 1?listItems:<p>There are no warnings currently</p>}</ul>
            <button className="btn clear-warnings" onClick={clearWarningList}>Clear old warnings</button>
        </div>
    );
}