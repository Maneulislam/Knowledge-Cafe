import React from 'react';
import { FaRegBookmark } from "react-icons/fa6";


const Blog = ({ blog, handleBookMark }) => {

    const { cover, title, author_img, author } = blog;

    return (
        <div >
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={cover}
                        alt="Shoes" />
                </figure>
                <div className="card-body">

                    <div className='flex items-center '>
                        <img className='w-12 mr-4' src={author_img} alt="" />
                        <h3 className='text-2xl font-bold mr-20'>{author}</h3>
                        <button onClick={() => handleBookMark(blog)}><FaRegBookmark size={25} /></button>

                    </div>

                    <h2 className="card-title">{title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Mark as Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;