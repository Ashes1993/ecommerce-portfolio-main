import React, { useState, useEffect } from "react";
import "./Reviews.css";
import { motion, useMotionValue } from "framer-motion";
import reviewBackground from "../images/reviews-background.jpg";

const REVIEWS = [
  {
    text: "Wowed by Circuit City's user-friendly site! Found the perfect laptop for my team in minutes. Fast shipping & helpful customer service - highly recommend!",
    author: "TechWire",
  },
  {
    text: "Circuit City: Genuine products, competitive prices, and a filter system that's pure genius. They make laptop shopping a breeze!",
    author: "PC World Magazine",
  },
  {
    text: "Circuit City is our go-to for bulk laptop orders. Dedicated account manager, hassle-free service, and top-notch security - perfect for businesses!",
    author: "BizTech Solutions",
  },
];

const THRESHOLD = 70;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const Reviews = () => {
  const dragX = useMotionValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -THRESHOLD) {
      setCurrentIndex(currentIndex + 1);
    } else if (x >= THRESHOLD) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  useEffect(() => {
    const lastIndex = REVIEWS.length - 1;
    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }
    if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex]);
  return (
    <div
      style={{ backgroundImage: `url(${reviewBackground})` }}
      className="reviews-container"
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        animate={{ translateX: `-${currentIndex * 100}%` }}
        onDragEnd={onDragEnd}
        style={{ x: dragX }}
        transition={SPRING_OPTIONS}
        className="reviews"
      >
        {REVIEWS.map((review, index) => {
          return (
            <article key={index} className="review">
              <p className="review-text">{review.text}</p>
              <p className="review-author">{review.author}</p>
            </article>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Reviews;
