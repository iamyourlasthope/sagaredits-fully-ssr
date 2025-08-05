"use client";
import React, { useEffect, useRef } from "react";
import styles from "./AnimatedCurvedHeader.module.css";

interface AnimatedCurvedHeaderProps {
  children: React.ReactNode;
}

export default function AnimatedCurvedHeader({ children }: AnimatedCurvedHeaderProps) {
  const curveRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const curve = curveRef.current;
    if (!curve) return;

    let lastKnownScrollPosition = 0;
    const defaultCurveValue = 350;
    const curveRate = 3;
    let ticking = false;
    let curveValue: number;

    function scrollEvent(scrollPos: number) {
      if (scrollPos >= 0 && scrollPos < defaultCurveValue) {
        curveValue = defaultCurveValue - parseFloat((scrollPos / curveRate).toString());
        curve.setAttribute(
          "d",
          "M 800 300 Q 400 " + curveValue + " 0 300 L 0 0 L 800 0 L 800 300 Z"
        );
      }
    }

    function handleScroll() {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          scrollEvent(lastKnownScrollPosition);
          ticking = false;
        });
      }

      ticking = true;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.svgContainer}>
        <svg viewBox="0 0 800 400" className={styles.svg}>
          <path
            ref={curveRef}
            id="curve"
            fill="currentColor"
            d="M 800 300 Q 400 350 0 300 L 0 0 L 800 0 L 800 300 Z"
          />
        </svg>
      </div>

      <header className={styles.header}>
        {children}
      </header>
    </div>
  );
} 