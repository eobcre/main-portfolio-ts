import React, { useState, useEffect, useRef } from 'react';

type ScrollFadeInProps = {
  children: React.ReactNode;
};

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
