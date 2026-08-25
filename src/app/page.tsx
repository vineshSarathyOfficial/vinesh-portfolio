import { Hero } from "@/components/hero/Hero";
import { FeaturedWork } from "@/components/featured/FeaturedWork";
import { Experience } from "@/components/experience/Experience";
import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Experience />
      <About />
      <Contact />
    </>
  );
}
