import { useEffect, useRef, useState } from 'react';

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  const skipTransition = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already on screen at mount (e.g. tall viewport) — show as-is, no fake "entrance".
    if (el.getBoundingClientRect().top < window.innerHeight) {
      skipTransition.current = true;
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(28px)',
      transition: skipTransition.current
        ? 'none'
        : 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
    } as const,
  };
}
