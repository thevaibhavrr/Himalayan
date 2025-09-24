import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Handshake, MapPin, Phone, Mail } from 'lucide-react';

const DistributorEnquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    businessType: '',
    quantityInterested: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will contact you soon.');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="distributor" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
            Become Our Distribution Partner
          </h2>
          <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
            Join our growing network of distributors and dealers across India. Expand your business with our premium oil products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-[#4B2E2B] mb-6">Why Partner With Us?</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FFD233] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-6 h-6 text-[#4B2E2B]" />
                  </div>
                  <div>
                    <h4 className="text-[#4B2E2B] mb-2">Established Brand Trust</h4>
                    <p className="text-sm text-[#4B2E2B] opacity-80">
                      45+ years of market presence with strong customer loyalty and brand recognition.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FFD233] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#4B2E2B]" />
                  </div>
                  <div>
                    <h4 className="text-[#4B2E2B] mb-2">Wide Market Coverage</h4>
                    <p className="text-sm text-[#4B2E2B] opacity-80">
                      Expanding presence across UP, Bihar, Delhi, Haryana, and online platforms.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FFD233] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#4B2E2B]" />
                  </div>
                  <div>
                    <h4 className="text-[#4B2E2B] mb-2">Dedicated Support</h4>
                    <p className="text-sm text-[#4B2E2B] opacity-80">
                      Complete marketing support, training, and ongoing assistance for your success.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FFD233] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#4B2E2B]" />
                  </div>
                  <div>
                    <h4 className="text-[#4B2E2B] mb-2">Competitive Margins</h4>
                    <p className="text-sm text-[#4B2E2B] opacity-80">
                      Attractive profit margins with flexible payment terms and credit facilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFF8E1] p-6 rounded-lg">
              <h4 className="text-[#4B2E2B] mb-3">Current Distribution Network</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-lg text-[#4B2E2B]">States Covered</div>
                  <div className="text-sm text-[#4B2E2B] opacity-80">UP, Bihar, Delhi, Haryana</div>
                </div>
                <div>
                  <div className="text-lg text-[#4B2E2B]">Key Retail Partner</div>
                  <div className="text-sm text-[#4B2E2B] opacity-80">Metro Wholesale</div>
                </div>
                <div>
                  <div className="text-lg text-[#4B2E2B]">Online Presence</div>
                  <div className="text-sm text-[#4B2E2B] opacity-80">Amazon, Jiomart, Blinkit</div>
                </div>
                <div>
                  <div className="text-lg text-[#4B2E2B]">Monthly Capacity</div>
                  <div className="text-sm text-[#4B2E2B] opacity-80">2000 MT</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <Card className="shadow-xl">
            <CardHeader className="bg-[#FFD233] text-[#4B2E2B]">
              <CardTitle className="flex items-center gap-2">
                <Handshake className="w-6 h-6" />
                Partner Enquiry Form
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="City, State"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessType">Business Type</Label>
                    <Select onValueChange={(value) => handleInputChange('businessType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="distributor">Distributor</SelectItem>
                        <SelectItem value="retailer">Retailer</SelectItem>
                        <SelectItem value="wholesaler">Wholesaler</SelectItem>
                        <SelectItem value="supermarket">Supermarket Chain</SelectItem>
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
                  <Label htmlFor="message">Additional Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us more about your business requirements..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full himalayan-gradient text-white py-6">
                  Submit Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DistributorEnquiry;