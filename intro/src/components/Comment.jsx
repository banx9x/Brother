import "./Comment.css";
import PropTypes from "prop-types";

// 1. Readonly - Component chỉ được phép đọc, không thay đổi
// 2. Props truyền từ cha xuống con
const Comment = ({ avatar, name, content, time }) => {
    return (
        <div className="comment">
            <div className="comment-author-avatar">
                <img src={avatar} alt="" />
            </div>

            <div className="comment-detail">
                <div className="comment-header">
                    <h4 className="comment-author-name">{name}</h4>
                    <time className="comment-time">{time}</time>
                </div>

                <p className="comment-content">{content}</p>
            </div>
        </div>
    );
};

Comment.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    content: PropTypes.string,
    time: PropTypes.string,
};

Comment.defaultProps = {
    avatar: "/default.png",
    name: "Guest",
    content: "Content",
    time: "Just now",
};

Comment.displayName = "Comment";

export default Comment;
