import { Card, CardContent } from './ui/card';
import { Heart, Shield, Leaf, Award, Droplets, Sun, Zap, CheckCircle } from 'lucide-react';

const HealthBenefits = () => {
  const mainBenefits = [
    {
      icon: <Heart className="w-8 h-8 text-[#FFD233]" />,
      title: "Heart Healthy",
      description: "Rich in monounsaturated fats that help maintain healthy cholesterol levels and support cardiovascular health.",
      features: ["Reduces bad cholesterol", "Supports heart function", "Anti-inflammatory properties"]
    },
    {
      icon: <Shield className="w-8 h-8 text-[#FFD233]" />,
      title: "100% Pure & Natural",
      description: "Cold-pressed extraction preserves natural nutrients without any chemical processing or artificial additives.",
      features: ["No chemicals added", "Traditional extraction", "Natural filtering process"]
    },
    {
      icon: <Droplets className="w-8 h-8 text-[#FFD233]" />,
      title: "Vitamin Enriched",
      description: "Naturally rich in essential vitamins E, K, and antioxidants that boost immunity and overall health.",
      features: ["High Vitamin E content", "Natural antioxidants", "Immunity boosting"]
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#FFD233]" />,
      title: "Chemical Free",
      description: "Free from harmful chemicals, preservatives, and trans fats. Safe for daily consumption by all age groups.",
      features: ["Zero trans fat", "No preservatives", "Family safe"]
    }
  ];

  const oilBenefits = [
    {
      oil: "Mustard Oil",
      icon: <Sun className="w-6 h-6 text-[#FFD233]" />,
      benefits: [
        "Rich in Omega-3 and Omega-6 fatty acids",
        "Natural antibacterial and antifungal properties",
        "Improves digestion and appetite",
        "Good for skin and hair health",
        "Helps in reducing cholesterol"
      ]
    },
    {
      oil: "Sunflower Oil",
      icon: <Zap className="w-6 h-6 text-[#FFD233]" />,
      benefits: [
        "High in Vitamin E and antioxidants",
        "Light and easily digestible",
        "Supports healthy skin",
        "Contains healthy polyunsaturated fats",
        "Ideal for high-heat cooking"
      ]
    },
    {
      oil: "Groundnut Oil",
      icon: <Award className="w-6 h-6 text-[#FFD233]" />,
      benefits: [
        "Rich in protein and healthy fats",
        "Contains resveratrol antioxidant",
        "Supports brain health",
        "Good source of Vitamin E",
        "Helps maintain blood sugar levels"
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#FFF8E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
            Health Benefits of Our Oils
          </h2>
          <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
            Discover why Himalayan Oil is the healthier choice for you and your family
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainBenefits.map((benefit, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-center">{benefit.icon}</div>
                <h3 className="text-[#4B2E2B]">{benefit.title}</h3>
                <p className="text-sm text-[#4B2E2B] opacity-80 leading-relaxed">
                  {benefit.description}
                </p>
                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-xs text-[#4B2E2B] opacity-80">
                      <CheckCircle className="w-3 h-3 text-[#FFD233] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Oil-Specific Benefits */}
        <div className="space-y-8">
          <h3 className="text-2xl text-[#4B2E2B] text-center mb-8">
            Specific Health Benefits by Oil Type
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {oilBenefits.map((oilData, index) => (
              <Card key={index} className="shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {oilData.icon}
                    <h4 className="text-xl text-[#4B2E2B]">{oilData.oil}</h4>
                  </div>
                  <ul className="space-y-3">
                    {oilData.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-[#FFD233] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#4B2E2B] opacity-80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nutritional Comparison */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl text-[#4B2E2B] text-center mb-8">
            Why Choose Cold-Pressed Oils?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg text-[#4B2E2B] mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#FFD233]" />
                Cold-Pressed Method
              </h4>
              <ul className="space-y-2">
                {[
                  "Retains natural nutrients and vitamins",
                  "Preserves authentic taste and aroma",
                  "No chemical processing involved",
                  "Higher antioxidant content",
                  "Better shelf stability"
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-[#4B2E2B] opacity-80">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg text-[#4B2E2B] mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#FFD233]" />
                Quality Assurance
              </h4>
              <ul className="space-y-2">
                {[
                  "FSSAI certified for food safety",
                  "Regular lab testing for purity",
                  "ISO standards compliance",
                  "HACCP certified processes",
                  "AGMARK quality seal"
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-[#4B2E2B] opacity-80">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthBenefits;