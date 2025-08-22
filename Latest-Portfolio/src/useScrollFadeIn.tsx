import { useRef, useEffect, useState } from 'react';

/**
 * useScrollFadeIn
 * Adds a fade-in and slide-up effect to any element when it enters the viewport.
 * Triggers every time the element enters the viewport (scrolling up or down).
 * Usage: const [ref, isVisible] = useScrollFadeIn();
 * <div ref={ref} className={isVisible ? 'fade-in-up' : 'fade-init'}>...</div>
 */
export function useScrollFadeIn<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible] as const;
} 