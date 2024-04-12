import { useMutation, useQueryClient } from "@tanstack/react-query"
import groceryService, { Grocery } from "../services/groceryService"

const useRemoveGrocery = () => {
    const queryClient = useQueryClient()

    const removeGrocery = useMutation<number,Error,number>({
        mutationFn: (id: number) => groceryService.delete(id),
        //Here 'id' as parameter (anywhere in this whole useMutation hook) is what we are sending to API.
        onSuccess: (apiResponse, id) => {
            //APPROACH1: Invalidate cache
            //queryClient.invalidateQueries(['groceries']);

            //APPROACH2: Update cache directly
            queryClient.setQueriesData<Grocery[]>(['groceries'], groceries => groceries?.filter(grocery => id != grocery.id))
        }
    })

    return { removeGrocery }
}

export default useRemoveGrocery