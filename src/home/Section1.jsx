import React, { useEffect } from 'react';


const Section1 = () => {
    useEffect(() => {
        const html = document.documentElement;
        const canvas = document.getElementById("img-seq");
        const context = canvas.getContext("2d");

        const frameCount = 61;
        let frameStart = 1;
        const currentFrame = index => (
            `/Imagesequence/${index.toString().padStart(1, 0)}.webp`
        );
        const preloadImages = () => {
            for (let idx = 0; idx < frameCount; idx++) {
                const img = new Image();
                img.src = currentFrame(idx);
            }
        }

        const img = new Image();
        img.src = currentFrame(frameStart);
        canvas.width = 2560;
        canvas.height = 1440;
        img.onload = function () {
            context.drawImage(img, 0, 0);
        }

        const updateImage = idx => {
            img.src = currentFrame(idx);
            context.drawImage(img, 0, 0);
        }

        window.addEventListener('scroll', () => {
            const scrollTop = html.scrollTop;
            const maxScrollTop = html.scrollHeight - window.innerHeight;
            const scrollFraction = scrollTop / maxScrollTop;
            const frameIdx = Math.min(
                frameCount - 1, Math.ceil(scrollFraction * frameCount)
            );
            requestAnimationFrame(() => updateImage(frameIdx + 1));
        });

        preloadImages();
    }, []);

    return (
        <section id="sec-1">
            <canvas id="img-seq"></canvas>
            <div id="outer-layer">
                <div id="inner-layer">
                    <div id="buttons">
                        <button>Learn more &nbsp; <i className="fa-solid fa-arrow-trend-up fa-lg"></i></button>
                        <button>Watch video &nbsp; <i className="fa-regular fa-circle-play fa-lg"></i></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1;
