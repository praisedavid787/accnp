import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Accurate Numbers Partners",
  description: "Confidence through accuracy. Learn about our story, mission, vision, and values.",
};

export default function AboutPage() {
  return (
    <main className="relative">
      <Navbar />
      <AboutHero />
      <OurStory />
      <MissionVision />
      <FAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
