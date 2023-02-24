import React from "react";
import { Helmet } from "react-helmet-async";

const Posts = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Quản lý bài viết</title>
            </Helmet>

            <div>Posts</div>
        </React.Fragment>
    );
};

export default Posts;
