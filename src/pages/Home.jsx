import About from "../components/About";
import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Properties from "../components/Properties";
import Team from "../components/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Properties />
      <About />
      <CallToAction />
      <FAQ />
      <Team />
      <Contact />
    </>
  );
}
