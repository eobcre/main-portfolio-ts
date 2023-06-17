import React, { useState, useEffect, useRef } from 'react';

// interface
interface ScrollFadeInProps {
  children: React.ReactNode;
}

const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const documentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        return entry.isIntersecting && setVisible(true);
      });
    });

    // null check
    documentRef.current ? observer.observe(documentRef.current) : null;
    // clean up
    // return () => {
    //   observer.disconnect();
    // };
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
