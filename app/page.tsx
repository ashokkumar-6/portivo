import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard/Dashboard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1B2D5A] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <Navbar />
        <Hero />
        <Dashboard />
      </div>
    </main>
  );
}