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

    const { data, error, isLoading } = useQuery<Post[], Error>({
        queryKey: ['posts'],
        queryFn: fetchPosts
    })

    if (error) return <p className="text-danger text-center h1">{error.message}</p>
    if (isLoading) return <p className="text-center h1">Loading ..</p>

    return (<>
        <div className="container mt-5">
            <ul className="list-group">
                {data?.map(post => <li className="list-group-item" key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    </>)
}

export default Posts