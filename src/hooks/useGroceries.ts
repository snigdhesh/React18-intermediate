import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { apiClient } from "../services/apiClient"

export interface Grocery {
  id: number;
  name: string;
  price: number;
}

const useGroceries = () => {

  const queryClient = useQueryClient();

  const getGroceries = () => {
    return apiClient.get<Grocery[]>("/groceries")
      .then(res => res.data)
  }

  const postGrocery = (grocery: Grocery) => {
    return apiClient.post<Grocery>("/groceries",grocery)
      .then(res => res.data)
  }

  const { data:groceries, error, isLoading } = useQuery<Grocery[], Error>({
    queryKey: ['groceries'],
    queryFn: getGroceries
  })

  //Here we are just adding a grocery to groceries[]
  const updaterFunction = (grocery: Grocery, groceries: Grocery[]) => [...groceries,grocery];
  
  //Use useMutation hook to make a POST call to API.
  const addGrocery = useMutation({
    //This mustationFn = addGrocery.mutate({grocery object}) on GroceryForm.tsx
    mutationFn: (grocery: Grocery) => postGrocery(grocery),
    onSuccess: (apiResponse) => {
      //APPROACH1: Invalidate cache
        //queryClient.invalidateQueries(['groceries'])
      
      //APPROACH2: Modify cache directly: 
            //first parameter = queryKey
            //second parameter = function to update data to groceries list. Observe that we added alias name as 'groceries' to data in useQuery()
        queryClient.setQueriesData(['groceries'],updaterFunction(apiResponse,(groceries || [])))

    }
  })
  //Note: Observe that we added alias name as 'groceries' to data in useQuery()
  return { groceries, error, isLoading, addGrocery }
}

export default useGroceries