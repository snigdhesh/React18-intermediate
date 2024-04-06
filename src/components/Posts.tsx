import React from "react";
import { useState } from "react";
import usePosts from "../hooks/usePosts";

export interface PageQuery {
    pageSize: number;
}

function Posts() {

    const [pageQuery, setPageQuery] = useState({ pageSize: 10 });

    const { data, error, isLoading, fetchNextPage, isFetchingNextPage } = usePosts(pageQuery);

    if (error) return <p className="text-danger text-center h1">{error.message}</p>
    if (isLoading) return <p className="text-center h1">Loading ..</p>

    return (<>
        <div className="container mt-5">
            <ul className="list-group">
                {/* This is how we loop through nested objects. This is also loop in loop */}
                {data?.pages.map((page, index) =>
                    <React.Fragment key={index}>
                        {page.map(post => <li className="list-group-item" key={post.id}>{post.id}. {post.title}</li>)}
                    </React.Fragment>)}
            </ul>
            <div className="row mt-5">
                <div className="col-sm-2">
                    {/* This "fetchNextPage" refers to usePosts.ts > useInfiniteQuery() > getNextPageParam() */}
                    <button className="btn btn-primary" onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
                        {isFetchingNextPage ? 'Loading ...' : 'Load more'}
                    </button>
                </div>
            </div>
        </div>

    </>)
}

export default Posts