import React from 'react';
import './styles.scss';

const Card = ({ post, openModel }) => {
    const handleModelOpen = () => {
        openModel(post);
    };

    return (
        <div className="card" onClick={handleModelOpen}>
            <img src={post.thumbnail.small} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={handleModelOpen}>Learn More</button>
        </div>
    );
};

export default Card;
