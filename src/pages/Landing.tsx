import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import HowItWorks from "../components/landing/HowItWorks";
import FeaturesSection from "../components/landing/FeaturesSection";
import Footer from "../components/landing/Footer";

const Landing = () => {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Landing;
