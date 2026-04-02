// src/pages/ContactPage.jsx
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Footer } from "@/components/layout/Footer";
import { useFadeIn } from "@/hooks/useFadeIn";
import { useForm } from "@/hooks/useForm";
import { validateContactForm } from "@/lib/validators";
import { CONTACT_EMAIL } from "@/constants";
import styles from "./ContactPage.module.css";

const INITIAL_VALUES = {
  firstName: "",
  lastName:  "",
  email:     "",
  service:   "",
  budget:    "",
  message:   "",
};

const SERVICE_OPTIONS = [
  "Custom Software Development",
  "Website Design & Development",
  "Web Application Engineering",
  "API Design & Integration",
  "Cloud Infrastructure & DevOps",
  "Technical Consulting",
  "Other",
];

const BUDGET_OPTIONS = [
  "₹1L – ₹5L",
  "₹5L – ₹15L",
  "₹15L – ₹50L",
  "₹50L+",
  "Let's discuss",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const pageRef = useFadeIn({ staggerMs: 80 });

  const { values, errors, handleChange, handleSubmit, reset, isSubmitting } =
    useForm(INITIAL_VALUES, validateContactForm);

  const onSubmit = async () => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitted(true);
    reset();
  };

  return (
    <div className={styles.page} ref={pageRef}>
      <section className={styles.section}>
        <div className="fade-item">
          <SectionHeader tag="// Get in Touch" title="Let's Build Together" />
        </div>

        <div className={styles.wrap}>
          {/* ── Left: Info panel ── */}
          <div className={styles.info}>
            <p className={`${styles.infoLead} fade-item`}>
              Have a project in mind? A problem that needs solving? We'd love to
              hear about it. Drop us a message and we'll get back within 24 hours.
            </p>

            <div className={`${styles.infoItem} fade-item`}>
              <h4 className={styles.infoLabel}>Email</h4>
              <p className={styles.infoValue}>{CONTACT_EMAIL}</p>
            </div>

            <div className={`${styles.infoItem} fade-item`}>
              <h4 className={styles.infoLabel}>Location</h4>
              <p className={styles.infoValue}>
                Bengaluru, Karnataka, India
                <br />
                Remote-first — worldwide
              </p>
            </div>

            <div className={`${styles.infoItem} fade-item`}>
              <h4 className={styles.infoLabel}>Availability</h4>
              <p className={styles.infoValue}>
                Currently accepting new projects
                <br />
                for Q3 2025
              </p>
            </div>

            <div className={`${styles.responseCard} fade-item`}>
              <div className={styles.infoLabel}>Response Time</div>
              <div className={styles.responseBig}>&lt; 24 hrs</div>
              <p className={styles.responseSub}>We respond to every inquiry</p>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className={`${styles.formWrap} fade-item`}>
            {submitted ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>✓</div>
                <h3 className={styles.successTitle}>Message Received</h3>
                <p className={styles.successSub}>
                  Thanks for reaching out. We'll be in touch within 24 hours.
                </p>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <div className={styles.form}>
                <div className={styles.formRow}>
                  <FormField
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="Arjun"
                    value={values.firstName}
                    onChange={handleChange}
                    error={errors.firstName}
                  />
                  <FormField
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Sharma"
                    value={values.lastName}
                    onChange={handleChange}
                    error={errors.lastName}
                  />
                </div>

                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="arjun@company.com"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                />

                <div className={styles.formRow}>
                  <FormSelect
                    label="Project Type"
                    name="service"
                    value={values.service}
                    onChange={handleChange}
                    options={SERVICE_OPTIONS}
                    placeholder="Select a service"
                    error={errors.service}
                  />
                  <FormSelect
                    label="Budget Range"
                    name="budget"
                    value={values.budget}
                    onChange={handleChange}
                    options={BUDGET_OPTIONS}
                    placeholder="Select a range"
                    error={errors.budget}
                  />
                </div>

                <FormField
                  label="Tell us about your project"
                  name="message"
                  type="textarea"
                  placeholder="Describe your project, goals, and any technical requirements..."
                  value={values.message}
                  onChange={handleChange}
                  error={errors.message}
                />

                <Button
                  variant="primary"
                  size="md"
                  isLoading={isSubmitting}
                  onClick={() => handleSubmit(onSubmit)}
                  type="button"
                >
                  Send Message
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ── Sub-components ── */

function FormField({ label, name, type, placeholder, value, onChange, error }) {
  return (
    <div className={styles.field}>
      <label className={styles.fieldLabel} htmlFor={name}>{label}</label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          className={[styles.input, styles.textarea, error ? styles.inputError : ""].join(" ")}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={5}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          className={[styles.input, error ? styles.inputError : ""].join(" ")}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      {error && <span className={styles.fieldError}>{error}</span>}
    </div>
  );
}

function FormSelect({ label, name, value, onChange, options, placeholder, error }) {
  return (
    <div className={styles.field}>
      <label className={styles.fieldLabel} htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        className={[styles.input, styles.select, error ? styles.inputError : ""].join(" ")}
        value={value}
        onChange={onChange}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      {error && <span className={styles.fieldError}>{error}</span>}
    </div>
  );
}
