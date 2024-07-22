

 import React, { useEffect, useState } from "react";

const UpButton = () => {
    const [pageHeight, setPageHeight] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const updateHeight = () => {
            const height = document.documentElement.scrollHeight;
            setPageHeight(height);
        };

        updateHeight();

        const toggleVisible = () => {
            const scrolled = window.scrollY;
            setVisible(scrolled > (pageHeight / 2));
        };

        window.addEventListener("scroll", toggleVisible);
        window.addEventListener("resize", updateHeight);

        return () => {
            window.removeEventListener("scroll", toggleVisible);
            window.removeEventListener("resize", updateHeight);
        };
    }, [pageHeight]); 
    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button onClick={goTop} className="rocketbtn"  style={{ display: visible ? 'block' : 'none' }}>
            <img  width="24px" height="auto" src="/assets/rocket.svg" alt="Back to top" />
        </button>
    );
};

export default UpButton;
