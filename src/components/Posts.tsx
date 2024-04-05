import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Post {
    id: number;
    title: string;
}

function Posts() {
    const fetchPosts = () => {
        return axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.data)
    }

    const { data } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts
    })
    return (<>
        <div className="container mt-5">
            <ul className="list-group">
                {data?.map(post=> <li className="list-group-item" key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    </>)
}

export default Posts