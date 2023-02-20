import React from "react";
import { Link } from "react-router-dom";
import Card from "../../../components/card";
import { postService } from "../../../features/root/service";

const PostList = () => {
    const {
        data = [],
        isLoading,
        isError,
        error,
    } = postService.useGetPostsQuery();

    return (
        <div>
            <h1>
                Post List <Link to="/posts/create">Create Post</Link>
            </h1>

            <div className="game-list">
                {data.map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        short_description={item.body}
                    />
                ))}
            </div>
        </div>
    );
};

export default PostList;
