import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import groceryService, { Grocery } from "../services/groceryService";


const useGroceries = () => {

  const queryClient = useQueryClient();

  const { data: groceries, error, isLoading } = useQuery<Grocery[], Error>({
    queryKey: ['groceries'],
    queryFn: groceryService.getAll
  })

  //Use useMutation hook to make a POST call to API.
  const addGrocery = useMutation<Grocery, Error, Grocery>({
    //This mustationFn = addGrocery.mutate({grocery object}) on GroceryForm.tsx
    mutationFn: (grocery: Grocery) => groceryService.post(grocery),
    onSuccess: (apiResponse) => {
      //APPROACH1: Invalidate cache
      //queryClient.invalidateQueries(['groceries'])

      //APPROACH2: Modify cache directly: 
      //first parameter = queryKey
      //second parameter = function to update data to groceries list. Observe that we added alias name as 'groceries' to data in useQuery()
      //Note: Mentioning Grocery[] in setQueryData is mandatory, only then setQueryData can get groceries using the key we provided.
      //Note: 'groceries' comes from setQueriesData (using the key we provided) as second parameter automatically.
      queryClient.setQueryData<Grocery[]>(['groceries'], groceries => [...(groceries || []), apiResponse])

    }
  })

  const removeGrocery = useMutation({
    mutationFn: (id: number) => groceryService.delete(id),
    //Here 'id' as parameter (anywhere in this whole useMutation hook) is what we are sending to API.
    onSuccess: (apiResponse, id) => {
      //APPROACH1: Invalidate cache
      //queryClient.invalidateQueries(['groceries']);

      //APPROACH2: Update cache directly
      queryClient.setQueriesData<Grocery[]>(['groceries'], groceries => groceries?.filter(grocery => id != grocery.id))
    }
  })

  //Note: Observe that we added alias name as 'groceries' to data in useQuery()
  return { groceries, error, isLoading, addGrocery, removeGrocery }
}

export default useGroceries