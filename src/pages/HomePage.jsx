// src/pages/HomePage.jsx
import { useNavigate } from "react-router-dom";
import { Robot3D } from "@/components/ui/Robot3D";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Footer } from "@/components/layout/Footer";
import { useFadeIn } from "@/hooks/useFadeIn";
import { SERVICES, STATS } from "@/constants";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const navigate = useNavigate();
  const servicesRef = useFadeIn({ staggerMs: 100 });
  const statsRef = useFadeIn({ staggerMs: 60 });
  const ctaRef = useFadeIn();

  return (
    <div className={styles.page}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>// Neuronix Technology — Est. 2019</p>
          <h1 className={styles.heroTitle}>
            We Engineer <em className={styles.accent}>Digital</em> Realities
          </h1>
          <p className={styles.heroSub}>
            Software. Websites. Web applications. We craft precision-built digital
            products that push what's technically possible — for startups and
            enterprises alike.
          </p>
          <div className={styles.btnGroup}>
            <Button variant="primary" size="lg" onClick={() => navigate("/contact")}>
              Start a Project
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate("/about")}>
              Who We Are
            </Button>
          </div>
        </div>
        <div className={styles.robotWrap}>
          <Robot3D />
        </div>
      </section>

      {/* ── STATS ── */}
      <div className={styles.statsBar} ref={statsRef}>
        {STATS.map(({ num, label }) => (
          <div key={label} className={`${styles.stat} fade-item`}>
            <span className={styles.statNum}>{num}</span>
            <span className={styles.statLabel}>{label}</span>
          </div>
        ))}
      </div>

      {/* ── SERVICES ── */}
      <section className={styles.section} ref={servicesRef}>
        <div className="fade-item">
          <SectionHeader
            tag="// What We Build"
            title="Our Core Services"
            subtitle="From idea to deployment — we handle the full spectrum of digital engineering with a focus on performance, scalability, and elegance."
          />
        </div>
        <div className={styles.servicesGrid}>
          {SERVICES.map((svc) => (
            <div key={svc.id} className={`${styles.svcCard} fade-item`}>
              <div className={styles.svcNum}>{svc.num}</div>
              <span className={styles.svcIcon}>{svc.icon}</span>
              <h3 className={styles.svcTitle}>{svc.title}</h3>
              <p className={styles.svcDesc}>{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={styles.section} style={{ paddingTop: 0 }} ref={ctaRef}>
        <div className={`${styles.ctaBanner} fade-item`}>
          <div>
            <div className={styles.ctaTag}>// Ready to Build?</div>
            <h2 className={styles.ctaTitle}>Let's create something exceptional.</h2>
          </div>
          <Button variant="primary" size="lg" onClick={() => navigate("/contact")}>
            Start the Conversation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
