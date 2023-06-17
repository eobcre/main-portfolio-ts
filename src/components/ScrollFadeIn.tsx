import React, { useState, useEffect, useRef } from 'react';

// interface
interface ScrollFadeInProps {
  children: React.ReactNode;
}

const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({ children }) => {
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
