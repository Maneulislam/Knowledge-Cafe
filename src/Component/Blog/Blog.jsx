import React from 'react';

const Blog = ({ blog }) => {

    const { cover, title } = blog;

    return (
        <div>
            <img src={cover} alt="" />
            <p>{title}</p>
        </div>
    );
};

export default Blog;