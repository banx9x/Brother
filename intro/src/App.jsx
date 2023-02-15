import { useState } from "react";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import Header from "./components/Header";

import "./App.css";

function App() {
    // Trạng thái - state
    const [comments, setComments] = useState([] /* Trạng thái ban đầu */);

    // Triển khai 2-way data binding trong React
    // Thông qua callback props
    const addComment = (value) => {
        const newComment = {
            id: comments.length,
            avatar: "/avatar.jpeg",
            ...value,
        };

        setComments([...comments, newComment]);
    };

    return (
        <div>
            <Header />

            <div className="main">
                {/* Truyền callback xuống cho component, cho phép component con gọi hàm để cập nhật trạng thái trên component cha */}
                <CommentForm onSubmit={addComment} />

                <CommentList comments={comments} />
            </div>
        </div>
    );
}

export default App;
