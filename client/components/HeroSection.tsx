export default function HeroSection() {
  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8eb63809aeff11c20f16be8d0b6808e08a1760d7?width=2548"
          alt="Agricultural innovation with technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-10 lg:p-12 max-w-md md:max-w-lg">
          <p className="text-xs md:text-sm text-gray-600 mb-3 font-medium">
            / Insights & Trend Reports
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Hack the future: Discover the trends and outlooks for key market
            segments.
          </h1>
        </div>
      </div>
    </section>
  );
}
