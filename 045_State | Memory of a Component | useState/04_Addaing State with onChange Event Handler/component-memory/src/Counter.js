import { useState } from "react";
import './Counter.css'

function Counter() {
    const [x, setX] = useState(10)
    const [count, setCount] = useState(10);
    const [text, setText] = useState("");

    function updateX() {
        setX(x + 1);
        console.log("Updating X");
    }

    function updateCount() {
        setCount(count + 1);
        console.log("Updating Count");
    }

    function handleTextChange(event) {
        setText(event.target.value);
    }

    return (
        <div className="counter">
            <span className="counterValue">X: {x}</span>  
            <span className="counterValue">Count: {count}</span> 

            {/* <input type="text" onChange={(event) => setText(event.target.value)} /> */}
            <input type="text" onChange={handleTextChange} value={text} />
            <span>{text}</span>

            <button onClick={updateX}>Click and Update X</button>
            <button onClick={updateCount}>Click and Update Count</button>
        </div>
    );
}

export default Counter;