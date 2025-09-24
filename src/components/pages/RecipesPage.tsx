import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useRouter } from '../Router';
import { 
  Clock, Users, Heart, ChefHat, ArrowRight, Star, 
  Utensils, BookOpen, Lightbulb, Award 
} from 'lucide-react';

const RecipesPage = () => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const recipes = [
    {
      id: 1,
      title: "Traditional Dal Tadka",
      description: "Authentic lentil curry with aromatic tempering using mustard oil",
      oil: "Mustard Oil",
      category: "traditional",
      cookTime: "25 mins",
      serves: "4 people",
      difficulty: "Easy",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1713780131281-61ec701ebb6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNvb2tpbmclMjBtZXRob2RzfGVufDF8fHx8MTc1NzQ4NTM4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      tips: "Heat mustard oil till smoking point for authentic flavor",
      health: "Rich in protein and omega-3 fatty acids",
      featured: true
    },
    {
      id: 2,
      title: "Crispy Vegetable Stir-Fry",
      description: "Quick and healthy stir-fry perfect for sunflower oil's light taste",
      oil: "Sunflower Oil",
      category: "modern",
      cookTime: "15 mins",
      serves: "3 people",
      difficulty: "Easy",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1656711781745-ba68661d06b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXIlMjBvaWwlMjBjb29raW5nfGVufDF8fHx8MTc1NzQ4NTM4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tips: "Use high heat for perfect crispiness without burning",
      health: "High in Vitamin E and antioxidants",
      featured: false
    },
    {
      id: 3,
      title: "Bengali Fish Curry",
      description: "Traditional fish curry showcasing mustard oil's distinctive flavor",
      oil: "Mustard Oil",
      category: "traditional",
      cookTime: "35 mins",
      serves: "4 people",
      difficulty: "Medium",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1755598603202-f6c6e02aa16b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXN0YXJkJTIwc2VlZHMlMjBvaWx8ZW58MXx8fHwxNzU3NDg1Mzc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tips: "Marinate fish with turmeric and salt before frying",
      health: "High in omega-3s and natural antioxidants",
      featured: false
    },
    {
      id: 4,
      title: "Healthy Salad Dressing",
      description: "Light and nutritious dressing using cold-pressed groundnut oil",
      oil: "Groundnut Oil",
      category: "healthy",
      cookTime: "5 mins",
      serves: "2 people",
      difficulty: "Easy",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1662058595162-10e024b1a907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwb2lsJTIwYm90dGxlJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NTc0ODUzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tips: "Mix with lemon juice and herbs for best flavor",
      health: "Rich in healthy monounsaturated fats",
      featured: false
    },
    {
      id: 5,
      title: "Traditional Poha",
      description: "Classic breakfast dish enhanced with aromatic mustard oil tempering",
      oil: "Mustard Oil",
      category: "breakfast",
      cookTime: "20 mins",
      serves: "3 people",
      difficulty: "Easy", 
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1713780131281-61ec701ebb6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNvb2tpbmclMjBtZXRob2RzfGVufDF8fHx8MTc1NzQ4NTM4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      tips: "Soak poha just until soft, don't over-soak",
      health: "Light breakfast rich in carbohydrates and healthy fats",
      featured: false
    },
    {
      id: 6,
      title: "Coconut Rice",
      description: "South Indian specialty made with fragrant coconut oil",
      oil: "Coconut Oil",
      category: "traditional",
      cookTime: "15 mins",
      serves: "4 people",
      difficulty: "Medium",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1662058595162-10e024b1a907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwb2lsJTIwYm90dGxlJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NTc0ODUzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tips: "Use fresh grated coconut for best flavor",
      health: "Rich in medium-chain fatty acids",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Recipes' },
    { id: 'traditional', name: 'Traditional' },
    { id: 'modern', name: 'Modern' },
    { id: 'healthy', name: 'Healthy' },
    { id: 'breakfast', name: 'Breakfast' }
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

  const filteredRecipes = selectedCategory === 'all' 
    ? recipes 
    : recipes.filter(recipe => recipe.category === selectedCategory);

  const featuredRecipe = recipes.find(recipe => recipe.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="himalayan-golden-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-[#4B2E2B] mb-6">
            Cooking Made Healthier
            <span className="block font-serif italic" style={{ fontFamily: 'Playfair Display, serif' }}>
              with Himalayan Oil
            </span>
          </h1>
          <p className="text-xl text-[#4B2E2B] opacity-90 max-w-3xl mx-auto mb-8">
            Discover delicious recipes, cooking tips, and health benefits to make the most 
            of our premium oils in your kitchen.
          </p>
          <div className="flex justify-center">
            <Badge className="bg-[#4B2E2B] text-white px-6 py-2 text-lg">
              25+ Tested Recipes
            </Badge>
          </div>
        </div>
      </section>

      {/* Featured Recipe of the Month */}
      {featuredRecipe && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-[#FFD233] text-[#4B2E2B] mb-4">Featured Recipe</Badge>
              <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
                Recipe of the Month
              </h2>
            </div>

            <Card className="overflow-hidden shadow-2xl bg-gradient-to-r from-[#FFF8E1] to-white">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <ImageWithFallback
                    src={featuredRecipe.image}
                    alt={featuredRecipe.title}
                    className="w-full h-80 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#FFD233] text-[#4B2E2B]">
                      {featuredRecipe.oil}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-white/90 rounded px-2 py-1">
                      <Star className="w-4 h-4 text-[#FFD233] fill-current" />
                      <span className="text-sm text-[#4B2E2B] font-medium">{featuredRecipe.rating}</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl text-[#4B2E2B] mb-2 flex items-center gap-2">
                      <ChefHat className="w-6 h-6 text-[#FFD233]" />
                      {featuredRecipe.title}
                    </h3>
                    <p className="text-[#4B2E2B] opacity-80 mb-4">
                      {featuredRecipe.description}
                    </p>
                  </div>

                  <div className="flex gap-6 text-sm text-[#4B2E2B]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#FFD233]" />
                      {featuredRecipe.cookTime}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#FFD233]" />
                      {featuredRecipe.serves}
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#FFD233]" />
                      {featuredRecipe.difficulty}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-[#FFE680] p-4 rounded-lg">
                      <h5 className="text-[#4B2E2B] mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Cooking Tip:
                      </h5>
                      <p className="text-sm text-[#4B2E2B] opacity-80">{featuredRecipe.tips}</p>
                    </div>
                    
                    <div className="bg-[#FFF8E1] p-4 rounded-lg">
                      <h5 className="text-[#4B2E2B] mb-2 flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        Health Benefit:
                      </h5>
                      <p className="text-sm text-[#4B2E2B] opacity-80">{featuredRecipe.health}</p>
                    </div>
                  </div>

                  <Button className="w-full himalayan-gradient text-white">
                    <BookOpen className="w-4 h-4 mr-2" />
                    View Full Recipe
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Recipe Categories */}
      <section className="py-12 bg-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-[#4B2E2B] mb-6 text-center">Browse Recipes by Category</h2>
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-white rounded-lg p-1">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-[#FFD233] data-[state=active]:text-[#4B2E2B] text-sm"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Recipe Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.filter(recipe => !recipe.featured).map((recipe) => (
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
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center gap-1 bg-black/60 rounded px-2 py-1">
                      <Star className="w-3 h-3 text-[#FFD233] fill-current" />
                      <span className="text-xs text-white">{recipe.rating}</span>
                    </div>
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
                    <h5 className="text-sm text-[#4B2E2B] mb-1 flex items-center gap-1">
                      <Lightbulb className="w-3 h-3" />
                      Tip:
                    </h5>
                    <p className="text-xs text-[#4B2E2B] opacity-80">{recipe.tips}</p>
                  </div>
                  
                  <Button className="w-full himalayan-gradient text-white">
                    <BookOpen className="w-4 h-4 mr-2" />
                    View Recipe
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cooking Tips */}
      <section className="py-20 bg-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Expert Cooking Tips
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Master the art of cooking with our premium oils using these professional tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cookingTips.map((section, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#4B2E2B] text-lg flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-[#FFD233]" />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
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
      </section>

      {/* Health Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Health Benefits by Oil Type
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Understanding the nutritional advantages of different cooking oils
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {healthBenefits.map((section, index) => (
              <Card key={index} className="bg-white shadow-lg">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="himalayan-gradient py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            Start Cooking Healthier Today
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Get our premium oils and start creating delicious, nutritious meals for your family
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/products')}
              className="bg-white text-[#4B2E2B] hover:bg-gray-100 px-8 py-6"
            >
              Shop Our Oils
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              onClick={() => navigate('/contact')}
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#4B2E2B] px-8 py-6"
            >
              Get Recipe Book
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecipesPage;