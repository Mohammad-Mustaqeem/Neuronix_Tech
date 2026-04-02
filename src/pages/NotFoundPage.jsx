// src/pages/NotFoundPage.jsx
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/layout/Footer";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.code}>404</div>
        <div className={styles.tag}>// Page Not Found</div>
        <h1 className={styles.title}>Lost in the void.</h1>
        <p className={styles.sub}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className={styles.actions}>
          <Button variant="primary" onClick={() => navigate("/")}>
            Back to Home
          </Button>
          <Button variant="outline" onClick={() => navigate("/contact")}>
            Contact Us
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
