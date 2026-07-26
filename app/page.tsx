import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard/Dashboard";
import Trust from "@/components/Trust";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1B2D5A] text-white">
      <div className="mx-auto max-w-7xl px-6">
        <Navbar />
        <Hero />
        <Dashboard />
        <Trust />
        <Features />
        <HowItWorks />
        <Pricing />
        <WhyChoose />
      </div>
    </main>
  );
}