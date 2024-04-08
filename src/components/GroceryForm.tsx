import { FormEvent, useRef } from "react"
import useGroceries from "../hooks/useGroceries";


const GroceryForm = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);

    const { addGrocery } = useGroceries();

    const onFormSubmit = (event: FormEvent) => {
        if (nameRef.current && priceRef.current) {
            addGrocery.mutate({
                id: 0,
                name: nameRef.current.value,
                price: parseFloat(priceRef.current.value)
            })
        }
        event.preventDefault();
    }

    return (
        <div className="container mt-5">
            <form onSubmit={(event) => onFormSubmit(event)}>
                <div className="row mb-3">
                    <div className="col-2">
                        <label htmlFor="" className="form-label">Grocery</label>
                    </div>
                    <div className="col-2">
                        <input ref={nameRef} type="text" className="form-control" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-2">
                        <label htmlFor="" className="form-label">Price</label>
                    </div>
                    <div className="col-2">
                        <input ref={priceRef} type="number" step="any" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <label htmlFor="" className="form-label"></label>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-outline-info" type="submit">Add</button>
                    </div>
                </div>
                {addGrocery.error && <div className="alert alert-danger mt-3 mb-3">{addGrocery.error.name} : {addGrocery.error.message}</div>}
            </form>
        </div>
    )
}

export default GroceryForm