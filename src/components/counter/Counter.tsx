import useCounterStore from "./store";

const Counter = () => {
    //const [counter, dispatch] = useReducer(counterReducer, 0)
    const {counter, increment,reset} = useCounterStore();

    return (
        <>
            <div>
                <div className="row m-5">                    
                    <div className="col-12 text-center display-1">{counter}</div>
                </div>
                <div className="row m-5">
                    <div className="col-12 text-center">
                        <button className="btn btn-outline-primary ms-3" onClick={increment}>Increment</button>
                        <button className="btn btn-outline-primary ms-3" onClick={reset}>Reset</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Counter