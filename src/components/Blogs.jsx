import React from "react";
import '../style/blog.css';
import blogData from '../blog/blogData.json';
import Section1 from '../blog/Section1.jsx';
import Section2 from '../blog/Section2.jsx';
import Dummy from '../blog/dummy.jsx';
import { Link } from "react-router-dom";



const Blog = () => {
    return (
        <div className="">
        <Section1/>
        <Section2/>
        {/* <Dummy/>
            <div className="og-blog-container">
                {blogData.map((blog, index) => (
                    <Link to={`/blog/${blog.title}`} key={index}>
                    <div className="blog-card">
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
            </div> */}

        </div>
    );
}

export default Blog;
