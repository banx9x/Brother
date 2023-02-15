import React, { useState } from "react";
import "./CommentForm.css";

const CommentForm = ({ onSubmit /* Nhận hàm callback từ component cha */ }) => {
    // Khai báo state cho form
    const [values, setValues] = useState({
        name: "",
        content: "",
    });

    // Hàm xử lý sự kiện submit của form
    const handleSubmit = (e) => {
        // Ngăn hành vi mặc định (load lại trạng)
        e.preventDefault();

        // Gọi hàm callback để cập nhật state trên component cha
        onSubmit(values);
    };

    // Hàm xử lý sự kiện trên input/textarea
    const handleChange = (e) => {
        // Cập nhật state values
        setValues({
            // sao chép giá trị hiện tại
            ...values,
            // Cập nhật giá trị tương ứng với ô input/textarea
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit} action="" className="comment-form">
            <input
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
            />
            <textarea
                name="content"
                id=""
                cols="30"
                rows="10"
                value={values.content}
                onChange={handleChange}
            ></textarea>

            <button>Comment</button>
        </form>
    );
};

export default CommentForm;
