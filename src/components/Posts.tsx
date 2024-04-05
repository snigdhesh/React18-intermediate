import usePosts from "../hooks/usePosts";

function Posts() {
    const {data, error, isLoading} = usePosts();

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