import useGroceries from "../hooks/useGroceries"
import GroceryForm from "./GroceryForm";


const GroceryList = () => {
    const { groceries, error, isLoading } = useGroceries();
    let count = 1;

    return (
        <div className="container mt-5">
            <GroceryForm />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {groceries?.map(grocery =>
                        <tr key={grocery.id}>
                            <th scope="row">{count++}</th>
                            <td>{grocery.name}</td>
                            <td>{grocery.price.toFixed(2)}</td>
                            <td><button className="btn btn-outline-danger">delete</button></td>
                        </tr>)}
                </tbody>
            </table>

        </div>
    )
}

export default GroceryList