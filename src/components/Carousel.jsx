import React from "react";
import { useRef, useState } from "react";
import "./carousel.css"

const Carousel = ({ images }) => {

    const carousel = useRef();
    const [count, setCount] = useState(0);

    const incrementCarousel = (delta) => {
        if (!carousel.current) return;

        const width = carousel.current.offsetWidth;

        if (count + delta > images.length - 1) {
            setCount(0);
            carousel.current.scrollTo(0, 0);
            return;
        } else if (count + delta < 0) {
            setCount(images.length - 1);
            carousel.current.scrollTo(
                carousel.current.scrollLeft + width * (images.length - 1),
                0
            );
            return;
        }

        carousel.current.scrollTo(
            carousel.current.scrollLeft + width * delta,
            0
        );
        setCount(c => c + delta);
    }

    return <div className="carousel-container">
        <div className="carousel-button left-button" onClick={() => incrementCarousel(-1)} />
        <div className="carousel-button right-button" onClick={() => incrementCarousel(1)} />
        <div className="carousel" ref={carousel}>
            {images.map((img, index) => (
                <div key={`${index}-${img.title}`} className={index === count ? "carousel-item active" : "carousel-item"}>
                    <img src={img.src} alt="carousel" />
                    <figcaption>{img.title}</figcaption>
                </div>
            ))}
        </div>
    </div>;
}


export default Carousel; 