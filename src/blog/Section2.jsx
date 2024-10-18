import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsCardHeading } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { serverUrl } from "../constant";
import 'aos/dist/aos.css';
import AOS from 'aos';
const Section2 = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${serverUrl}/api/blogs`);
        const data = await response.json();
        if (response.ok) {
          setItems(data);
        } else {
          setError(data.error);
        }
      } catch (err) {
        setError('Failed to fetch data');
      }
    };

    fetchItems();
  }, []);
  useEffect(() => {
    AOS.init({ 
        duration: 1250 ,
        disable:  window.innerWidth < 768,
        once: true
    });
}, []);
  return (
    <>
      {items && items.length > 0 ? (
          <div className="blog-page">
          
     
          <LargeBlogList items={items} />
          <SmallBlogList items={items}/>
          <div className="flex h-48 items-center justify-center"></div>
        </div>
      ) : (
        <div className="flex h-48 items-center justify-center">
            <div className="no-Blogs">
              <div className="noBlogText">
                <h2>No Blogs Available</h2>
                <p>There are no blogs available at the moment. Please check back later for updates.</p>
              </div>
              <img src="/assets/noBlog.webp" data-aos="fade-up" alt="no blogs" />
          </div>
          {/* {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )} */}
        </div>
      )}
    </>
  );
};



const LargeBlogList = ({ items }) => {
  return (
    <section className="vertical-blog-list blog-container-block">
      {items.map((blog, index) => {
       
        const formattedDate = new Date(blog.date).toISOString().split('T')[0];
        return (
          <Link to={`/blog/${blog.id}`} key={index} className="blog-container group">
          <div className="blog-card">
            <div className="blog-img">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blog-textBox">
              <div className="blog-textContent">
                <h2><BsCardHeading />{blog.title}</h2>
                <p>{blog.smallDesc}</p>
                <span><SlCalender /> {formattedDate}</span>
              </div>
            </div>
          </div>
        </Link>
        );
      })}
    </section>
  );
};


const SmallBlogList = ({ items }) => {
  return (
    <section className=" small-blog-container-block">
      <h2>Latest</h2>
      {items.map((blog, index) => {
        const formattedDate = new Date(blog.date).toISOString().split('T')[0];
        return (
          <Link to={`/blog/${blog.id}`} key={index} className="small-blog-container group">
          <div className="small-blog-card">
            <div className="small-blog-img">
              <img src={blog.image} alt={blog.title} />
            </div>
            <h2>{blog.title}</h2>  
          </div>
        </Link>
        );
      })}
    </section>
  );
}


export default Section2;
