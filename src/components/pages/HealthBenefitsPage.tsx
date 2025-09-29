import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useRouter } from '../Router';
import { 
  Heart, Shield, Award, CheckCircle, ArrowRight, 
  Users, Globe, TrendingUp, Target, Eye, Calendar,
  Leaf, Zap, Brain, Activity, Droplets
} from 'lucide-react';

const HealthBenefitsPage = () => {
  const { navigate } = useRouter();

  const oilBenefits = [
    {
      name: "Mustard Oil",
      image: "https://images.unsplash.com/photo-1755598603202-f6c6e02aa16b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXN0YXJkJTIwc2VlZHMlMjBvaWx8ZW58MXx8fHwxNzU3NDg1Mzc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "Heart Health - Rich in monounsaturated fats",
        "Anti-bacterial Properties - Natural preservative",
        "Omega-3 Fatty Acids - Essential for brain function",
        "Anti-inflammatory - Reduces inflammation naturally"
      ],
      nutrients: ["Monounsaturated Fats", "Omega-3", "Vitamin E", "Antioxidants"],
      smokePoint: "250°C",
      bestFor: ["Deep Frying", "Pickling", "Traditional Cooking"]
    },
    {
      name: "Sunflower Oil",
      image: "https://images.unsplash.com/photo-1656711781745-ba68661d06b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXIlMjBvaWwlMjBjb29raW5nfGVufDF8fHx8MTc1NzQ4NTM4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "High Vitamin E Content - Powerful antioxidant",
        "Light & Digestible - Easy on stomach",
        "Skin Health - Nourishes from within",
        "Cholesterol Free - Heart-friendly choice"
      ],
      nutrients: ["Vitamin E", "Polyunsaturated Fats", "Linoleic Acid", "Oleic Acid"],
      smokePoint: "232°C",
      bestFor: ["Light Cooking", "Baking", "Salad Dressings"]
    },
    {
      name: "Groundnut Oil",
      image: "https://images.unsplash.com/photo-1662058595162-10e024b1a907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwb2lsJTIwYm90dGxlJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NTc0ODUzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "High Protein Content - Plant-based protein",
        "Natural Flavor - Enhances taste",
        "Heart Friendly - Reduces bad cholesterol",
        "Rich Aroma - Adds depth to dishes"
      ],
      nutrients: ["Protein", "Monounsaturated Fats", "Resveratrol", "Vitamin E"],
      smokePoint: "227°C",
      bestFor: ["Stir Frying", "Traditional Cooking", "Snacks"]
    },
    {
      name: "Soybean Oil",
      image: "https://images.unsplash.com/photo-1662058595162-10e024b1a907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwb2lsJTIwYm90dGxlJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NTc0ODUzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "Complete Protein - All essential amino acids",
        "Zero Trans Fat - Healthy choice",
        "Versatile Cooking - Multiple uses",
        "Rich in Omega-6 - Essential fatty acids"
      ],
      nutrients: ["Complete Protein", "Omega-6", "Lecithin", "Vitamin K"],
      smokePoint: "238°C",
      bestFor: ["General Cooking", "Baking", "Frying"]
    }
  ];

  const nutritionalFacts = [
    {
      nutrient: "Monounsaturated Fats",
      benefit: "Reduces bad cholesterol, increases good cholesterol",
      sources: ["Mustard Oil", "Groundnut Oil", "Sunflower Oil"]
    },
    {
      nutrient: "Omega-3 Fatty Acids",
      benefit: "Essential for brain function and heart health",
      sources: ["Mustard Oil", "Groundnut Oil"]
    },
    {
      nutrient: "Vitamin E",
      benefit: "Powerful antioxidant, protects cells from damage",
      sources: ["Sunflower Oil", "Groundnut Oil"]
    },
    {
      nutrient: "Antioxidants",
      benefit: "Fights free radicals, prevents aging",
      sources: ["All Cold-Pressed Oils"]
    },
    {
      nutrient: "Plant Sterols",
      benefit: "Natural cholesterol-lowering compounds",
      sources: ["All Vegetable Oils"]
    },
    {
      nutrient: "Essential Fatty Acids",
      benefit: "Required for proper body function",
      sources: ["All Cold-Pressed Oils"]
    }
  ];

  const healthTips = [
    {
      title: "Choose Cold-Pressed Oils",
      description: "Cold-pressed oils retain more nutrients and antioxidants compared to refined oils",
      icon: <Droplets className="w-6 h-6 text-[#FFD233]" />
    },
    {
      title: "Store Properly",
      description: "Keep oils in cool, dark places to prevent oxidation and maintain quality",
      icon: <Shield className="w-6 h-6 text-[#FFD233]" />
    },
    {
      title: "Use Right Temperature",
      description: "Don't exceed smoke point to avoid harmful compounds formation",
      icon: <Zap className="w-6 h-6 text-[#FFD233]" />
    },
    {
      title: "Rotate Oil Types",
      description: "Use different oils for varied nutritional benefits",
      icon: <Activity className="w-6 h-6 text-[#FFD233]" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="himalayan-golden-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-[#4B2E2B] mb-6">
            Health Benefits & 
            <span className="block font-serif italic" style={{ fontFamily: 'Playfair Display, serif' }}>
              Nutritional Value
            </span>
          </h1>
          <p className="text-xl text-[#4B2E2B] opacity-90 max-w-3xl mx-auto mb-8">
            Discover the incredible health benefits and nutritional value of our premium 
            cold-pressed oils. Each oil offers unique advantages for your health and well-being.
          </p>
          <div className="flex justify-center">
            <Badge className="bg-[#4B2E2B] text-white px-6 py-2 text-lg">
              Cold-Pressed & Chemical-Free
            </Badge>
          </div>
        </div>
      </section>

      {/* Oil Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Health Benefits by Oil Type
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Each oil offers unique health benefits and nutritional advantages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {oilBenefits.map((oil, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative">
                    <ImageWithFallback
                      src={oil.image}
                      alt={oil.name}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#FFD233] text-[#4B2E2B]">
                        {oil.name}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl text-[#4B2E2B] flex items-center gap-2">
                      <Heart className="w-6 h-6 text-[#FFD233]" />
                      {oil.name} Benefits
                    </h3>
                    
                    <div className="space-y-2">
                      {oil.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start gap-2 text-sm text-[#4B2E2B] opacity-80">
                          <CheckCircle className="w-4 h-4 text-[#FFD233] mt-0.5 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm text-[#4B2E2B] font-medium mb-2">Key Nutrients:</h4>
                        <div className="flex flex-wrap gap-1">
                          {oil.nutrients.map((nutrient, nutrientIndex) => (
                            <Badge key={nutrientIndex} variant="outline" className="text-xs border-[#FFD233] text-[#4B2E2B]">
                              {nutrient}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-[#4B2E2B] opacity-60">Smoke Point:</span>
                          <div className="text-[#FFD233] font-bold">{oil.smokePoint}</div>
                        </div>
                        <div>
                          <span className="text-[#4B2E2B] opacity-60">Best For:</span>
                          <div className="text-[#4B2E2B] text-xs">{oil.bestFor.join(", ")}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nutritional Facts */}
      <section className="py-20 bg-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Nutritional Facts
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Understanding the nutritional components and their health benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nutritionalFacts.map((fact, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Leaf className="w-6 h-6 text-[#FFD233]" />
                    <h3 className="text-lg text-[#4B2E2B]">{fact.nutrient}</h3>
                  </div>
                  
                  <p className="text-sm text-[#4B2E2B] opacity-80">{fact.benefit}</p>
                  
                  <div>
                    <h4 className="text-sm text-[#4B2E2B] font-medium mb-2">Found in:</h4>
                    <div className="flex flex-wrap gap-1">
                      {fact.sources.map((source, sourceIndex) => (
                        <Badge key={sourceIndex} variant="outline" className="text-xs border-[#FFD233] text-[#4B2E2B]">
                          {source}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health Tips */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Healthy Oil Usage Tips
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Maximize the health benefits of your cooking oils with these expert tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthTips.map((tip, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">{tip.icon}</div>
                  <h3 className="text-lg text-[#4B2E2B]">{tip.title}</h3>
                  <p className="text-sm text-[#4B2E2B] opacity-80">
                    {tip.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="himalayan-gradient py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            Start Your Healthy Journey
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Choose our premium cold-pressed oils for maximum health benefits and nutritional value
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/products')}
              className="bg-white text-[#4B2E2B] hover:bg-gray-100 px-8 py-6"
            >
              Shop Healthy Oils
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              onClick={() => navigate('/recipes')}
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#4B2E2B] px-8 py-6"
            >
              View Healthy Recipes
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthBenefitsPage;
