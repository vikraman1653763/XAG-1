import React, { useEffect, useRef } from 'react';

const Section1 = () => {
    const canvasRef = useRef(null);
    const imgRef = useRef(new Image());
    const frameCount = 91;
    const images = useRef([]);
    
    const currentFrame = index => (
        `/unfold/${index.toString().padStart(4, '0')}.png`
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const html = document.documentElement;

        const preloadImages = () => {
            for (let i = 1; i <= frameCount; i++) {
                const img = new Image();
                img.src = currentFrame(i);
                img.onload = () => {
                    images.current[i] = img;
                };
                img.onerror = () => {
                    console.error(`Failed to load image: ${img.src}`);
                };
            }
        };

        const drawImage = (img) => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, 0, 0);
        };

        imgRef.current.onload = () => {
            drawImage(imgRef.current);
        };

        const handleScroll = () => {
            const scrollTop = html.scrollTop;
            const maxScrollTop = html.scrollHeight - window.innerHeight;
            const scrollFraction = scrollTop / maxScrollTop;
            const frameIndex = Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount * 2));

            requestAnimationFrame(() => {
                if (images.current[frameIndex + 1]) {
                    drawImage(images.current[frameIndex + 1]);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        preloadImages();

        // Set canvas dimensions
        canvas.width = 2560;
        canvas.height = 1440;

        // Draw the first image
        imgRef.current.src = currentFrame(1);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="sec-1">
            <canvas ref={canvasRef} id="img-seq"></canvas>
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
