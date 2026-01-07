import { useState, useEffect, useRef } from 'react';

export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const elementTop = rect.top + scrolled;
        const elementMiddle = elementTop + rect.height / 2;
        const screenMiddle = scrolled + window.innerHeight / 2;
        
        const diff = screenMiddle - elementMiddle;
        setOffset(diff * speed);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return [ref, offset];
};