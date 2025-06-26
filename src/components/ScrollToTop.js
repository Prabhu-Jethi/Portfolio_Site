// src/components/ScrollToTop.js
import React, { useEffect, useState } from "react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollUp}
        className="btn btn-secondary position-fixed"
        style={{ bottom: "20px", right: "20px", zIndex: 999 }}
      >
        ↑
      </button>
    )
  );
}

export default ScrollToTop;
