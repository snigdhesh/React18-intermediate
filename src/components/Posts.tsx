import { useState } from "react";
import usePosts from "../hooks/usePosts";

function Posts() {
    const [userId, setUserId] = useState<number>();
    const { data, error, isLoading } = usePosts(userId);

    if (error) return <p className="text-danger text-center h1">{error.message}</p>
    if (isLoading) return <p className="text-center h1">Loading ..</p>

    return (<>
        <div className="container mt-5">
            <select name="" value={userId} className="form-select mb-5" onChange={(event) => {
                console.log(parseInt(event.target.value)) 
                setUserId(parseInt(event.target.value))
            }}>
                <option value="">Select user</option>
                <option value="1">user1</option>
                <option value="2">user2</option>
                <option value="3">user3</option>
            </select>
            <ul className="list-group">
                {data?.map(post => <li className="list-group-item" key={post.id}>{post.id}. {post.title}</li>)}
            </ul>
        </div>
    </>)
}

export default Posts