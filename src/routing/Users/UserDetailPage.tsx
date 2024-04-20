import { useLocation, useParams, useSearchParams } from "react-router-dom"

const UserDetailPage = () => {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams(); //With this we can access query string prams
    console.log(searchParams.toString()) //We need this to get queryparam data. Log searchPrams object and see what it offers.
    //Note: setSearchParams will have side effect, so this should be called only in event handlers or useEffect.
    const location = useLocation(); //This hook gives metadata/info about the current route/path
    console.log(location) 
  return (
    <div>
        <p>User {params.id} </p>
        <p>Query params : {searchParams.toString()}</p> {/*Try something like http://localhost:5173/users/2?age=27&height=7*/}
    </div>

  )
}

export default UserDetailPage