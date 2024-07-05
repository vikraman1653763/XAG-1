import React from "react";
import './style/blog.css';
import blogData from './blog/blogData.json';
import { Link } from "react-router-dom";



const Blog = () => {
    return (
        <>
            <div className="blog-container">
                {blogData.map((blog, index) => (
                    
                         <Link to={`/blog/${blog.title}`}>
                    <div className="blog-card" key={index}>
                        <div className="blog-img">
                            <img src={blog.image} alt={blog.title}/>
                        </div>
                        <div className="blog-textBox">
                            <div className="blog-textContent">
                                <h2>{blog.title}</h2>
                                <p>{blog.description}</p>
                                <span>{blog.time}</span>
                            </div>
                        </div>
                    </div>
                         </Link>
                ))}
            </div>
        </>
    );
}

export default Blog;
