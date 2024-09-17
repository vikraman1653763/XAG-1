import React, { useState, useEffect } from "react";

const TypingEffect = ({ strings, speed = 100, delay = 2000 }) => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => {
        if (prevText.length === strings[currentIndex].length) {
          // If current string is fully typed, move to the next string
          setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
          return "";
        } else {
          // Type one character of the current string
          return strings[currentIndex].substring(0, prevText.length + 1);
        }
      });
    }, speed);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [strings, currentIndex, speed]);

  // Reset text after delay when all strings have been typed
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex(0);
      setText("");
    }, delay);
    
    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, [delay]);

  return <span>{text}</span>; // Add CSS class for styling
};

export default TypingEffect;
