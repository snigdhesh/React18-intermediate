import useGroceries from "../hooks/useGroceries"
import useRemoveGrocery from "../hooks/useRemoveGrocery";
import GroceryForm from "./GroceryForm";


const GroceryList = () => {
    const { groceries } = useGroceries();
    const { removeGrocery } = useRemoveGrocery();
    let count = 1;

    return (
        <div className="container mt-5">
            <GroceryForm />
            {removeGrocery.error && <div className="alert alert-danger mt-3 mb-3">{removeGrocery.error.name} : {removeGrocery.error.message}</div>}
            <table className="table">
                <thead>
                    <tr>

                        <th scope="col">#</th>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* slice() method creates a copy of groceries array */}
                    {groceries?.slice().reverse().map(grocery =>
                        <tr key={grocery.id}>
                            <th scope="row">{count++}</th>
                            <td>{grocery.id}</td>
                            <td>{grocery.name}</td>
                            <td>{grocery.price.toFixed(2)}</td>
                            <td><button className="btn btn-outline-danger" onClick={() => removeGrocery.mutate(grocery.id)}>delete</button></td>
                        </tr>)}
                </tbody>
            </table>

        </div>
    )
}

export default GroceryList