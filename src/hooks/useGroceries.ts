import { useQuery } from "@tanstack/react-query"
import groceryService, { Grocery } from "../services/groceryService";


const useGroceries = () => {

  const { data: groceries, error, isLoading } = useQuery<Grocery[], Error>({
    queryKey: ['groceries'],
    queryFn: groceryService.getAll
  })

  //Note: Observe that we added alias name as 'groceries' to data in useQuery()
  return { groceries, error, isLoading}
}

export default useGroceries