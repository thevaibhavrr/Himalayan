import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  Handshake, MapPin, Phone, Mail, TrendingUp, Users, 
  Award, Shield, CheckCircle, ArrowRight, Star, Target
} from 'lucide-react';

const DistributorPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    businessType: '',
    quantityInterested: '',
    experience: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Distributor enquiry submitted:', formData);
    alert('Thank you for your interest! We will contact you within 24 hours.');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const partnerBenefits = [
    {
      icon: <Handshake className="w-8 h-8 text-[#FFD233]" />,
      title: "Established Brand Trust",
      description: "45+ years of market presence with strong customer loyalty and brand recognition across India."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#FFD233]" />,
      title: "Growing Market Demand",
      description: "Increasing demand for premium, chemical-free oils in health-conscious consumer segments."
    },
    {
      icon: <Award className="w-8 h-8 text-[#FFD233]" />,
      title: "Quality Assurance",
      description: "ISO, FSSAI, AGMARK, and HACCP certified products ensure consistent quality and customer satisfaction."
    },
    {
      icon: <Users className="w-8 h-8 text-[#FFD233]" />,
      title: "Dedicated Support",
      description: "Complete marketing support, training, promotional materials, and ongoing business assistance."
    },
    {
      icon: <Phone className="w-8 h-8 text-[#FFD233]" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support and technical assistance for all business queries."
    },
    {
      icon: <Mail className="w-8 h-8 text-[#FFD233]" />,
      title: "Competitive Margins",
      description: "Attractive profit margins with flexible payment terms, credit facilities, and bulk discounts."
    }
  ];

  const partnershipSteps = [
    {
      step: "01",
      title: "Apply Online",
      description: "Fill out our comprehensive partnership enquiry form with your business details and requirements."
    },
    {
      step: "02", 
      title: "Business Review",
      description: "Our team reviews your application, business credentials, and market potential in your area."
    },
    {
      step: "03",
      title: "Interview & Discussion", 
      description: "Personal interview to discuss partnership terms, expectations, and business goals."
    },
    {
      step: "04",
      title: "Agreement & Training",
      description: "Sign partnership agreement and receive comprehensive training on products and sales."
    },
    {
      step: "05",
      title: "Launch & Support",
      description: "Official launch with marketing support, promotional materials, and ongoing assistance."
    }
  ];

  const successStories = [
    {
      name: "Rajesh Enterprises",
      location: "Delhi",
      experience: "3 years",
      growth: "300% increase in business",
      quote: "Partnering with Himalayan Oil has transformed our business. The quality products and excellent support have helped us grow tremendously."
    },
    {
      name: "Sharma Distributors", 
      location: "Lucknow, UP",
      experience: "5 years",
      growth: "500+ retail outlets",
      quote: "The brand trust and product quality make sales easy. Our customers always come back for more Himalayan Oil products."
    },
    {
      name: "Bihar Oil Mart",
      location: "Patna, Bihar", 
      experience: "2 years",
      growth: "200% revenue growth",
      quote: "Excellent support from the team and consistently high product quality. Best decision for our business expansion."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="himalayan-golden-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#4B2E2B] text-white">Partnership Opportunity</Badge>
              <h1 className="text-4xl md:text-5xl text-[#4B2E2B]">
                Partner with 
                <span className="block font-serif italic" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Himalayan Oil
                </span>
              </h1>
              <p className="text-xl text-[#4B2E2B] opacity-90">
                Join our growing network of successful distributors across India. 
                Expand your business with premium quality oils and comprehensive support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="himalayan-gradient text-white px-8 py-6">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="border-2 border-[#4B2E2B] text-[#4B2E2B] hover:bg-[#4B2E2B] hover:text-white px-8 py-6">
                  Download Brochure
                </Button>
              </div>
            </div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1713780131281-61ec701ebb6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNvb2tpbmclMjBtZXRob2RzfGVufDF8fHx8MTc1NzQ4NTM4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Partnership opportunity"
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Why Become a Distributor?
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Join a trusted brand with 45+ years of excellence and unlock numerous business benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl text-[#4B2E2B]">{benefit.title}</h3>
                  <p className="text-sm text-[#4B2E2B] opacity-80 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution Network */}
      <section className="py-20 bg-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Our Distribution Network
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Expanding presence across India with strong market coverage and online reach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center shadow-lg bg-white">
              <CardContent className="p-6 space-y-4">
                <MapPin className="w-12 h-12 text-[#FFD233] mx-auto" />
                <h3 className="text-xl text-[#4B2E2B]">Physical Distribution</h3>
                <div className="space-y-2">
                  {['Uttar Pradesh', 'Bihar', 'Delhi', 'Haryana'].map((state, index) => (
                    <Badge key={index} variant="outline" className="border-[#FFD233] text-[#4B2E2B] text-xs">
                      {state}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg bg-white">
              <CardContent className="p-6 space-y-4">
                <Users className="w-12 h-12 text-[#FFD233] mx-auto" />
                <h3 className="text-xl text-[#4B2E2B]">Active Partners</h3>
                <div className="text-3xl font-bold text-[#FFD233]">500+</div>
                <p className="text-sm text-[#4B2E2B] opacity-80">Distributors & Retailers</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg bg-white">
              <CardContent className="p-6 space-y-4">
                <Target className="w-12 h-12 text-[#FFD233] mx-auto" />
                <h3 className="text-xl text-[#4B2E2B]">Monthly Capacity</h3>
                <div className="text-3xl font-bold text-[#FFD233]">2000</div>
                <p className="text-sm text-[#4B2E2B] opacity-80">MT Production</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg bg-white">
              <CardContent className="p-6 space-y-4">
                <Award className="w-12 h-12 text-[#FFD233] mx-auto" />
                <h3 className="text-xl text-[#4B2E2B]">Online Presence</h3>
                <div className="space-y-2">
                  {['Amazon', 'Jiomart', 'Blinkit'].map((platform, index) => (
                    <Badge key={index} className="bg-[#FFE680] text-[#4B2E2B] text-xs">
                      {platform}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              How Partnership Works
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Simple 5-step process to become our authorized distributor
            </p>
          </div>

          <div className="space-y-8">
            {partnershipSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-[#FFD233] rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#4B2E2B]">{step.step}</span>
                  </div>
                </div>
                <Card className="flex-1 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl text-[#4B2E2B] mb-2">{step.title}</h3>
                    <p className="text-[#4B2E2B] opacity-80">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Partner Success Stories
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Real success stories from our distributor partners across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="shadow-lg bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#FFD233] fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-sm text-[#4B2E2B] opacity-80 italic leading-relaxed">
                    "{story.quote}"
                  </blockquote>
                  
                  <div className="border-t pt-4 space-y-2">
                    <div className="font-medium text-[#4B2E2B]">{story.name}</div>
                    <div className="text-sm text-[#4B2E2B] opacity-60">{story.location}</div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#FFD233] font-medium">{story.experience} Partnership</span>
                      <Badge className="bg-green-100 text-green-700">{story.growth}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Partner Enquiry Form
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80">
              Ready to join our success story? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <Card className="shadow-2xl">
            <CardHeader className="bg-[#FFD233] text-[#4B2E2B]">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Handshake className="w-6 h-6" />
                Apply for Partnership
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Business Location *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="City, State"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessType">Business Type *</Label>
                    <Select onValueChange={(value) => handleInputChange('businessType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="distributor">Distributor</SelectItem>
                        <SelectItem value="retailer">Retailer</SelectItem>
                        <SelectItem value="wholesaler">Wholesaler</SelectItem>
                        <SelectItem value="supermarket">Supermarket Chain</SelectItem>
                        <SelectItem value="online">Online Platform</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Monthly Quantity Interest</Label>
                    <Select onValueChange={(value) => handleInputChange('quantityInterested', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select quantity range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10mt">1-10 MT</SelectItem>
                        <SelectItem value="10-50mt">10-50 MT</SelectItem>
                        <SelectItem value="50-100mt">50-100 MT</SelectItem>
                        <SelectItem value="100+mt">100+ MT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Business Experience</Label>
                  <Select onValueChange={(value) => handleInputChange('experience', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Years in business" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New to Business</SelectItem>
                      <SelectItem value="1-3">1-3 Years</SelectItem>
                      <SelectItem value="3-5">3-5 Years</SelectItem>
                      <SelectItem value="5-10">5-10 Years</SelectItem>
                      <SelectItem value="10+">10+ Years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your business goals, current operations, market area, etc."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full himalayan-gradient text-white py-6 text-lg">
                  Submit Partnership Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="himalayan-gradient py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Join hundreds of successful partners who have transformed their business with Himalayan Oil
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#4B2E2B] hover:bg-gray-100 px-8 py-6">
              Apply Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#4B2E2B] px-8 py-6">
              Call Us: +91 9876543210
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DistributorPage;