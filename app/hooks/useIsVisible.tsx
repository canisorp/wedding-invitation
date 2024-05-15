import { RefObject, useEffect, useState } from "react";

export const useIsVisible = (ref: RefObject<HTMLDivElement>) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    if (ref && ref.current && !passed) {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      });

      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [ref, passed]);

  useEffect(() => {
    if (isIntersecting) {
      setPassed(true);
    }
  }, [isIntersecting]);

  return isIntersecting;
};
