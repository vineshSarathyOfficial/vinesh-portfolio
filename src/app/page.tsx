import React from "react";
import { Hero } from "@/components/hero/Hero";
import { FinPulseShowcase } from "@/components/showcase/FinPulseShowcase";
import { Projects } from "@/components/projects/Projects";
import { FeaturedWork } from "@/components/featured/FeaturedWork";
import { Contact } from "@/components/contact/Contact";
import { CinematicScene } from "@/components/scene/CinematicScene";

export default function Home() {
  return (
    <CinematicScene>
      <Hero />
      <FinPulseShowcase />
      <Projects />
      <FeaturedWork />
      <Contact />
    </CinematicScene>
  );
}
