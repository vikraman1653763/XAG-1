import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
// import blogData from './blogData.json';
import { Link } from "react-router-dom";
let blogData='';
const Section2 = () => {
  return (
      <>
      {blogData && blogData.length>0?
      
      <div className="bg-black-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Explore
        </span>
      </div>
        <HorizontalScrollCarousel />
        <VerticalBlogList /> 
        <div className="flex h-48 items-center justify-center">
        
      </div>
    </div>
      :  <div className="flex h-48 items-center justify-center">
          <span className="font-semibold uppercase text-neutral-500">
          No blogs available at the moment
          </span>
        </div>
      }
      
      </>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 20], ["0%", "-96%"]);

  return (
    <section ref={targetRef} className="horizontal-carousel blog-container-block relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-4 "
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {blogData.map((card, index) => {
            return <Card card={card} key={index} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const VerticalBlogList = () => {
  return (
    <section className="vertical-blog-list blog-container-block">
      {blogData.map((blog, index) => (
        <Link to={`/blog/${blog.title}`} key={index} className="blog-container group">
          <div className="blog-card">
            <div className="blog-img">
              <img src={blog.image} alt={blog.title} />
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
    </section>
  );
};

const Card = () => {
  return (
    <>
      {blogData.map((blog, index) => (
        <Link to={`/blog/${blog.title}`} key={index} className="blog-container group">
          <div className="blog-card">
            <div className="blog-img">
              <img src={blog.image} alt={blog.title} />
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
    </>
  );
};

export default Section2;
