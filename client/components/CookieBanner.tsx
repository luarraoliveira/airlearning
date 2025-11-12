import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white py-4 px-4 sm:px-6 lg:px-8 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center sm:text-left">
          We use essential cookies and similar technologies according to our Privacy Policy. By continuing to browse, you agree to these conditions.{" "}
          <a href="/privacy" className="underline hover:no-underline">
            Learn more
          </a>
        </p>
        <button
          onClick={handleAccept}
          className="bg-white text-black px-6 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors whitespace-nowrap"
        >
          OK, I got it!
        </button>
      </div>
    </div>
  );
}
