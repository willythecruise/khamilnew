import { useEffect, useRef, useCallback } from "react";

export function useFadeUp() {
  const elementRefs = useRef<HTMLElement[]>([]);

  // Ref callback to attach to elements
  const setRef = useCallback((el: HTMLElement | null) => {
    if (el && !elementRefs.current.includes(el)) {
      elementRefs.current.push(el);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up-in");
          }
        });
      },
      { threshold: 0.15 }
    );
    elementRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return setRef;
} 