import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Award, Factory, Heart, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Factory className="w-8 h-8 text-[#FFD233]" />,
      title: "Advanced Manufacturing",
      description: "State-of-the-art facility with 2000 MT monthly capacity and modern filling machinery"
    },
    {
      icon: <Heart className="w-8 h-8 text-[#FFD233]" />,
      title: "Traditional Kolhu Method",
      description: "Cold-pressed extraction preserving natural nutrients and authentic taste"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#FFD233]" />,
      title: "Quality Assurance",
      description: "Natural filtration process ensuring purity without harmful chemicals"
    },
    {
      icon: <Award className="w-8 h-8 text-[#FFD233]" />,
      title: "Certified Excellence",
      description: "ISO, AGMARK, FSSAI, and HACCP certified for quality and safety"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
            About Himalayan Oil
          </h2>
          <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
            Four decades of trust, tradition, and uncompromising quality in edible oil manufacturing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl text-[#4B2E2B]">Our Story</h3>
              <p className="text-[#4B2E2B] opacity-80 leading-relaxed">
                Since 1978, Himalayan Oil has been a trusted name in the edible oil industry, 
                dedicated to purity, quality, and health. With advanced packaging and traditional 
                Kolhu extraction, we bring premium-grade oils to households, hotels, and businesses.
              </p>
              <p className="text-[#4B2E2B] opacity-80 leading-relaxed">
                Our commitment to excellence has made us a preferred choice across UP, Bihar, 
                Delhi, and Haryana, with expanding reach through online platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#FFF8E1] p-6 rounded-lg">
                <h4 className="text-[#4B2E2B] mb-2">Our Mission</h4>
                <p className="text-sm text-[#4B2E2B] opacity-80">
                  To deliver superior-quality edible oils that meet the highest standards of 
                  purity, health, and safety while delighting customers with excellent service.
                </p>
              </div>
              <div className="bg-[#FFF8E1] p-6 rounded-lg">
                <h4 className="text-[#4B2E2B] mb-2">Our Vision</h4>
                <p className="text-sm text-[#4B2E2B] opacity-80">
                  To become a globally recognized edible oil brand known for trust, innovation, 
                  and premium quality while setting new benchmarks in customer satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1713780131281-61ec701ebb6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNvb2tpbmclMjBtZXRob2RzfGVufDF8fHx8MTc1NzQ4NTM4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Traditional oil extraction methods"
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD233] to-transparent opacity-20 rounded-2xl"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">{feature.icon}</div>
                <h4 className="text-[#4B2E2B]">{feature.title}</h4>
                <p className="text-sm text-[#4B2E2B] opacity-80 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;