import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Clock, Users, Heart, ChefHat } from 'lucide-react';

const Recipes = () => {
  const recipes = [
    {
      id: 1,
      title: "Traditional Dal Tadka",
      description: "Authentic lentil curry with aromatic tempering using mustard oil",
      oil: "Mustard Oil",
      cookTime: "25 mins",
      serves: "4 people",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1713780131281-61ec701ebb6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNvb2tpbmclMjBtZXRob2RzfGVufDF8fHx8MTc1NzQ4NTM4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      tips: "Heat mustard oil till smoking point for authentic flavor",
      health: "Rich in protein and omega-3 fatty acids"
    },
    {
      id: 2,
      title: "Crispy Vegetable Stir-Fry",
      description: "Quick and healthy stir-fry perfect for sunflower oil's light taste",
      oil: "Sunflower Oil",
      cookTime: "15 mins",
      serves: "3 people",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1656711781745-ba68661d06b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXIlMjBvaWwlMjBjb29raW5nfGVufDF8fHx8MTc1NzQ4NTM4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tips: "Use high heat for perfect crispiness without burning",
      health: "High in Vitamin E and antioxidants"
    },
    {
      id: 3,
      title: "Bengali Fish Curry",
      description: "Traditional fish curry showcasing mustard oil's distinctive flavor",
      oil: "Mustard Oil",
      cookTime: "35 mins",
      serves: "4 people",
      difficulty: "Medium",
      image: "https://images.unsplash.com/photo-1755598603202-f6c6e02aa16b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXN0YXJkJTIwc2VlZHMlMjBvaWx8ZW58MXx8fHwxNzU3NDg1Mzc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tips: "Marinate fish with turmeric and salt before frying",
      health: "High in omega-3s and natural antioxidants"
    }
  ];

  const cookingTips = [
    {
      title: "Mustard Oil Tips",
      tips: [
        "Always heat till smoking point before adding ingredients",
        "Perfect for pickles and marinades",
        "Ideal for high-temperature cooking",
        "Store in cool, dark place"
      ]
    },
    {
      title: "Sunflower Oil Tips",
      tips: [
        "Great for baking and light cooking",
        "Neutral taste enhances food flavors",
        "High smoke point for deep frying",
        "Rich in Vitamin E"
      ]
    },
    {
      title: "General Oil Tips",
      tips: [
        "Don't reuse oil more than 2-3 times",
        "Filter oil after each use",
        "Check expiry dates regularly",
        "Store in airtight containers"
      ]
    }
  ];

  const healthBenefits = [
    {
      oil: "Mustard Oil",
      benefits: ["Heart Health", "Anti-bacterial", "Rich in Omega-3", "Natural Preservative"]
    },
    {
      oil: "Sunflower Oil",
      benefits: ["Vitamin E", "Light & Digestible", "Skin Health", "Cholesterol Free"]
    },
    {
      oil: "Groundnut Oil",
      benefits: ["High Protein", "Natural Flavor", "Heart Friendly", "Rich Aroma"]
    }
  ];

  return (
    <section id="recipes" className="py-20 bg-[#FFF8E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
            Recipes & Cooking Tips
          </h2>
          <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
            Discover delicious recipes and expert cooking tips to make the most of our premium oils
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {recipes.map((recipe) => (
            <Card key={recipe.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="relative">
                <ImageWithFallback
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#FFD233] text-[#4B2E2B]">
                    {recipe.oil}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white/90 text-[#4B2E2B] border-[#FFD233]">
                    {recipe.difficulty}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-[#4B2E2B] flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-[#FFD233]" />
                  {recipe.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-[#4B2E2B] opacity-80">
                  {recipe.description}
                </p>
                
                <div className="flex gap-4 text-sm text-[#4B2E2B]">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-[#FFD233]" />
                    {recipe.cookTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-[#FFD233]" />
                    {recipe.serves}
                  </div>
                </div>
                
                <div className="bg-[#FFF8E1] p-3 rounded-lg">
                  <h5 className="text-sm text-[#4B2E2B] mb-1">💡 Cooking Tip:</h5>
                  <p className="text-xs text-[#4B2E2B] opacity-80">{recipe.tips}</p>
                </div>
                
                <div className="bg-[#FFE680] p-3 rounded-lg">
                  <h5 className="text-sm text-[#4B2E2B] mb-1 flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    Health Benefit:
                  </h5>
                  <p className="text-xs text-[#4B2E2B] opacity-80">{recipe.health}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Cooking Tips */}
          <div>
            <h3 className="text-2xl text-[#4B2E2B] mb-8">Expert Cooking Tips</h3>
            <div className="space-y-6">
              {cookingTips.map((section, index) => (
                <Card key={index} className="bg-white shadow-md">
                  <CardHeader>
                    <CardTitle className="text-[#4B2E2B] text-lg">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2 text-sm text-[#4B2E2B] opacity-80">
                          <span className="w-2 h-2 bg-[#FFD233] rounded-full mt-2 flex-shrink-0"></span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Health Benefits */}
          <div>
            <h3 className="text-2xl text-[#4B2E2B] mb-8">Health Benefits</h3>
            <div className="space-y-6">
              {healthBenefits.map((section, index) => (
                <Card key={index} className="bg-white shadow-md">
                  <CardHeader>
                    <CardTitle className="text-[#4B2E2B] text-lg flex items-center gap-2">
                      <Heart className="w-5 h-5 text-[#FFD233]" />
                      {section.oil}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {section.benefits.map((benefit, benefitIndex) => (
                        <Badge
                          key={benefitIndex}
                          variant="outline"
                          className="justify-center border-[#FFD233] text-[#4B2E2B] text-xs"
                        >
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Nutritional Info Card */}
            <Card className="bg-gradient-to-br from-[#FFD233] to-[#FFE680] mt-6">
              <CardHeader>
                <CardTitle className="text-[#4B2E2B]">
                  Did You Know?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#4B2E2B] opacity-90">
                  Cold-pressed oils retain more nutrients and natural flavors compared to refined oils. 
                  Our traditional Kolhu extraction method preserves the natural goodness of seeds and nuts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipes;