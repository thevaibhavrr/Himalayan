import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useRouter } from '../Router';
import { 
  Factory, Shield, Award, CheckCircle, ArrowRight, 
  Users, Globe, TrendingUp, Target, Eye, Calendar,
  Building, Wrench, Thermometer, Droplets, Zap
} from 'lucide-react';

const InfrastructurePage = () => {
  const { navigate } = useRouter();

  const infrastructure = [
    {
      title: "Production Capacity",
      value: "2000 MT/Month",
      description: "State-of-the-art facility with advanced processing equipment",
      icon: <Factory className="w-8 h-8 text-[#FFD233]" />
    },
    {
      title: "Quality Control Lab",
      value: "In-house Testing",
      description: "Modern laboratory for continuous quality monitoring",
      icon: <Shield className="w-8 h-8 text-[#FFD233]" />
    },
    {
      title: "Storage Facility",
      value: "Climate Controlled",
      description: "Optimal temperature and humidity controlled warehouses",
      icon: <Building className="w-8 h-8 text-[#FFD233]" />
    },
    {
      title: "Packaging Lines",
      value: "Automated Systems",
      description: "Advanced filling and packaging machinery for various sizes",
      icon: <Wrench className="w-8 h-8 text-[#FFD233]" />
    }
  ];

  const qualityProcess = [
    {
      step: "01",
      title: "Raw Material Testing",
      description: "Comprehensive testing of incoming raw materials for purity and quality standards",
      icon: <Thermometer className="w-6 h-6 text-[#FFD233]" />
    },
    {
      step: "02",
      title: "Traditional Kolhu Extraction",
      description: "Cold-pressed extraction using traditional methods to preserve natural nutrients",
      icon: <Droplets className="w-6 h-6 text-[#FFD233]" />
    },
    {
      step: "03",
      title: "Natural Filtration",
      description: "Chemical-free filtration process maintaining oil purity and natural properties",
      icon: <Zap className="w-6 h-6 text-[#FFD233]" />
    },
    {
      step: "04",
      title: "Quality Testing",
      description: "Rigorous testing for acidity, peroxide value, and nutritional content",
      icon: <Shield className="w-6 h-6 text-[#FFD233]" />
    },
    {
      step: "05",
      title: "Packaging & Storage",
      description: "Advanced packaging systems ensuring freshness and extended shelf life",
      icon: <Factory className="w-6 h-6 text-[#FFD233]" />
    }
  ];

  const certifications = [
    {
      name: "FSSAI Certified",
      number: "10017051002014",
      description: "Food Safety and Standards Authority of India certification",
      status: "Active"
    },
    {
      name: "ISO Standards",
      number: "ISO 22000:2018",
      description: "International food safety management system certification",
      status: "Active"
    },
    {
      name: "AGMARK",
      number: "Premium Grade",
      description: "Agricultural marketing certification for quality assurance",
      status: "Active"
    },
    {
      name: "HACCP",
      number: "Hazard Analysis",
      description: "Hazard Analysis Critical Control Points certification",
      status: "Active"
    }
  ];

  const machinery = [
    {
      name: "Traditional Kolhu",
      description: "Cold-press extraction maintaining natural oil properties",
      capacity: "500 kg/day"
    },
    {
      name: "High Capacity Filling Machines",
      description: "Automated filling systems for various bottle sizes",
      capacity: "2000 bottles/hour"
    },
    {
      name: "Quality Control Equipment",
      description: "Advanced testing equipment for oil quality parameters",
      capacity: "Real-time monitoring"
    },
    {
      name: "Packaging Systems",
      description: "Modern packaging lines for bottles, tins, and pouches",
      capacity: "Multiple formats"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="himalayan-golden-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#4B2E2B] text-white">State-of-the-Art Infrastructure</Badge>
              <h1 className="text-4xl md:text-5xl text-[#4B2E2B]">
                World-Class 
                <span className="block font-serif italic" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Manufacturing Facility
                </span>
              </h1>
              <p className="text-xl text-[#4B2E2B] opacity-90">
                Our modern facility combines traditional extraction methods with cutting-edge 
                technology to deliver the highest quality edible oils. With 2000 MT monthly 
                capacity and advanced quality control systems.
              </p>
              <Button 
                onClick={() => navigate('/contact')}
                className="himalayan-gradient text-white"
              >
                Schedule Factory Visit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcHJvY2Vzc2luZyUyMGZhY3Rvcnl8ZW58MXx8fHwxNzU3NDg1Mzg3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Modern manufacturing facility"
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Infrastructure Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Infrastructure Overview
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Modern facilities equipped with advanced technology for quality production and efficient operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructure.map((item, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">{item.icon}</div>
                  <h3 className="text-lg text-[#4B2E2B]">{item.title}</h3>
                  <div className="text-2xl font-bold text-[#FFD233]">{item.value}</div>
                  <p className="text-sm text-[#4B2E2B] opacity-80">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control Process */}
      <section className="py-20 bg-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Quality Control Process
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Rigorous quality control measures ensure every drop meets our high standards
            </p>
          </div>

          <div className="space-y-8">
            {qualityProcess.map((step, index) => (
              <div key={index} className="flex items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-[#FFD233] rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#4B2E2B]">{step.step}</span>
                  </div>
                </div>
                <Card className="flex-1 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex justify-center">{step.icon}</div>
                      <h3 className="text-xl text-[#4B2E2B]">{step.title}</h3>
                    </div>
                    <p className="text-[#4B2E2B] opacity-80">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Certifications & Standards
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Our commitment to quality is validated by multiple certifications and standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-[#FFD233] rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8 text-[#4B2E2B]" />
                  </div>
                  <h3 className="text-lg text-[#4B2E2B]">{cert.name}</h3>
                  <div className="text-sm font-bold text-[#FFD233]">{cert.number}</div>
                  <p className="text-xs text-[#4B2E2B] opacity-80">{cert.description}</p>
                  <Badge className="bg-green-100 text-green-700 text-xs">{cert.status}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery & Equipment */}
      <section className="py-20 bg-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Advanced Machinery & Equipment
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              State-of-the-art equipment ensuring precision and quality in every process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {machinery.map((machine, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Wrench className="w-6 h-6 text-[#FFD233]" />
                    <h3 className="text-xl text-[#4B2E2B]">{machine.name}</h3>
                  </div>
                  <p className="text-sm text-[#4B2E2B] opacity-80 mb-3">{machine.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#4B2E2B] opacity-60">Capacity:</span>
                    <Badge className="bg-[#FFD233] text-[#4B2E2B] text-xs">{machine.capacity}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Visit */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="himalayan-golden-gradient shadow-2xl">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl text-[#4B2E2B] mb-4">
                Visit Our Manufacturing Facility
              </h2>
              <p className="text-lg text-[#4B2E2B] opacity-80 mb-6">
                Experience our quality processes firsthand. Schedule a guided tour of our 
                state-of-the-art facility and see how we maintain the highest standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => navigate('/contact')}
                  className="bg-[#4B2E2B] text-white hover:bg-[#3A221F] px-8 py-6"
                >
                  Schedule Visit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  onClick={() => navigate('/contact')}
                  variant="outline" 
                  className="border-2 border-[#4B2E2B] text-[#4B2E2B] hover:bg-[#4B2E2B] hover:text-white px-8 py-6"
                >
                  Download Brochure
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
            Quality You Can Trust
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Experience the difference that world-class infrastructure and quality control makes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/products')}
              className="bg-white text-[#4B2E2B] hover:bg-gray-100 px-8 py-6"
            >
              Explore Our Products
            </Button>
            <Button 
              onClick={() => navigate('/contact')}
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#4B2E2B] px-8 py-6"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfrastructurePage;
