import { useState } from "react";
import './Counter.css'

function Counter() {
    const [x, setX] = useState(10)
    const [count, setCount] = useState(10);

    function updateX() {
        setX(x + 1);
        console.log("Updating X");
    }

    function updateCount() {
        setCount(count + 1);
        console.log("Updating Count");
    }

    return (
        <div className="counter">
            <span className="counterValue">X: {x}</span>  
            <span className="counterValue">Count: {count}</span> 

            {/* <button onClick={() => setX(x + 1)}>Click and Update X</button> 
            <button onClick={() => setCount(count + 1)}>Click and Update Count</button> */}
            
            <button onClick={updateX}>Click and Update X</button>
            <button onClick={updateCount}>Click and Update Count</button>
        </div>
    );
}

export default Counter;