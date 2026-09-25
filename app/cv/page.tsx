import type { Metadata } from "next";
import { CvPage } from "@/components/cv/CvPage";
import { LanguageProvider } from "@/components/LanguageProvider";
import { cv } from "@/content/cv";

export const metadata: Metadata = {
  title: cv.pt.meta.title,
  description: cv.pt.meta.description,
  alternates: { canonical: "/cv" },
};

export default function CvRoute() {
  return (
    <LanguageProvider>
      <CvPage />
    </LanguageProvider>
  );
}
