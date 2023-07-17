import { useState } from "react";

const UseState = () => {
    const [counter, setCounter] = useState(0);
    const increament = () => {
        setCounter((counter) => (counter) + 1)
    }
    const decreament = () => {
        setCounter((counter) => (counter) - 1)
    }
    const Reset = () => {
        setCounter(counter === 0)
    }
    return (
        <div className="container text-center">
            <button className="btn btn_light mb-2" onClick={increament} >Counter Plus</button>
            <h1>Hello Counter: {counter}</h1>
            <button className="btn btn_light mb-2" onClick={decreament} >Counter Minus</button><br></br>
            <button className="btn btn_light mb-2" onClick={Reset} >Counter Reset</button>
        </div>
    );
};

export default UseState;