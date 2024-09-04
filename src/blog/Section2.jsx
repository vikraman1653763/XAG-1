import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <div className="bg-black-800">
          <div className="flex h-48 items-center justify-center">
            <span className="font-semibold uppercase text-neutral-500">
              Explore
            </span>
          </div>
          <HorizontalScrollCarousel items={items} />
          <VerticalBlogList items={items} />
          <div className="flex h-48 items-center justify-center"></div>
        </div>
      ) : (
        <div className="flex h-48 items-center justify-center">
          <span className="font-semibold uppercase text-neutral-500">
            No blogs available at the moment
          </span>
        </div>
      )}
    </>
  );
};

const HorizontalScrollCarousel = ({ items }) => {
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
          {items.map((card, index) => (
            <Card card={card} key={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};


const VerticalBlogList = ({ items }) => {
  return (
    <section className="vertical-blog-list blog-container-block">
      {items.map((blog, index) => {
       
        const formattedDate = new Date(blog.date).toISOString().split('T')[0];
        console.log(blog)
        return (
          <Link to={`/blog/${blog.id}`} key={index} className="blog-container group">
          <div className="blog-card">
            <div className="blog-img">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blog-textBox">
              <div className="blog-textContent">
                <h2>{blog.title}</h2>
                <p>{blog.smallDesc}</p>
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>
        </Link>
        );
      })}
    </section>
  );
};


const Card = ({ card }) => {
  const formattedDate = new Date(card.date).toISOString().split('T')[0];

  return (
    <Link to={`/blog/${card.id}`} className="blog-container group">
      <div className="blog-card">
        <div className="blog-img">
          <img src={card.image} alt={card.title} />
        </div>
        <div className="blog-textBox">
          <div className="blog-textContent">
            <h2>{card.title}</h2>
            <p>{card.smallDesc}</p>
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Section2;
