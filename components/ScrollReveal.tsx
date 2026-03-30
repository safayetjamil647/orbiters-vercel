"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

export default function ScrollReveal({ children, className = "", delay = 0, style }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { 
        threshold: 0.05, // Lower threshold for better reliability
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before entering
      }
    );

    observer.observe(node);

    // Fallback: Show after 2 seconds if not triggered (just in case)
    const timer = setTimeout(() => setIsVisible(true), 2000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const delayClass = delay ? `reveal-delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} ${delayClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
