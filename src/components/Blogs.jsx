import React from "react";
import '../style/blog.css';
import Section1 from '../blog/Section1.jsx';
import Section2 from '../blog/Section2.jsx';



const Blog = () => {
    return (
        <div className="blogPageContainer">

        <Section1/>
        <Section2/>
        </div>
    );
}

export default Blog;
