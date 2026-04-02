// src/App.jsx — Root application component
import { AppRoutes } from "@/routes";
import { EtherealBackground } from "@/components/ui/EtherealBackground";
import { Header } from "@/components/layout/Header";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <EtherealBackground />
      <div className={styles.grain} aria-hidden="true" />
      <Header />
      <main className={styles.main}>
        <AppRoutes />
      </main>
    </div>
  );
}
