import React, { useEffect, useState } from "react";

const UpButton = () => {
    // const [visible, setVisible] = useState(false);

    // useEffect(() => {
    //     const toggleVisible = () => {
    //         const scrolled = window.scrollY || document.documentElement.scrollTop;
    //         const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //         setVisible(scrolled > (height / 2));
    //     };

    //     window.addEventListener("scroll", toggleVisible);

    //     return () => {
    //         window.removeEventListener("scroll", toggleVisible);
    //     };
    // }, []);

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button onClick={goTop} className="rocketbtn" >
            <img width="24px" height="auto" src="/assets/rocket.svg" alt="Back to top" />
        </button>
    );
};

export default UpButton;
