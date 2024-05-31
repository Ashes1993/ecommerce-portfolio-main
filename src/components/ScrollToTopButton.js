import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css";
import { TbArrowBigUpLineFilled } from "react-icons/tb";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldBeVisible = scrollPosition > 200;
      setIsVisible(shouldBeVisible);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);
  return (
    <div
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <TbArrowBigUpLineFilled />
    </div>
  );
};

export default ScrollToTopButton;
