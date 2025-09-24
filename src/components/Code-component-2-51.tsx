import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
            Have questions about our products or want to place an order? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-[#FFD233] text-[#4B2E2B]">
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FFD233] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#4B2E2B]" />
                  </div>
                  <div>
                    <h4 className="text-[#4B2E2B] mb-1">Factory Address</h4>
                    <p className="text-sm text-[#4B2E2B] opacity-80">
                      Industrial Area, Sector-2<br />
                      Greater Noida, UP 201310<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FFD233] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#4B2E2B]" />
                  </div>
                  <div>
                    <h4 className="text-[#4B2E2B] mb-1">Phone Numbers</h4>
                    <p className="text-sm text-[#4B2E2B] opacity-80">
                      Sales: +91 9876543210<br />
                      Office: +91 120-4567890<br />
                      Toll Free: 1800-123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FFD233] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#4B2E2B]" />
                  </div>
                  <div>
                    <h4 className="text-[#4B2E2B] mb-1">Email Addresses</h4>
                    <p className="text-sm text-[#4B2E2B] opacity-80">
                      info@himalayanoil.com<br />
                      sales@himalayanoil.com<br />
                      support@himalayanoil.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FFD233] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#4B2E2B]" />
                  </div>
                  <div>
                    <h4 className="text-[#4B2E2B] mb-1">Business Hours</h4>
                    <p className="text-sm text-[#4B2E2B] opacity-80">
                      Monday - Saturday<br />
                      9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-lg">
              <CardHeader className="bg-[#FFD233] text-[#4B2E2B]">
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-[#4B2E2B] rounded-lg flex items-center justify-center hover:bg-[#FFD233] transition-colors group"
                  >
                    <Facebook className="w-6 h-6 text-white group-hover:text-[#4B2E2B]" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-[#4B2E2B] rounded-lg flex items-center justify-center hover:bg-[#FFD233] transition-colors group"
                  >
                    <Instagram className="w-6 h-6 text-white group-hover:text-[#4B2E2B]" />
                  </a>
                </div>
                <p className="text-sm text-[#4B2E2B] opacity-80 mt-4">
                  Stay updated with our latest products, recipes, and offers on social media.
                </p>
              </CardContent>
            </Card>

            {/* Distribution Areas */}
            <Card className="shadow-lg">
              <CardHeader className="bg-[#FFD233] text-[#4B2E2B]">
                <CardTitle>Distribution Areas</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-[#4B2E2B] mb-2">Physical Distribution</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Uttar Pradesh', 'Bihar', 'Delhi', 'Haryana'].map((state) => (
                        <span key={state} className="bg-[#FFF8E1] px-3 py-1 rounded-full text-xs text-[#4B2E2B]">
                          {state}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[#4B2E2B] mb-2">Online Platforms</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Amazon', 'Jiomart', 'Blinkit'].map((platform) => (
                        <span key={platform} className="bg-[#FFE680] px-3 py-1 rounded-full text-xs text-[#4B2E2B]">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader className="bg-[#FFD233] text-[#4B2E2B]">
                <CardTitle>Send Us a Message</CardTitle>
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
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full himalayan-gradient text-white py-6">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="shadow-xl mt-8">
              <CardHeader className="bg-[#FFD233] text-[#4B2E2B]">
                <CardTitle>Find Us</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-64 bg-[#FFF8E1] flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#FFD233] mx-auto mb-2" />
                    <p className="text-[#4B2E2B] opacity-80">Interactive Map</p>
                    <p className="text-sm text-[#4B2E2B] opacity-60">
                      Industrial Area, Sector-2, Greater Noida, UP
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;