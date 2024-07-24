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
        </div>
    );
}

export default Blog;
