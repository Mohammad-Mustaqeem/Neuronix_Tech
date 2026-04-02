// src/components/ui/Robot3D/Robot3D.jsx
import { useEffect, useRef } from "react";
import styles from "./Robot3D.module.css";

/**
 * Interactive 3D Robot — tracks mouse cursor and idles when not hovered.
 * Inspired by: 21st.dev/community/components/erikx/interactive-3d-robot
 */
export function Robot3D() {
  const sceneRef = useRef(null);
  const bodyRef = useRef(null);
  const rafRef = useRef(null);
  const tRef = useRef(0);
  const hoveredRef = useRef(false);

  useEffect(() => {
    const scene = sceneRef.current;
    const body = bodyRef.current;
    if (!scene || !body) return;

    const onMouseMove = (e) => {
      if (!hoveredRef.current) return;
      const r = scene.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      body.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 12}deg)`;
    };

    const onMouseEnter = () => {
      hoveredRef.current = true;
      body.style.transition = "transform 0.1s ease-out";
    };

    const onMouseLeave = () => {
      hoveredRef.current = false;
      body.style.transition = "transform 0.6s ease-out";
      body.style.transform = "rotateY(0deg) rotateX(0deg)";
      setTimeout(() => {
        body.style.transition = "transform 0.1s ease-out";
      }, 600);
    };

    const idleAnim = () => {
      if (!hoveredRef.current) {
        tRef.current += 0.012;
        const t = tRef.current;
        body.style.transform = `rotateY(${Math.sin(t) * 5}deg) rotateX(${Math.cos(t * 0.7) * 3}deg)`;
      }
      rafRef.current = requestAnimationFrame(idleAnim);
    };

    scene.addEventListener("mousemove", onMouseMove);
    scene.addEventListener("mouseenter", onMouseEnter);
    scene.addEventListener("mouseleave", onMouseLeave);
    rafRef.current = requestAnimationFrame(idleAnim);

    return () => {
      scene.removeEventListener("mousemove", onMouseMove);
      scene.removeEventListener("mouseenter", onMouseEnter);
      scene.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className={styles.scene} ref={sceneRef}>
      <div className={styles.body} ref={bodyRef}>
        <div className={styles.glow} />
        {/* Head */}
        <div className={styles.head}>
          <div className={styles.antenna} />
          <div className={styles.eyes}>
            <div className={styles.eye} />
            <div className={`${styles.eye} ${styles.eyeDelay}`} />
          </div>
          <div className={styles.mouth} />
        </div>
        {/* Torso */}
        <div className={styles.torso}>
          <div className={styles.chest}>
            <div className={styles.core} />
          </div>
          <div className={styles.lines}>
            <div className={`${styles.line} ${styles.lineW44}`} />
            <div className={`${styles.line} ${styles.lineW36}`} />
            <div className={`${styles.line} ${styles.lineW28}`} />
          </div>
        </div>
        {/* Arms */}
        <div className={`${styles.arm} ${styles.armLeft}`}>
          <div className={styles.hand} />
        </div>
        <div className={`${styles.arm} ${styles.armRight}`}>
          <div className={styles.hand} />
        </div>
        {/* Legs */}
        <div className={styles.legs}>
          <div className={styles.leg}><div className={styles.foot} /></div>
          <div className={styles.leg}><div className={styles.foot} /></div>
        </div>
      </div>
    </div>
  );
}
