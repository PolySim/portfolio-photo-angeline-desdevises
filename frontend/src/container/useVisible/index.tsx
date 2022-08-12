import React, { useEffect, useState } from "react";

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
        // ob.unobserve(rootElRef.current);
      };
    }
  }, []);
  if (visible) {
    rootElRef.current.src = rootElRef.current.dataset.src;
  } else {
    if (rootElRef.current) {
      rootElRef.current.src = "";
    }
  }
  return visible;
};
