import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import VisionMission from "@/components/sections/VisionMission";
import GrowthPhases from "@/components/sections/GrowthPhases";
import Offerings from "@/components/sections/Offerings";
import WhyJoin from "@/components/sections/WhyJoin";
import Initiatives from "@/components/sections/Initiatives";
import JoinUs from "@/components/sections/JoinUs";
import CTA from "@/components/sections/CTA";

const Index = () => {
  useEffect(() => {
    // Update page title and meta
    document.title = "YEN Kerala - Young Entrepreneurs Network | Empowering Next-Gen Entrepreneurs";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Young Entrepreneurs Network (YEN) Kerala - A vibrant community dedicated to young entrepreneurs aged 15-30, providing mentorship, networking, and resources to drive innovation and success.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Young Entrepreneurs Network (YEN) Kerala - A vibrant community dedicated to young entrepreneurs aged 15-30, providing mentorship, networking, and resources to drive innovation and success.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <section id="vision">
          <VisionMission />
        </section>
        <GrowthPhases />
        <section id="offerings">
          <Offerings />
        </section>
        <WhyJoin />
        <section id="initiatives">
          <Initiatives />
        </section>
        <JoinUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
