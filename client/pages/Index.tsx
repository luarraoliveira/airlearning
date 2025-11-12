import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IndustryCard from "@/components/IndustryCard";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Download Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 max-w-3xl">
            Download the Industry Reports Series by AI/R's Future Hacking Innovation Studio.
          </h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Click the industry you're interested in and fill out each form to receive the respective report.
          </p>
          <div className="bg-gray-50 border-l-4 border-gray-900 p-6 rounded-r-lg max-w-3xl">
            <p className="text-sm md:text-base text-gray-700">
              The Industry Reports Series brings together six publications that analyze key trends in each sector—viewed through the lens of Future Studies—to help you understand their real impact and what they mean for your business.
            </p>
            <p className="text-sm md:text-base text-gray-900 font-semibold mt-4">
              Remember: The key to balancing innovation and resilience is to be aware of yourself and the future(s).
            </p>
          </div>
        </section>

        {/* Industry Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <IndustryCard
            title="Financial Services"
            image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
          />
          <IndustryCard
            title="Foods and Beverages"
            image="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80"
          />
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
