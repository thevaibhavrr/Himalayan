interface MapEmbedProps {
  src: string;
  ratio?: string;
  className?: string;
}

const MapEmbed = ({ 
  src, 
  ratio = '16/9',
  className = '' 
}: MapEmbedProps) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-xl shadow-lg ${className}`}>
      <div 
        className="relative w-full"
        style={{ aspectRatio: ratio }}
      >
        <iframe
          src={src}
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Himalayan Oil Location"
          aria-label="Google Map showing Himalayan Oil factory location"
        />
      </div>
    </div>
  );
};

export default MapEmbed;