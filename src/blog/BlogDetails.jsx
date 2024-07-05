import React from "react";
import { useParams } from "react-router-dom";
import blogData from './blogData.json';
import '../style/blog.css';

const BlogDetails = () => {
    const { title } = useParams();
    const blog = blogData.find(blog => blog.title === title);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className="blog-details-container">
            <div className="blog-details-img">
                <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blog-details-textBox">
                <div className="blog-details-textContent">
                    <h2>{blog.title}<span>{blog.time}</span></h2>
                    <p>{blog.details}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
