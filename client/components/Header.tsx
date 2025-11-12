import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold tracking-tight">
              AI<span className="text-gray-400">~</span>R
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              About Us
            </Link>
            <Link
              to="/platforms"
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              AI Platforms
            </Link>
            <Link
              to="/academy"
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              AI/R Academy
            </Link>
            <Link
              to="/case-studies"
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              Case Studies
            </Link>
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm rounded-full hover:bg-gray-800 transition-colors"
            >
              Industry Report
            </Link>
          </nav>

          {/* Right Side - Language Selector & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center text-sm text-gray-700 hover:text-gray-900">
              <span className="mr-1">🌐</span>
              EN
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <Button className="bg-gray-900 text-white rounded-full px-6 hover:bg-gray-800">
              Talk to our experts
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/about"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                About Us
              </Link>
              <Link
                to="/platforms"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                AI Platforms
              </Link>
              <Link
                to="/academy"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                AI/R Academy
              </Link>
              <Link
                to="/case-studies"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                Case Studies
              </Link>
              <Link to="/" className="text-sm text-gray-900 font-medium">
                Industry Report
              </Link>
              <button className="flex items-center text-sm text-gray-700 hover:text-gray-900">
                <span className="mr-1">🌐</span>
                EN
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <Button className="bg-gray-900 text-white rounded-full px-6 hover:bg-gray-800 w-full">
                Talk to our experts
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
