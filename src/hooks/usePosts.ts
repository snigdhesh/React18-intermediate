import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PageQuery } from "../components/Posts";

interface Post {
    id: number;
    title: string;
}


function usePosts(pageQuery: PageQuery) {
    const fetchPosts = (pageParam: number) => {
        return axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
            params: {
                _start: (pageParam - 1) * pageQuery.pageSize,
                _limit: pageQuery.pageSize
            }
        })
            .then(res => res.data)
    }

    const { data, error, isLoading, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<Post[], Error>({
        queryKey: ['users', pageQuery, 'posts'],
        queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
        //When user clicks on "load more" button, ReactQuery calls getNextPageParam function.
        //And passes an object (with result inside it) to queryFn() as parameter.
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? allPages.length + 1 : undefined
        }
    })

    return { data, error, isLoading, fetchNextPage, isFetchingNextPage }

}
export default usePosts