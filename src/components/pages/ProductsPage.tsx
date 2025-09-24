import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useRouter } from '../Router';
import { 
  Heart, Award, Leaf, Download, Shield, ArrowRight, 
  CheckCircle, Filter, Star, Package 
} from 'lucide-react';

const ProductsPage = () => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');

  const products = [
    {
      id: 1,
      name: "Premium Mustard Oil",
      category: "mustard",
      image: "https://images.unsplash.com/photo-1755598603202-f6c6e02aa16b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXN0YXJkJTIwc2VlZHMlMjBvaWx8ZW58MXx8fHwxNzU3NDg1Mzc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      sizes: ["500ml", "1L", "5L", "15L Tin"],
      packaging: ["PET Bottle", "Pouch", "Tin"],
      features: ["Cold Pressed", "Heart Healthy", "Rich in Omega-3"],
      description: "Traditional cold-pressed mustard oil with authentic taste and aroma. Perfect for Bengali cuisine and traditional cooking.",
      benefits: ["Natural antibacterial properties", "Rich in monounsaturated fats", "Enhances flavor in traditional dishes"],
      rating: 4.8,
      reviews: 324
    },
    {
      id: 2,
      name: "Pure Sunflower Oil",
      category: "sunflower",
      image: "https://images.unsplash.com/photo-1656711781745-ba68661d06b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXIlMjBvaWwlMjBjb29raW5nfGVufDF8fHx8MTc1NzQ4NTM4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      sizes: ["500ml", "1L", "5L", "15L Tin"],
      packaging: ["PET Bottle", "Jerry Can", "Tin"],
      features: ["Vitamin E Enriched", "Light Taste", "High Smoke Point"],
      description: "Premium sunflower oil perfect for all cooking methods. Light taste that doesn't overpower food flavors.",
      benefits: ["High in Vitamin E", "Light and digestible", "Ideal for high-temperature cooking"],
      rating: 4.6,
      reviews: 256
    },
    {
      id: 3,
      name: "Natural Soybean Oil",
      category: "soybean",
      image: "https://images.unsplash.com/photo-1662058595162-10e024b1a907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwb2lsJTIwYm90dGxlJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NTc0ODUzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      sizes: ["1L", "5L", "15L Tin"],
      packaging: ["PET Bottle", "Tin", "Container"],
      features: ["Protein Rich", "Zero Trans Fat", "Versatile Cooking"],
      description: "High-quality soybean oil for healthy cooking and baking. Rich in essential fatty acids.",
      benefits: ["Contains healthy polyunsaturated fats", "Rich in protein", "Versatile for cooking and baking"],
      rating: 4.5,
      reviews: 189
    },
    {
      id: 4,
      name: "Premium Groundnut Oil",
      category: "groundnut",
      image: "https://images.unsplash.com/photo-1662058595162-10e024b1a907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwb2lsJTIwYm90dGxlJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NTc0ODUzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      sizes: ["500ml", "1L", "5L"],
      packaging: ["PET Bottle", "Glass Jar", "Tin"],
      features: ["Cold Pressed", "Aromatic", "Traditional Taste"],
      description: "Pure groundnut oil with rich flavor and nutritional benefits. Adds distinctive taste to traditional recipes.",
      benefits: ["Rich in protein and healthy fats", "Contains resveratrol antioxidant", "Good source of Vitamin E"],
      rating: 4.7,
      reviews: 198
    },
    {
      id: 5,
      name: "Special Blended Oil",
      category: "blended",
      image: "https://images.unsplash.com/photo-1662058595162-10e024b1a907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwb2lsJTIwYm90dGxlJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NTc0ODUzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      sizes: ["1L", "5L", "15L Tin"],
      packaging: ["PET Bottle", "Tin"],
      features: ["Balanced Nutrition", "Multi-Purpose", "Enhanced Shelf Life"],
      description: "Carefully blended oils combining the best of multiple sources for balanced nutrition and versatility.",
      benefits: ["Balanced fatty acid profile", "Enhanced nutritional value", "Suitable for all cooking methods"],
      rating: 4.4,
      reviews: 142
    },
    {
      id: 6,
      name: "Organic Coconut Oil",
      category: "coconut",
      image: "https://images.unsplash.com/photo-1662058595162-10e024b1a907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwb2lsJTIwYm90dGxlJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NTc0ODUzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      sizes: ["500ml", "1L"],
      packaging: ["Glass Jar", "PET Bottle"],
      features: ["Virgin Quality", "Natural Aroma", "Multi-Use"],
      description: "Premium virgin coconut oil for cooking, skincare, and haircare. Pure and unrefined quality.",
      benefits: ["Rich in medium-chain fatty acids", "Natural antimicrobial properties", "Multi-purpose usage"],
      rating: 4.9,
      reviews: 276
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'mustard', name: 'Mustard Oil' },
    { id: 'sunflower', name: 'Sunflower Oil' },
    { id: 'soybean', name: 'Soybean Oil' },
    { id: 'groundnut', name: 'Groundnut Oil' },
    { id: 'blended', name: 'Blended Oil' },
    { id: 'coconut', name: 'Coconut Oil' }
  ];

  const sizes = [
    { id: 'all', name: 'All Sizes' },
    { id: '500ml', name: '500ml' },
    { id: '1L', name: '1 Liter' },
    { id: '5L', name: '5 Liter' },
    { id: '15L', name: '15 Liter' }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const sizeMatch = selectedSize === 'all' || product.sizes.includes(selectedSize);
    return categoryMatch && sizeMatch;
  });

  const highlights = [
    {
      icon: <Heart className="w-8 h-8 text-[#FFD233]" />,
      title: "Cold Pressed",
      description: "Traditional extraction preserves natural nutrients"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#FFD233]" />,
      title: "FSSAI Certified",
      description: "License: 10017051002014 for food safety"
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#FFD233]" />,
      title: "Chemical Free",
      description: "No artificial additives or preservatives"
    },
    {
      icon: <Award className="w-8 h-8 text-[#FFD233]" />,
      title: "Premium Quality",
      description: "45+ years of trusted quality standards"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="himalayan-golden-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-[#4B2E2B] mb-6">
            Premium Oil Collection
          </h1>
          <p className="text-xl text-[#4B2E2B] opacity-90 max-w-3xl mx-auto mb-8">
            Discover our complete range of cold-pressed, natural oils perfect for healthy cooking, 
            traditional recipes, and modern culinary needs.
          </p>
          <div className="flex justify-center">
            <Badge className="bg-[#4B2E2B] text-white px-6 py-2 text-lg">
              6+ Premium Oil Varieties
            </Badge>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Filter className="w-6 h-6 text-[#4B2E2B]" />
            <h2 className="text-2xl text-[#4B2E2B]">Filter Products</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Oil Type Filter */}
            <div>
              <h3 className="text-lg text-[#4B2E2B] mb-4">Oil Type</h3>
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 bg-white gap-1">
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="data-[state=active]:bg-[#FFD233] data-[state=active]:text-[#4B2E2B] text-xs px-2 py-1"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Size Filter */}
            <div>
              <h3 className="text-lg text-[#4B2E2B] mb-4">Package Size</h3>
              <Tabs value={selectedSize} onValueChange={setSelectedSize}>
                <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 bg-white gap-1">
                  {sizes.map((size) => (
                    <TabsTrigger 
                      key={size.id} 
                      value={size.id}
                      className="data-[state=active]:bg-[#FFD233] data-[state=active]:text-[#4B2E2B] text-xs px-2 py-1"
                    >
                      {size.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Our Product Range
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Each product is crafted with care, maintaining the highest standards of purity and quality
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="relative">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#FFD233] text-[#4B2E2B] hover:bg-[#FFE680]">
                      <Award className="w-3 h-3 mr-1" />
                      Premium
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1 bg-white/90 rounded px-2 py-1">
                      <Star className="w-3 h-3 text-[#FFD233] fill-current" />
                      <span className="text-xs text-[#4B2E2B] font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-[#4B2E2B] flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-[#FFD233]" />
                    {product.name}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-[#4B2E2B] opacity-60">
                    <Star className="w-4 h-4 text-[#FFD233] fill-current" />
                    <span>{product.rating} ({product.reviews} reviews)</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-[#4B2E2B] opacity-80">
                    {product.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    <h5 className="text-sm text-[#4B2E2B]">Key Features:</h5>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-[#FFD233] text-[#4B2E2B]">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Benefits */}
                  <div className="space-y-2">
                    <h5 className="text-sm text-[#4B2E2B]">Health Benefits:</h5>
                    <ul className="space-y-1">
                      {product.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-[#4B2E2B] opacity-80">
                          <CheckCircle className="w-3 h-3 text-[#FFD233] mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Sizes */}
                  <div className="space-y-2">
                    <h5 className="text-sm text-[#4B2E2B]">Available Sizes:</h5>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size, index) => (
                        <span key={index} className="text-xs bg-[#FFF8E1] px-2 py-1 rounded text-[#4B2E2B] flex items-center gap-1">
                          <Package className="w-3 h-3" />
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1 himalayan-gradient text-white hover:opacity-90">
                      <Heart className="w-4 h-4 mr-2" />
                      Enquire Now
                    </Button>
                    <Button variant="outline" size="icon" className="border-[#FFD233] text-[#4B2E2B] hover:bg-[#FFD233]">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-[#4B2E2B] opacity-60">
                No products found matching your filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-20 bg-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              What Makes Our Products Special
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Every bottle of Himalayan Oil represents our commitment to quality, purity, and traditional values
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">{highlight.icon}</div>
                  <h3 className="text-lg text-[#4B2E2B]">{highlight.title}</h3>
                  <p className="text-sm text-[#4B2E2B] opacity-80">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure Download */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="himalayan-golden-gradient">
            <CardContent className="p-8">
              <h2 className="text-3xl text-[#4B2E2B] mb-4">
                Download Product Brochure
              </h2>
              <p className="text-lg text-[#4B2E2B] opacity-80 mb-6">
                Get detailed information about all our products, specifications, and packaging options
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#4B2E2B] text-white hover:bg-[#3A221F] px-8 py-6">
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure (PDF)
                </Button>
                <Button 
                  onClick={() => navigate('/contact')}
                  variant="outline" 
                  className="border-2 border-[#4B2E2B] text-[#4B2E2B] hover:bg-[#4B2E2B] hover:text-white px-8 py-6"
                >
                  Request Price List
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="himalayan-gradient py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            Ready to Experience Pure Quality?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Order now or become a distributor to bring Himalayan Oil to your customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/contact')}
              className="bg-white text-[#4B2E2B] hover:bg-gray-100 px-8 py-6"
            >
              Order Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              onClick={() => navigate('/distributor')}
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#4B2E2B] px-8 py-6"
            >
              Become a Distributor
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;