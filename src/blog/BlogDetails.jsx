import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../style/blog.css';
import Section2 from '../blog/Section2.jsx';

const BlogDetails = () => {
    const { id } = useParams(); 
    console.log(id)
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/blogs/${id}`);  // Fetch by id
                if (response.ok) {
                    const data = await response.json();
                    setBlog(data);
                    console.log(data);
                } else {
                    setError('Blog not found');
                }
            } catch (error) {
                setError("Failed to fetch blog data");
            }
        };
        fetchBlog();
    }, [id]);  // Dependency now is the id

    if (error) {
        return <div>{error}</div>;
    }

    if (!blog) {
        return <div>Loading...</div>;
    }

    // Format the date if it's available
    const formattedDate = new Date(blog.date).toISOString().split('T')[0];

    return (
        <div className="blog-details-container">
            <div className="blog-details-img">
                <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blog-details-textBox">
                <div className="blog-details-textContent">
                    <h2>{blog.title} <span>{formattedDate}</span></h2>
                    <p>{blog.details}</p>
                </div>
            </div>
            <div className='small-blogs'>
                <Section2 />
            </div>
        </div>
    );
};

export default BlogDetails;
