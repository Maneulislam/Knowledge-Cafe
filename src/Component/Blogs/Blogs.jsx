import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleBookMark, handleMarkAsReadBtn }) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    return (
        <div className='w-[80%] mx-auto'>
            <h2 className='text-3xl font-extrabold text-center mb-20'>Total Blogs : {blogs.length}</h2>
            <div className='grid grid-cols-2 gap-20'>
                {
                    blogs.map(blog => <Blog key={blog.id} handleBookMark={handleBookMark} handleMarkAsReadBtn={handleMarkAsReadBtn} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;