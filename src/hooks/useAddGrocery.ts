import {  useMutation, useQueryClient } from '@tanstack/react-query'
import groceryService, { Grocery } from '../services/groceryService';

interface AddTodoContext{
    previousGroceries: Grocery[]
}

const useAddGrocery = () => {
    const queryClient = useQueryClient();
    //Use useMutation hook to make a POST call to API.
    const addGrocery = useMutation<Grocery, Error, Grocery, AddTodoContext>({

        //optimistic update needs onMutate: We update cache first, expecting API will work anyway. Once we get response from API, we update cache with API response (See 'onSuccess' below)
        onMutate: (grocery: Grocery) => {
            //In case API errors out (see 'onError' below), we need to have current set of groceries, before updating to cache.
            const previousGroceries = queryClient.getQueryData<Grocery[]>(['groceries']) || []
            
            //We update cache first, at this API mutationFn will not execute - meaning no API call happens
            queryClient.setQueryData<Grocery[]>(['groceries'],groceries => [...(groceries||[]),grocery])

            return {previousGroceries}
        },
        //This mutationFn is equal to, addGrocery.mutate({grocery object}) on GroceryForm.tsx
        mutationFn: (grocery: Grocery) => groceryService.post(grocery),
        onSuccess: (apiResponse,grocery) => {
          //APPROACH1: Invalidate cache
          //queryClient.invalidateQueries(['groceries'])
    
          //APPROACH2: Modify cache directly: 
          //first parameter = queryKey
          //second parameter = function to update data to groceries list. Observe that we added alias name as 'groceries' to data in useQuery()
          //Note: Mentioning Grocery[] in setQueryData is mandatory, only then setQueryData can get groceries using the key we provided.
          //Note: 'groceries' comes from setQueriesData (using the key we provided) as second parameter automatically.
          queryClient.setQueryData<Grocery[]>(['groceries'], groceries => groceries?.map(item => item === grocery ? apiResponse : item) )
        },
        onError: (error,grocery,context) => {
            if(!context) return 
            queryClient.setQueryData<Grocery[]>(['groceries'],context.previousGroceries)
        }
      })
      return {addGrocery}
}

export default useAddGrocery