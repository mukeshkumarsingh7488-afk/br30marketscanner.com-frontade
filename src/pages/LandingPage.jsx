import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import DashboardPreview from "../components/landing/DashboardPreview";
import Stats from "../components/landing/Stats";
import Features from "../components/landing/Features";
import Markets from "../components/landing/Markets";
import HowItWorks from "../components/landing/HowItWorks";
import WhyScanner from "../components/landing/WhyScanner";
import Pricing from "../components/landing/Pricing";
import FAQ from "../components/landing/FAQ";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

export default function LandingPage() {
  return (
    <>
      <main className="scanner-landing-page">
        <Navbar />
        <Hero />
        <DashboardPreview />
        <Stats />
        <Features />
        <Markets />
        <HowItWorks />
        <WhyScanner />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </main>

      <style>{`
        .scanner-landing-page{min-height:100vh;background:#020806;overflow-x:hidden;}
        .scanner-landing-page *{box-sizing:border-box;}
      `}</style>
    </>
  );
}
