import useCounterStore from "./store";

const Counter = () => {
    //const [counter, dispatch] = useReducer(counterReducer, 0)
    const {counter,max,resetMax, increment,reset} = useCounterStore();

    return (
        <>
            <div>
                <div className="row m-5">                    
                    <div className="col-12 text-center display-1">{counter}:{max}</div>
                </div>
                <div className="row m-5">
                    <div className="col-12 text-center">
                        <button className="btn btn-outline-primary ms-3" onClick={increment}>Increment counter</button>
                        <button className="btn btn-outline-primary ms-3" onClick={reset}>Reset counter</button>
                        <button className="btn btn-outline-primary ms-3" onClick={resetMax}>Reset Max</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Counter