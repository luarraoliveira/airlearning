import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";

export default function Placeholder() {
  const location = useLocation();
  const pageName = location.pathname
    .slice(1)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {pageName || "Page"}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            This page is currently under construction. Continue chatting to
            build out this section with specific content.
          </p>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
