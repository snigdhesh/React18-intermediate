import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
}


function usePosts(userId: number | undefined) {
    const fetchPosts = (userId: number | undefined) => {
        return axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
            params: {
                userId
            }
        })
            .then(res => res.data)
    }

    const { data, error, isLoading } = useQuery<Post[], Error>({
        enabled: !Number.isNaN(userId), //This enables query only if userId is a number. Meaning it will not make a queryFn call, if userId is NaN.
        queryKey: ['users', userId, 'posts'],
        queryFn: () => fetchPosts(userId)
    })

    return { data, error, isLoading }

}
export default usePosts