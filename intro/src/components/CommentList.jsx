import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
    const items = comments.map((comment) => <Comment {...comment} />);

    return (
        <div>
            <div>2 Comments</div>

            <div>{items}</div>
        </div>
    );
};

export default CommentList;
