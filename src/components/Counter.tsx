import { useReducer, useState } from "react"
import counterReducer from "../reducers/counterReducer"

const Counter = () => {
    //const [counter, setCounter] = useState(0);
    const [counter, dispatch] = useReducer(counterReducer,0)

    return (
        <>
            <div className="container m-5">
                <div className="row">
                    <div className="col-6 display-1">{counter}</div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-outline-primary ms-3" onClick={()=>dispatch({type: 'INCREMENT'})}>Increment</button>
                        <button className="btn btn-outline-primary ms-3" onClick={()=> dispatch({type: 'RESET'})}>Reset</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Counter