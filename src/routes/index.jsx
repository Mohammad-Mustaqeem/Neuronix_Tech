// src/routes/index.jsx — Central route configuration
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

const HomePage = lazy(() => import("@/pages/HomePage.jsx"));
const AboutPage = lazy(() => import("@/pages/AboutPage.jsx"));
const ContactPage = lazy(() => import("@/pages/ContactPage.jsx"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage.jsx"));

export function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
