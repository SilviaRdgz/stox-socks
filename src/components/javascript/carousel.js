import React from 'react';
import '../styles/carousel.scss';
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

export const CarouselItem = ({ children, width }) => {
    return (
        <div className="carousel-item" style = {{ width: width }}>
            {children}
        </div>
    );
};


const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [setPaused] = useState(false);

    const updateIndex = (newIndex) => {
        if(newIndex < 0 ){
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) -1;
            }

        setActiveIndex(newIndex);
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    return (

        <div
            {...handlers}
            className="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="carousel__wrapper"
                 style={{transform: `translateX(-${activeIndex * 50}%)`}}
            >
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: "50%"});
                })}

            </div>
        </div>
    );
};

export default Carousel;