import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Post {
    id: number;
    title: string;
}

function Posts() {
    const fetchPosts = () => {
        return axios.get<Post[]>("https://xjsonplaceholder.typicode.com/posts")
            .then(res => res.data)
    }

    const { data, error } = useQuery<Post[], Error>({
        queryKey: ['posts'],
        queryFn: fetchPosts
    })

    if (error) return <p className="text-danger h1">{error.message}</p>

    return (<>
        <div className="container mt-5">
            <ul className="list-group">
                {data?.map(post => <li className="list-group-item" key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    </>)
}

export default Posts