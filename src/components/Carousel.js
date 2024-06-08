import React, { useCallback, useEffect, useState } from "react";
import sliderImage1 from "../images/slider/slider-image-1.jpg";
import sliderImage2 from "../images/slider/slider-image-2.jpg";
import sliderImage3 from "../images/slider/slider-image-3.jpg";
import sliderImage4 from "../images/slider/slider-image-4.jpg";
import { motion, useMotionValue } from "framer-motion";
import "./Carousel.css";

const IMAGES = [
  { id: 0, imageUrl: sliderImage1, imageText: "Unleash Your Potential" },
  {
    id: 1,
    imageUrl: sliderImage2,
    imageText: "Experience Immersive Computing",
  },
  {
    id: 2,
    imageUrl: sliderImage3,
    imageText: "Effortless Power, Effortless Style",
  },
  {
    id: 3,
    imageUrl: sliderImage4,
    imageText: "Beyond Browsing, Beyond Limits",
  },
];
const THRESHOLD = 70;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragX = useMotionValue(0);

  const [textVisibility, setTextVisibility] = useState([
    true,
    ...new Array(IMAGES.length - 1).fill(false),
  ]);

  const handleSlideChange = useCallback(
    (newIndex) => {
      setCurrentIndex(newIndex);
      const newTextVisibility = [...textVisibility];
      newTextVisibility.fill(false);
      newTextVisibility[newIndex] = true;
      setTextVisibility(newTextVisibility);
    },
    [textVisibility]
  );

  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);
    const x = dragX.get();
    if (x <= -THRESHOLD) {
      handleSlideChange(currentIndex + 1);
    } else if (x >= THRESHOLD) {
      handleSlideChange(currentIndex - 1);
    }
  };
  useEffect(() => {
    const lastIndex = IMAGES.length - 1;
    if (currentIndex < 0) {
      handleSlideChange(lastIndex);
    }
    if (currentIndex > lastIndex) {
      handleSlideChange(0);
    }
  }, [currentIndex, handleSlideChange]);

  return (
    <section className="slider-container">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        animate={{ translateX: `-${currentIndex * 100}%` }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        className={`slides-container ${dragging ? "dragging" : ""}`}
        style={{ x: dragX }}
        transition={SPRING_OPTIONS}
      >
        <Images currentIndex={currentIndex} textVisibility={textVisibility} />
      </motion.div>
      <Dots currentIndex={currentIndex} handleSlideChange={handleSlideChange} />
    </section>
  );
};

export default Carousel;

const Images = ({ currentIndex, textVisibility }) => {
  return (
    <>
      {IMAGES.map((image) => {
        return (
          <motion.div
            key={image.id}
            style={{
              backgroundImage: `url(${image.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="slide"
            animate={{ scale: currentIndex === image.id ? 0.95 : 0.85 }}
            transition={SPRING_OPTIONS}
          >
            <h1
              className={`slide-text ${
                textVisibility[image.id] && "active-text"
              }`}
            >
              {image.imageText}
            </h1>
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({ currentIndex, handleSlideChange }) => {
  return (
    <div className="dots-container">
      <hr className="dots-line" />
      <div className="dots"></div>
      {IMAGES.map((image) => {
        return (
          <button
            key={image.id}
            onClick={() => handleSlideChange(image.id)}
            className="dot"
            style={{
              backgroundColor: `${
                image.id === currentIndex ? "white" : "gray"
              }`,
            }}
          ></button>
        );
      })}
    </div>
  );
};
