import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="himalayan-golden-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#4B2E2B] leading-tight">
                Pure, Premium
                <span className="block font-serif italic" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Edible Oils
                </span>
              </h1>
              <p className="text-xl text-[#4B2E2B] opacity-90 max-w-lg">
                Since 1978, delivering natural, cold-pressed oils extracted using traditional Kolhu methods for authentic taste and nutrition.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToProducts}
                className="himalayan-gradient text-white px-8 py-6 rounded-lg hover:opacity-90 transition-opacity"
              >
                Explore Products
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-[#4B2E2B] text-[#4B2E2B] px-8 py-6 rounded-lg hover:bg-[#4B2E2B] hover:text-white transition-colors"
              >
                Contact Us
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#4B2E2B]">45+</div>
                <div className="text-sm text-[#4B2E2B] opacity-80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#4B2E2B]">2000MT</div>
                <div className="text-sm text-[#4B2E2B] opacity-80">Monthly Capacity</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#4B2E2B]">100%</div>
                <div className="text-sm text-[#4B2E2B] opacity-80">Natural & Pure</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1662058595162-10e024b1a907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwb2lsJTIwYm90dGxlJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NTc0ODUzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Premium cooking oil bottles"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFE680] rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#FFA500] rounded-full opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,60 C300,90 900,30 1200,60 L1200,120 L0,120 Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;