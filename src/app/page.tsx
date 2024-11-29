import React from "react";
/*components*/
import MainScrollCardSection from "@/components/home/MainScrollCardSection";
import CoupleDynamicsSection from "@/components/home/CoupleDynamicsSection";
import ReviewSection from "@/components/home/ReviewSection";
import CoupleLifeStyleSection from "@/components/home/CoupleLifeStyleSection";
import GlobalIntroSection from "@/components/home/GlobalIntroSection";
import NewsAndMediaSection from "@/components/home/NewsAndMediaSection";
import AspirationSection from "@/components/home/AspirationSection";
import MainVideoSection from "@/components/home/MainVideoSection";
import AnimatedSection from "@/components/home/AnimatedSection";

export default function Home() {
  return (
    <main>
      <MainVideoSection />
      <MainScrollCardSection />

      <AnimatedSection animation="fadeIn">
        <CoupleDynamicsSection />
      </AnimatedSection>
      <AnimatedSection animation="fadeIn">
        <ReviewSection />
      </AnimatedSection>
      <AnimatedSection animation="fadeIn">
        <CoupleLifeStyleSection />
      </AnimatedSection>
      <AnimatedSection animation="scale">
        <GlobalIntroSection />
      </AnimatedSection>
      <AnimatedSection animation="fadeIn">
        <GlobalIntroSection />
      </AnimatedSection>
      <AnimatedSection animation="fadeIn">
        <AspirationSection />
      </AnimatedSection>
      <AnimatedSection animation="scale">
        <NewsAndMediaSection />
      </AnimatedSection>
    </main>
  );
}
