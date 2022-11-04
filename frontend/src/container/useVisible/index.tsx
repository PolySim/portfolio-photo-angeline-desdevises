import { useEffect, useState } from "react";

export const useVisible = (rootElRef: any, top: string) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (rootElRef && rootElRef.current) {
      const ob = new IntersectionObserver(
        ([entry]) => {
          setVisible(entry.isIntersecting);
        },
        {
          rootMargin: top,
        }
      );
      ob.observe(rootElRef.current);
      return () => {
        if (rootElRef.current) {
          ob.unobserve(rootElRef.current);
        }
      };
    }
  }, []);
  if (visible) {
    rootElRef.current.src = rootElRef.current.dataset.src;
  }
  return visible;
};
