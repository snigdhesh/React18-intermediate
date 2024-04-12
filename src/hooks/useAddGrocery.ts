import {  useMutation, useQueryClient } from '@tanstack/react-query'
import groceryService, { Grocery } from '../services/groceryService';


const useAddGrocery = () => {
    const queryClient = useQueryClient();
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
      return {addGrocery}
}

export default useAddGrocery