"use client";
import React, { useRef } from "react";
import styles from "./AnimatedCurvedHeader.module.css";

interface AnimatedCurvedHeaderProps {
  children: React.ReactNode;
}

export default function AnimatedCurvedHeader({ children }: AnimatedCurvedHeaderProps) {
  const curveRef = useRef<SVGPathElement>(null);

  return (
    <div className={styles.container}>
      {/* Hero content goes on top */}
      <header className={styles.header}>
        {children}
      </header>

      {/* Curve sits in front of video but behind text */}
      <div className={styles.svgContainer}>
      <svg viewBox="0 0 800 600" className={styles.svg} style={{ transform: 'translateY(128px)' }}>
  <path
    ref={curveRef}
    fill="currentColor"
    d="M 800 500 Q 400 650 0 500 L 0 0 L 800 0 L 800 500 Z"
  />
</svg>


      </div>
    </div>
  );
}
