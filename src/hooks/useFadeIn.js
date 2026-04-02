// src/hooks/useFadeIn.js
import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref.
 * Elements with class "fade-item" inside the ref get "visible" added when in view.
 *
 * @param {{ threshold?: number, staggerMs?: number }} options
 * @returns {React.RefObject}
 */
export function useFadeIn({ threshold = 0.1, staggerMs = 80 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const els = container.querySelectorAll(".fade-item");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Array.from(els).indexOf(entry.target);
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, idx * staggerMs);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [threshold, staggerMs]);

  return ref;
}
