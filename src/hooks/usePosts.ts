import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PageQuery } from "../components/Posts";

interface Post {
    id: number;
    title: string;
}


function usePosts(pageQuery: PageQuery) {
    const fetchPosts = (pageQuery:PageQuery) => {
        return axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
            params: {
                _start: (pageQuery.pageNumber - 1) * pageQuery.pageSize,
                _limit: pageQuery.pageSize
            }
        })
            .then(res => res.data)
    }

    const { data, error, isLoading } = useQuery<Post[], Error>({
        queryKey: ['users', pageQuery, 'posts'],
        queryFn: () => fetchPosts(pageQuery)
    })

    return { data, error, isLoading }

}
export default usePosts