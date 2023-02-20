import React, { useState } from "react";
import { postService } from "../../../features/root/service";

const PostForm = () => {
    const [post, setPost] = useState({ title: "", body: "" });
    const [createPost, { data = {}, isLoading, isError, error }] =
        postService.useCreatePostMutation();

    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        createPost(post);
    };

    return (
        <div>
            <h1>Create New Post</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={post.title}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="body">Body</label>
                    <input
                        type="text"
                        id="body"
                        name="body"
                        value={post.body}
                        onChange={handleChange}
                    />
                </div>

                <button>Submit</button>
            </form>
        </div>
    );
};

export default PostForm;
