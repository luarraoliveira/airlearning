interface IndustryCardProps {
  title: string;
  image: string;
  onClick?: () => void;
}

export default function IndustryCard({
  title,
  image,
  onClick,
}: IndustryCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative h-[200px] md:h-[240px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] w-full"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Title */}
      <div className="relative h-full flex items-end p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
      </div>
    </button>
  );
}
