import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Heart, Award, Leaf, Download, Shield } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Premium Mustard Oil",
      category: "mustard",
      image: "https://images.unsplash.com/photo-1755598603202-f6c6e02aa16b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXN0YXJkJTIwc2VlZHMlMjBvaWx8ZW58MXx8fHwxNzU3NDg1Mzc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      sizes: ["500ml", "1L", "5L", "15L Tin"],
      packaging: ["PET Bottle", "Pouch", "Tin"],
      features: ["Cold Pressed", "Heart Healthy", "Rich in Omega-3"],
      description: "Traditional cold-pressed mustard oil with authentic taste and aroma."
    },
    {
      id: 2,
      name: "Pure Sunflower Oil",
      category: "sunflower",
      image: "https://images.unsplash.com/photo-1656711781745-ba68661d06b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXIlMjBvaWwlMjBjb29raW5nfGVufDF8fHx8MTc1NzQ4NTM4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      sizes: ["500ml", "1L", "5L", "15L Tin"],
      packaging: ["PET Bottle", "Jerry Can", "Tin"],
      features: ["Vitamin E Enriched", "Light Taste", "High Smoke Point"],
      description: "Premium sunflower oil perfect for all cooking methods."
    },
    {
      id: 3,
      name: "Natural Soybean Oil",
      category: "soybean",
      image: "https://images.unsplash.com/photo-1662058595162-10e024b1a907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwb2lsJTIwYm90dGxlJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NTc0ODUzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      sizes: ["1L", "5L", "15L Tin"],
      packaging: ["PET Bottle", "Tin", "Container"],
      features: ["Protein Rich", "Zero Trans Fat", "Versatile Cooking"],
      description: "High-quality soybean oil for healthy cooking and baking."
    },
    {
      id: 4,
      name: "Premium Groundnut Oil",
      category: "groundnut",
      image: "https://images.unsplash.com/photo-1662058595162-10e024b1a907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwb2lsJTIwYm90dGxlJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NTc0ODUzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      sizes: ["500ml", "1L", "5L"],
      packaging: ["PET Bottle", "Glass Jar", "Tin"],
      features: ["Cold Pressed", "Aromatic", "Traditional Taste"],
      description: "Pure groundnut oil with rich flavor and nutritional benefits."
    },
    {
      id: 5,
      name: "Special Blended Oil",
      category: "blended",
      image: "https://images.unsplash.com/photo-1662058595162-10e024b1a907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwb2lsJTIwYm90dGxlJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NTc0ODUzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      sizes: ["1L", "5L", "15L Tin"],
      packaging: ["PET Bottle", "Tin"],
      features: ["Balanced Nutrition", "Multi-Purpose", "Enhanced Shelf Life"],
      description: "Carefully blended oils combining the best of multiple sources."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'mustard', name: 'Mustard Oil' },
    { id: 'sunflower', name: 'Sunflower Oil' },
    { id: 'soybean', name: 'Soybean Oil' },
    { id: 'groundnut', name: 'Groundnut Oil' },
    { id: 'blended', name: 'Blended Oil' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-[#FFF8E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
            Our Premium Products
          </h2>
          <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
            Discover our range of pure, natural edible oils crafted with traditional methods and modern quality standards
          </p>
        </div>

        {/* Category Filter */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-white rounded-lg p-1">
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              </div>
              
              <CardHeader>
                <CardTitle className="text-[#4B2E2B] flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-[#FFD233]" />
                  {product.name}
                </CardTitle>
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
                
                {/* Sizes */}
                <div className="space-y-2">
                  <h5 className="text-sm text-[#4B2E2B]">Available Sizes:</h5>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size, index) => (
                      <span key={index} className="text-xs bg-[#FFF8E1] px-2 py-1 rounded text-[#4B2E2B]">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Packaging */}
                <div className="space-y-2">
                  <h5 className="text-sm text-[#4B2E2B]">Packaging Options:</h5>
                  <div className="flex flex-wrap gap-2">
                    {product.packaging.map((pack, index) => (
                      <span key={index} className="text-xs bg-[#FFE680] px-2 py-1 rounded text-[#4B2E2B]">
                        {pack}
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

        {/* Quality Assurance */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl text-[#4B2E2B] mb-4">Quality Assurance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFD233] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-[#4B2E2B]" />
                </div>
                <h4 className="text-sm text-[#4B2E2B]">FSSAI Licensed</h4>
                <p className="text-xs text-[#4B2E2B] opacity-60">10017051002014</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFD233] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-[#4B2E2B]" />
                </div>
                <h4 className="text-sm text-[#4B2E2B]">ISO Certified</h4>
                <p className="text-xs text-[#4B2E2B] opacity-60">Quality Standards</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFD233] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-8 h-8 text-[#4B2E2B]" />
                </div>
                <h4 className="text-sm text-[#4B2E2B]">AGMARK</h4>
                <p className="text-xs text-[#4B2E2B] opacity-60">Agricultural Grade</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFD233] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-[#4B2E2B]" />
                </div>
                <h4 className="text-sm text-[#4B2E2B]">HACCP</h4>
                <p className="text-xs text-[#4B2E2B] opacity-60">Food Safety</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;