import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useRouter } from '../Router';
import { 
  MapPin, Users, Globe, ArrowRight, 
  Truck, Store, ShoppingCart, Award,
  Phone, Mail, Clock, Star
} from 'lucide-react';

const DistributionPage = () => {
  const { navigate } = useRouter();

  const distributionAreas = [
    {
      state: "Uttar Pradesh",
      cities: ["Modinagar", "Ghaziabad", "Noida", "Greater Noida", "Meerut", "Agra", "Kanpur", "Lucknow"],
      distributors: 150,
      retailers: 500,
      coverage: "95%"
    },
    {
      state: "Bihar",
      cities: ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga", "Purnia"],
      distributors: 80,
      retailers: 300,
      coverage: "85%"
    },
    {
      state: "Delhi",
      cities: ["New Delhi", "Central Delhi", "East Delhi", "West Delhi", "North Delhi", "South Delhi"],
      distributors: 60,
      retailers: 200,
      coverage: "100%"
    },
    {
      state: "Haryana",
      cities: ["Gurgaon", "Faridabad", "Panipat", "Karnal", "Sonipat", "Hisar"],
      distributors: 40,
      retailers: 150,
      coverage: "90%"
    }
  ];

  const onlineChannels = [
    {
      platform: "Amazon",
      description: "Available on Amazon India with Prime delivery",
      features: ["Prime Delivery", "Customer Reviews", "Easy Returns"],
      link: "https://amazon.in"
    },
    {
      platform: "Jiomart",
      description: "Reliance Jiomart for grocery delivery",
      features: ["Same Day Delivery", "Fresh Products", "Competitive Prices"],
      link: "https://jiomart.com"
    },
    {
      platform: "Blinkit",
      description: "Quick delivery within 10 minutes",
      features: ["10 Min Delivery", "Fresh Stock", "Easy Ordering"],
      link: "https://blinkit.com"
    }
  ];

  const keyPartners = [
    {
      name: "Metro Wholesale",
      type: "Wholesale Partner",
      coverage: "Multi-state",
      description: "Leading wholesale distributor with extensive retail network",
      contact: "+91 9876543210"
    },
    {
      name: "Reliance Retail",
      type: "Retail Chain",
      coverage: "Pan India",
      description: "Major retail chain partnership for nationwide availability",
      contact: "+91 9876543211"
    },
    {
      name: "Future Group",
      type: "Retail Partner",
      coverage: "North India",
      description: "Strategic partnership for modern retail distribution",
      contact: "+91 9876543212"
    }
  ];

  const distributionStats = [
    {
      metric: "Total Distributors",
      value: "330+",
      description: "Active distributors across all regions"
    },
    {
      metric: "Retail Outlets",
      value: "1150+",
      description: "Retail points serving customers"
    },
    {
      metric: "Monthly Capacity",
      value: "2000 MT",
      description: "Production capacity to meet demand"
    },
    {
      metric: "Coverage Area",
      value: "4 States",
      description: "Primary distribution regions"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="himalayan-golden-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-[#4B2E2B] mb-6">
            Distribution Network
            <span className="block font-serif italic" style={{ fontFamily: 'Playfair Display, serif' }}>
              Across India
            </span>
          </h1>
          <p className="text-xl text-[#4B2E2B] opacity-90 max-w-3xl mx-auto mb-8">
            Our extensive distribution network ensures that premium quality oils reach 
            every corner of our service areas through both traditional and modern channels.
          </p>
          <div className="flex justify-center">
            <Badge className="bg-[#4B2E2B] text-white px-6 py-2 text-lg">
              330+ Distributors • 1150+ Retail Outlets
            </Badge>
          </div>
        </div>
      </section>

      {/* Distribution Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Network Overview
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Strong presence across multiple states with comprehensive coverage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {distributionStats.map((stat, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-[#FFD233] rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-[#4B2E2B]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#FFD233]">{stat.value}</h3>
                  <h4 className="text-lg text-[#4B2E2B]">{stat.metric}</h4>
                  <p className="text-sm text-[#4B2E2B] opacity-80">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Distribution */}
      <section className="py-20 bg-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Regional Coverage
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Strong presence across key states with comprehensive city coverage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {distributionAreas.map((area, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className="bg-[#FFD233] text-[#4B2E2B]">
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-6 h-6" />
                    {area.state}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#FFD233]">{area.distributors}</div>
                      <div className="text-sm text-[#4B2E2B] opacity-80">Distributors</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#FFD233]">{area.retailers}</div>
                      <div className="text-sm text-[#4B2E2B] opacity-80">Retailers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#FFD233]">{area.coverage}</div>
                      <div className="text-sm text-[#4B2E2B] opacity-80">Coverage</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-[#4B2E2B] font-medium mb-2">Cities Covered:</h4>
                    <div className="flex flex-wrap gap-1">
                      {area.cities.map((city, cityIndex) => (
                        <Badge key={cityIndex} variant="outline" className="text-xs border-[#FFD233] text-[#4B2E2B]">
                          {city}
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

      {/* Online Channels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Online Distribution
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Available on leading e-commerce platforms for convenient online shopping
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {onlineChannels.map((channel, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-[#FFD233] rounded-full flex items-center justify-center mx-auto">
                    <ShoppingCart className="w-8 h-8 text-[#4B2E2B]" />
                  </div>
                  <h3 className="text-xl text-[#4B2E2B]">{channel.platform}</h3>
                  <p className="text-sm text-[#4B2E2B] opacity-80">{channel.description}</p>
                  
                  <div className="space-y-2">
                    {channel.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-[#4B2E2B]">
                        <Star className="w-4 h-4 text-[#FFD233]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => window.open(channel.link, '_blank')}
                    className="w-full himalayan-gradient text-white"
                  >
                    Visit Platform
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Partners */}
      <section className="py-20 bg-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Key Distribution Partners
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Strategic partnerships with leading distributors and retail chains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyPartners.map((partner, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6 text-[#FFD233]" />
                    <div>
                      <h3 className="text-lg text-[#4B2E2B]">{partner.name}</h3>
                      <Badge className="bg-[#FFD233] text-[#4B2E2B] text-xs">{partner.type}</Badge>
                    </div>
                  </div>
                  
                  <p className="text-sm text-[#4B2E2B] opacity-80 mb-3">{partner.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#4B2E2B] opacity-60">Coverage:</span>
                      <span className="text-[#4B2E2B]">{partner.coverage}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#4B2E2B] opacity-60">Contact:</span>
                      <span className="text-[#4B2E2B]">{partner.contact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="himalayan-golden-gradient shadow-2xl">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl text-[#4B2E2B] mb-4">
                Join Our Distribution Network
              </h2>
              <p className="text-lg text-[#4B2E2B] opacity-80 mb-6">
                Become part of our growing distribution network and help bring premium 
                quality oils to customers across India
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => navigate('/distributor')}
                  className="bg-[#4B2E2B] text-white hover:bg-[#3A221F] px-8 py-6"
                >
                  Become a Distributor
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  onClick={() => navigate('/contact')}
                  variant="outline" 
                  className="border-2 border-[#4B2E2B] text-[#4B2E2B] hover:bg-[#4B2E2B] hover:text-white px-8 py-6"
                >
                  Contact Sales Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="himalayan-gradient py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            Find Our Products Near You
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Locate the nearest distributor or retailer to purchase our premium oils
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/contact')}
              className="bg-white text-[#4B2E2B] hover:bg-gray-100 px-8 py-6"
            >
              Find Nearest Store
              <MapPin className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              onClick={() => navigate('/products')}
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#4B2E2B] px-8 py-6"
            >
              Shop Online
              <ShoppingCart className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DistributionPage;
