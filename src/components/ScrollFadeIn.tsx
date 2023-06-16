import React, { useState, useEffect, useRef } from 'react';

const ScrollFadeIn = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const documentRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        return entry.isIntersecting && setVisible(true);
      });
    });
    observer.observe(documentRef.current);
  }, []);

  return (
    <div
      ref={documentRef}
      className={`ScrollFadeIn ${visible ? 'fade-styling' : ''}`}
    >
      {children}
    </div>
  );
};

export default ScrollFadeIn;
