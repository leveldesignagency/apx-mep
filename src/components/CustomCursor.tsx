"use client";

import { useRef, useEffect, useState } from "react";

const HOVER_TEXT_TAGS = "p, span, h1, h2, h3, h4, h5, h6, li, td, th, label, figcaption, caption, blockquote";

function isHoverTarget(el: EventTarget | null): boolean {
  if (!el || !(el instanceof Element)) return false;
  const node = el as HTMLElement;
  const isInteractive =
    node.tagName === "A" ||
    node.tagName === "BUTTON" ||
    node.getAttribute("role") === "button" ||
    node.classList.contains("cursor-pointer") ||
    node.closest("a, button, [role='button'], .cursor-pointer") !== null;
  const isText = node.closest(HOVER_TEXT_TAGS) !== null;
  return isInteractive || isText;
}

export default function CustomCursor() {
  const circleRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("curzr-big-circle-active");
    return () => document.documentElement.classList.remove("curzr-big-circle-active");
  }, []);

  useEffect(() => {
    const circle = circleRef.current;
    const dot = dotRef.current;
    if (!circle || !dot) return;

    const move = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const hover = isHoverTarget(e.target);
      setIsHover(hover);
      // Circle and dot are offset in CSS so their center is at (0,0); translate to pointer
      circle.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      setVisible(true);
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    const click = () => {
      const t = circle.style.transform;
      if (t) {
        circle.style.transform = `${t} scale(0.75)`;
        setTimeout(() => {
          circle.style.transform = t.replace(/\s*scale\(0\.75\)\s*$/, "");
        }, 35);
      }
    };

    document.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    document.addEventListener("click", click);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      document.removeEventListener("click", click);
    };
  }, []);

  return (
    <div
      className={`apx-cursor-big-circle${isHover ? " apx-cursor-big-circle--hover" : ""}`}
      aria-hidden
      hidden={!visible}
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div ref={circleRef} className="apx-cursor-big-circle__circle" />
      <div ref={dotRef} className="apx-cursor-big-circle__dot" />
    </div>
  );
}
