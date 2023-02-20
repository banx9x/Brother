import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, thumbnail, short_description }) => {
    return (
        <div className="card">
            <Link to={`/game/${id}`}>
                <img src={thumbnail} alt={title} />

                <div className="card-info">
                    <h3>{title}</h3>
                    <p>{short_description}</p>
                </div>
            </Link>
        </div>
    );
};

export default Card;
