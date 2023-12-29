import { useState } from "react";
import './Counter.css'

function Counter() {
    let x = 10;
    const [count, setCount] = useState(10);

    function updateX() {
        console.log("Updateing X", x);
        x += 1
    }

    function updateCount() {
        console.log("Updateing Count", count);
        setCount(count + 1)
    }

    return (
        <div className="counter">
            <span className="counterValue">X: {x}</span>  
            <span className="counterValue">Count: {count}</span> 

            {/* <button onClick={() => x += 1}>Click and Update X</button> 
            <button onClick={() => setCount(count + 1)}>Click and Update Count</button> */}
            
            <button onClick={updateX}>Click and Update X</button>
            <button onClick={updateCount}>Click and Update Count</button>
        </div>
    );
}

export default Counter;