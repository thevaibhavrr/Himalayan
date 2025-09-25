import Hero from '../Hero';
import About from '../About';
import Products from '../Products';
import HealthBenefits from '../HealthBenefits';
import Testimonials from '../Testimonials';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowRight, Star, Heart, Shield, Leaf } from 'lucide-react';
import { useRouter } from '../Router';

const HomePage = () => {
  const { navigate } = useRouter();

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Mustard Oil",
      image: "https://images.unsplash.com/photo-1755598603202-f6c6e02aa16b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXN0YXJkJTIwc2VlZHMlMjBvaWx8ZW58MXx8fHwxNzU3NDg1Mzc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: ["Cold Pressed", "Heart Healthy", "Rich in Omega-3"],
      description: "Traditional cold-pressed mustard oil with authentic taste"
    },
    {
      id: 2,
      name: "Pure Sunflower Oil",
      image: "https://images.unsplash.com/photo-1656711781745-ba68661d06b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXIlMjBvaWwlMjBjb29raW5nfGVufDF8fHx8MTc1NzQ4NTM4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: ["Vitamin E", "Light Taste", "High Smoke Point"],
      description: "Premium sunflower oil perfect for all cooking methods"
    },
    {
      id: 3,
      name: "Natural Groundnut Oil",
      image: "https://images.unsplash.com/photo-1662058595162-10e024b1a907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwb2lsJTIwYm90dGxlJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NTc0ODUzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: ["Cold Pressed", "Aromatic", "Traditional Taste"],
      description: "Pure groundnut oil with rich flavor and nutrition"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* About Preview */}
      <main className="relative mx-auto flex max-w-6xl flex-col items-center justify-center gap-10 px-6 py-16 md:flex-row md:gap-12">
      {/* Product section */}
      <section className="relative flex w-full items-center justify-center md:w-1/2">
        <img
          src="https://i.ibb.co/SqXfTrW/61l62-OYN9-DL-SL1000-removebg-preview.png"
          alt="Mazola Oil Bottles"
          width={700}
          height={600}
          priority
          className="h-auto w-4/5 max-w-[420px]"
        />
      </section>

      {/* Text section */}
      <section className="relative w-full md:w-1/2">
        {/* Watermark background text */}
        <h2
          className="pointer-events-none select-none absolute -top-8 left-0 -z-10 
                     text-6xl font-extrabold leading-none text-neutral-100 
                     md:-top-10 md:text-8xl"
          aria-hidden
        >
          Cooking Oil
        </h2>

        <p className="mt-24 text-sm leading-7 text-neutral-600 md:mt-28 md:max-w-[520px]">
          Experience delicious cooking every time and more with Mazola Heart-Healthy™️
          cooking spray and oils. You can help improve heart health and reduce cholesterol
          levels by replacing butter, margarine, or oils higher in saturated fat.
        </p>

        <button
          className="mt-5 inline-flex items-center rounded-full bg-emerald-700 px-6 py-3 
                     text-sm font-medium text-white transition hover:bg-emerald-800 focus:outline-none 
                     focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          type="button"
        >
          Learn More
        </button>
      </section>
    </main>


      {/* Featured Products */}
      <section className="py-16 bg-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Discover our most popular oils, trusted by families across India
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="relative">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#FFD233] text-[#4B2E2B]">
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl text-[#4B2E2B] mb-2">{product.name}</h3>
                  <p className="text-sm text-[#4B2E2B] opacity-80 mb-4">{product.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.benefits.map((benefit, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-[#FFD233] text-[#4B2E2B]">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full himalayan-gradient text-white">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => navigate('/products')}
              variant="outline" 
              className="border-2 border-[#4B2E2B] text-[#4B2E2B] hover:bg-[#4B2E2B] hover:text-white px-8 py-6"
            >
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      {/* <HealthBenefits /> */}

      {/* Testimonials */}
      {/* <Testimonials /> */}

      {/* CTA Banners */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Become a Distributor CTA */}
            <Card className="himalayan-gradient text-white overflow-hidden relative">
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl mb-4">Become Our Distribution Partner</h3>
                <p className="text-white opacity-90 mb-6">
                  Join our growing network of distributors across India. 
                  Expand your business with premium quality oils.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-white fill-current" />
                    ))}
                  </div>
                  <span className="text-sm">Trusted by 500+ Partners</span>
                </div>
                <Button 
                  onClick={() => navigate('/distributor')}
                  className="bg-white text-[#4B2E2B] hover:bg-gray-100"
                >
                  Partner With Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/20 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-white/10 rounded-full"></div>
            </Card>

            {/* Explore Oils CTA */}
            <Card className="himalayan-golden-gradient text-[#4B2E2B] overflow-hidden relative">
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl mb-4">Explore Premium Oils</h3>
                <p className="text-[#4B2E2B] opacity-90 mb-6">
                  Discover our complete range of cold-pressed, natural oils 
                  perfect for healthy cooking and traditional recipes.
                </p>
                <div className="flex items-center gap-6 mb-6 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-lg">5+</div>
                    <div className="opacity-80">Oil Varieties</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">100%</div>
                    <div className="opacity-80">Natural</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">45+</div>
                    <div className="opacity-80">Years Trust</div>
                  </div>
                </div>
                <Button 
                  onClick={() => navigate('/products')}
                  className="bg-[#4B2E2B] text-white hover:bg-[#3A221F]"
                >
                  Browse Products
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#4B2E2B]/20 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#4B2E2B]/10 rounded-full"></div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;