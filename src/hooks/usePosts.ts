import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
}


function usePosts() {
    const fetchPosts = () => {
        return axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.data)
    }

    const { data, error, isLoading } = useQuery<Post[], Error>({
        queryKey: ['posts'],
        queryFn: fetchPosts
    })

    return { data, error, isLoading }

}
export default usePosts