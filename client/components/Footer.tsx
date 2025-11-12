import { Link } from "react-router-dom";
import { Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Connect with us */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Connect with us</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              A new era has begun. We would love to be along the journey.
            </p>
            <button className="border border-white text-white px-6 py-2.5 rounded-full hover:bg-white hover:text-gray-900 transition-colors text-sm font-medium">
              Get in touch
            </button>
          </div>

          {/* Follow us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow us</h3>
            <p className="text-gray-300 mb-6">
              Explore all the latest from the AI/R ecosystem.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-wrap gap-6 md:gap-8 text-sm text-gray-400">
            <Link to="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link
              to="/editorial-guidelines"
              className="hover:text-white transition-colors"
            >
              Editorial Guidelines
            </Link>
            <Link to="/careers" className="hover:text-white transition-colors">
              Careers
            </Link>
            <Link to="/legal" className="hover:text-white transition-colors">
              Legal
            </Link>
            <Link
              to="/ai-ethics"
              className="hover:text-white transition-colors"
            >
              AI Ethics
            </Link>
            <Link
              to="/media-kit"
              className="hover:text-white transition-colors"
            >
              Media Kit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
