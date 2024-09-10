import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsCardHeading } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
const Section2 = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/blogs`);
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
          <span className="font-semibold uppercase text-neutral-500">
            No blogs available at the moment
          </span>
          {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}
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
