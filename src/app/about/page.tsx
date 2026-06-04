import AboutHero from "@/components/about/AboutHero";
import AboutNav from "@/components/about/AboutNav";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Accurate Numbers & Co.",
  description: "Confidence through accuracy. Learn about our story, mission, vision, and values.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutNav />
      <OurStory />
      <MissionVision />
      <FAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
