import { useState } from "react";
import usePosts from "../hooks/usePosts";

export interface PageQuery {
    pageNumber: number;
    pageSize: number;
}

function Posts() {

    const [pageQuery, setPageQuery] = useState({ pageNumber: 1, pageSize: 10 });

    const { data, error, isLoading } = usePosts(pageQuery);

    if (error) return <p className="text-danger text-center h1">{error.message}</p>
    if (isLoading) return <p className="text-center h1">Loading ..</p>

    return (<>
        <div className="container mt-5">
            <ul className="list-group">
                {data?.map(post => <li className="list-group-item" key={post.id}>{post.id}. {post.title}</li>)}
            </ul>
            <div className="row">
                <div className="col-sm-1 mt-3"><button className="btn btn-info" disabled={pageQuery.pageNumber === 1} onClick={() => setPageQuery({ ...pageQuery, pageNumber: pageQuery.pageNumber - 1 })}>prev</button></div>
                <div className="col-sm-1 mt-3"><button className="btn btn-info" disabled={pageQuery.pageNumber >= 10} onClick={() => setPageQuery({ ...pageQuery, pageNumber: pageQuery.pageNumber + 1 })}>next</button></div>
            </div>
        </div>
    </>)
}

export default Posts