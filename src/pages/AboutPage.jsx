// src/pages/AboutPage.jsx
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Footer } from "@/components/layout/Footer";
import { useFadeIn } from "@/hooks/useFadeIn";
import { TEAM, TECH_STACK, VALUES, FOUNDED_YEAR } from "@/constants";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
  const navigate = useNavigate();
  const storyRef  = useFadeIn({ staggerMs: 90 });
  const teamRef   = useFadeIn({ staggerMs: 100 });

  return (
    <div className={styles.page}>
      {/* ── STORY ── */}
      <section className={styles.section} ref={storyRef}>
        <div className="fade-item">
          <SectionHeader tag="// Our Story" title="We Are Neuronix" />
        </div>

        <div className={styles.storyGrid}>
          {/* Left col — visual + values */}
          <div>
            <div className={`${styles.visualCard} fade-item`}>
              <div className={styles.visualInner}>
                <span className={styles.visualMono}>NRX</span>
                <span className={styles.visualSub}>NEURONIX TECHNOLOGY</span>
              </div>
              <div className={styles.badge}>
                <span className={styles.badgeNum}>{FOUNDED_YEAR}</span>
                <span className={styles.badgeLbl}>Founded</span>
              </div>
            </div>

            <ul className={`${styles.valuesList} fade-item`}>
              {VALUES.map((v) => (
                <li key={v.id} className={styles.valItem}>
                  <span className={styles.valId}>{v.id}</span>
                  <div>
                    <h4 className={styles.valTitle}>{v.title}</h4>
                    <p className={styles.valDesc}>{v.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right col — narrative + stack */}
          <div className="fade-item">
            <p className={styles.narrative}>
              Founded in {FOUNDED_YEAR}, Neuronix Technology emerged from a simple
              conviction: businesses deserve software that actually works —
              beautifully, reliably, and at scale. We started as a two-person studio
              and have grown into a specialized team of engineers, designers, and
              architects.
            </p>
            <p className={styles.narrative}>
              We don't do generic. Every project we take on gets the full weight of
              our expertise and attention. We've built products that serve millions of
              users, replaced decade-old legacy systems, and helped startups reach
              their first thousand customers.
            </p>
            <p className={`${styles.narrative} ${styles.narrativeLast}`}>
              Our edge: we think in systems, not features. When we build something,
              we build it to last.
            </p>

            <div className={styles.stackGrid}>
              {TECH_STACK.map(({ label, value }) => (
                <div key={label} className={styles.stackCell}>
                  <span className={styles.stackVal}>{value}</span>
                  <span className={styles.stackLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className={styles.section} style={{ paddingTop: 0 }} ref={teamRef}>
        <div className="fade-item">
          <SectionHeader
            tag="// The Team"
            title="Minds Behind the Machine"
            subtitle="A small, focused team that punches well above its weight."
          />
        </div>

        <div className={styles.teamGrid}>
          {TEAM.map((member) => (
            <div key={member.name} className={`${styles.teamCard} fade-item`}>
              <div className={styles.avatar}>{member.initials}</div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <div className={styles.memberRole}>{member.role}</div>
              <p className={styles.memberBio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.ctaBanner}>
          <div>
            <div className={styles.ctaTag}>// Work With Us</div>
            <h2 className={styles.ctaTitle}>Ready to build something that lasts?</h2>
          </div>
          <Button variant="primary" size="lg" onClick={() => navigate("/contact")}>
            Get in Touch
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
