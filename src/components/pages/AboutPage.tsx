import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useRouter } from '../Router';
import { 
  Factory, Heart, Award, Shield, ArrowRight, CheckCircle, 
  Users, Globe, TrendingUp, Target, Eye, Calendar 
} from 'lucide-react';

const AboutPage = () => {
  const { navigate } = useRouter();

  const milestones = [
    { year: '1978', event: 'Himalayan Oil founded with traditional Kolhu extraction' },
    { year: '1985', event: 'First mechanized oil extraction facility established' },
    { year: '1992', event: 'AGMARK certification received for quality assurance' },
    { year: '2001', event: 'ISO certification achieved for international standards' },
    { year: '2010', event: 'FSSAI license obtained for food safety compliance' },
    { year: '2015', event: 'Expansion to online platforms and e-commerce' },
    { year: '2020', event: 'HACCP certification for advanced food safety' },
    { year: '2024', event: '2000 MT monthly capacity achieved' }
  ];

  const infrastructure = [
    {
      title: "Production Capacity",
      value: "2000 MT/Month",
      description: "State-of-the-art facility with advanced processing equipment"
    },
    {
      title: "Quality Control Lab",
      value: "In-house Testing",
      description: "Modern laboratory for continuous quality monitoring"
    },
    {
      title: "Storage Facility",
      value: "Climate Controlled",
      description: "Optimal temperature and humidity controlled warehouses"
    },
    {
      title: "Packaging Lines",
      value: "Automated Systems",
      description: "Advanced filling and packaging machinery for various sizes"
    }
  ];

  const futureGoals = [
    {
      icon: <Globe className="w-8 h-8 text-[#FFD233]" />,
      title: "International Expansion",
      description: "Expanding to international markets while maintaining quality standards"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#FFD233]" />,
      title: "Sustainable Practices",
      description: "Implementing eco-friendly processes and sustainable sourcing"
    },
    {
      icon: <Users className="w-8 h-8 text-[#FFD233]" />,
      title: "Community Development",
      description: "Supporting local farmers and communities in our supply chain"
    },
    {
      icon: <Award className="w-8 h-8 text-[#FFD233]" />,
      title: "Innovation Excellence",
      description: "Continuous innovation in extraction methods and product development"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="himalayan-golden-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#4B2E2B] text-white">Since 1978</Badge>
              <h1 className="text-4xl md:text-5xl text-[#4B2E2B]">
                Four Decades of 
                <span className="block font-serif italic" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Pure Excellence
                </span>
              </h1>
              <p className="text-xl text-[#4B2E2B] opacity-90">
                From humble beginnings to becoming a trusted name across India, 
                our journey has been guided by unwavering commitment to quality, 
                purity, and traditional values.
              </p>
              <Button 
                onClick={() => navigate('/contact')}
                className="himalayan-gradient text-white"
              >
                Connect With Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1713780131281-61ec701ebb6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNvb2tpbmclMjBtZXRob2RzfGVufDF8fHx8MTc1NzQ4NTM4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Traditional oil extraction"
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl text-[#4B2E2B]">
                Our Story
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-[#4B2E2B] opacity-80 leading-relaxed">
                  We are a trusted name in the edible oil industry, dedicated to delivering purity, 
                  quality, and health in every drop. With our brand, we strive to bring premium-grade 
                  oils to households, hotels, and businesses, ensuring unmatched freshness through 
                  advanced packaging solutions.
                </p>
                <p className="text-lg text-[#4B2E2B] opacity-80 leading-relaxed">
                  Our commitment to traditional Kolhu extraction methods, combined with modern 
                  packaging and quality assurance, ensures that every drop of oil maintains 
                  its natural goodness and authentic taste.
                </p>
                <p className="text-lg text-[#4B2E2B] opacity-80 leading-relaxed">
                  Today, we serve thousands of families across UP, Bihar, Delhi, and Haryana, 
                  while expanding our reach through online platforms like Amazon, Jiomart, and 
                  Blinkit to bring premium-quality oils to homes nationwide.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-[#FFF8E1] rounded-lg">
                <div className="text-3xl font-bold text-[#FFD233] mb-2">45+</div>
                <div className="text-sm text-[#4B2E2B] opacity-80">Years of Excellence</div>
              </div>
              <div className="text-center p-6 bg-[#FFF8E1] rounded-lg">
                <div className="text-3xl font-bold text-[#FFD233] mb-2">2000</div>
                <div className="text-sm text-[#4B2E2B] opacity-80">MT Monthly Capacity</div>
              </div>
              <div className="text-center p-6 bg-[#FFF8E1] rounded-lg">
                <div className="text-3xl font-bold text-[#FFD233] mb-2">1000+</div>
                <div className="text-sm text-[#4B2E2B] opacity-80">Happy Customers</div>
              </div>
              <div className="text-center p-6 bg-[#FFF8E1] rounded-lg">
                <div className="text-3xl font-bold text-[#FFD233] mb-2">4</div>
                <div className="text-sm text-[#4B2E2B] opacity-80">States Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-xl bg-white">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Target className="w-8 h-8 text-[#FFD233]" />
                  <CardTitle className="text-2xl text-[#4B2E2B]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Our Mission
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-[#4B2E2B] opacity-80 leading-relaxed">
                  Our mission is to produce and deliver superior-quality edible oils that meet the highest standards of purity, health, and safety. We aim to delight customers through excellent packaging, reliable service, and consistent commitment to their nutritional needs.
                </p>
                <ul className="space-y-2">
                  {[
                    'Maintain uncompromising quality standards',
                    'Preserve traditional extraction methods',
                    'Ensure food safety and hygiene',
                    'Build lasting customer relationships'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-[#4B2E2B] opacity-80">
                      <CheckCircle className="w-4 h-4 text-[#FFD233] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl bg-white">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Eye className="w-8 h-8 text-[#FFD233]" />
                  <CardTitle className="text-2xl text-[#4B2E2B]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Our Vision
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-[#4B2E2B] opacity-80 leading-relaxed">
                  Our vision is to be a leading edible oil brand recognized globally for quality, trust, and innovation. We aspire to set new benchmarks in customer satisfaction and health-focused products while continuously enhancing our processes, packaging, and services.
                </p>
                <ul className="space-y-2">
                  {[
                    'Global brand recognition and trust',
                    'Innovation in oil extraction technology',
                    'Health-focused product development',
                    'Sustainable business practices'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-[#4B2E2B] opacity-80">
                      <CheckCircle className="w-4 h-4 text-[#FFD233] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Traditional Kolhu Extraction Method
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Our time-tested process combines traditional wisdom with modern hygiene standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-[#FFD233] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-[#4B2E2B]">1</span>
                </div>
                <h3 className="text-xl text-[#4B2E2B]">Selection & Cleaning</h3>
                <p className="text-sm text-[#4B2E2B] opacity-80">
                  Premium quality seeds/nuts are carefully selected and thoroughly cleaned 
                  to remove impurities and foreign materials.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-[#FFD233] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-[#4B2E2B]">2</span>
                </div>
                <h3 className="text-xl text-[#4B2E2B]">Cold Pressing</h3>
                <p className="text-sm text-[#4B2E2B] opacity-80">
                  Traditional Kolhu method extracts oil at low temperatures, 
                  preserving natural nutrients and authentic flavor.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-[#FFD233] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-[#4B2E2B]">3</span>
                </div>
                <h3 className="text-xl text-[#4B2E2B]">Natural Filtration</h3>
                <p className="text-sm text-[#4B2E2B] opacity-80">
                  Oil is naturally filtered without chemicals to maintain purity 
                  while removing any residual particles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Factory & Infrastructure */}
      <section className="py-20 bg-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Factory & Infrastructure
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Modern facilities equipped with advanced technology for quality production
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructure.map((item, index) => (
              <Card key={index} className="text-center shadow-lg bg-white">
                <CardContent className="p-6 space-y-4">
                  <Factory className="w-12 h-12 text-[#FFD233] mx-auto" />
                  <h3 className="text-lg text-[#4B2E2B]">{item.title}</h3>
                  <div className="text-2xl font-bold text-[#FFD233]">{item.value}</div>
                  <p className="text-sm text-[#4B2E2B] opacity-80">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Milestones & Timeline
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Key achievements and milestones in our journey of excellence
            </p>
          </div>

          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#FFD233] rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-[#4B2E2B]" />
                  </div>
                </div>
                <Card className="flex-1 shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <Badge className="bg-[#4B2E2B] text-white">{milestone.year}</Badge>
                      <p className="text-[#4B2E2B] opacity-80">{milestone.event}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 bg-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Future Goals & Vision
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Our roadmap for continued growth and innovation in the edible oil industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {futureGoals.map((goal, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">{goal.icon}</div>
                  <h3 className="text-lg text-[#4B2E2B]">{goal.title}</h3>
                  <p className="text-sm text-[#4B2E2B] opacity-80">{goal.description}</p>
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
            Join Our Journey of Excellence
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Experience the difference that 45+ years of tradition and quality makes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/products')}
              className="bg-white text-[#4B2E2B] hover:bg-gray-100 px-8 py-6"
            >
              Explore Our Products
            </Button>
            <Button 
              onClick={() => navigate('/distributor')}
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#4B2E2B] px-8 py-6"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;