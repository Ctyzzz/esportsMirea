import { useEffect, useState } from "react";

export const useIsIntersecting = (ref, ignore = false) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.target !== ref.current) {
          return;
        }

        if (entry.isIntersecting !== isIntersecting) {
          setIsIntersecting(entry.isIntersecting);
        }
      })
    );

    if (!ignore) {
      observer.observe(ref.current, {
        rootMargin: "0px",
        threshold: 1.0,
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};