import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import MapEmbed from '../MapEmbed';
import { 
  MapPin, Phone, Mail, Clock, Facebook, Instagram, 
  MessageCircle, HeadphonesIcon, FileText, ArrowRight 
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactReason: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '', contactReason: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8 text-[#FFD233]" />,
      title: "Call Us",
      details: [
        "Sales: +91 9876543210",
        "Office: +91 120-4567890", 
        "Toll Free: 1800-123-4567"
      ],
      description: "Speak directly with our sales team"
    },
    {
      icon: <Mail className="w-8 h-8 text-[#FFD233]" />,
      title: "Email Us",
      details: [
        "info@himalayanoil.com",
        "sales@himalayanoil.com",
        "support@himalayanoil.com"
      ],
      description: "Send us your queries and feedback"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-[#FFD233]" />,
      title: "WhatsApp",
      details: [
        "+91 9876543210",
        "Available 9 AM - 6 PM",
        "Monday - Saturday"
      ],
      description: "Quick support via WhatsApp"
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#FFD233]" />,
      title: "Visit Us",
      details: [
        "Industrial Area, Sector-2",
        "Greater Noida, UP 201310",
        "India"
      ],
      description: "Visit our manufacturing facility"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const quickLinks = [
    {
      icon: <FileText className="w-6 h-6 text-[#FFD233]" />,
      title: "Product Brochure",
      description: "Download our complete product catalog"
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6 text-[#FFD233]" />,
      title: "Technical Support", 
      description: "Get help with product specifications"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#FFD233]" />,
      title: "Bulk Orders",
      description: "Special pricing for large quantities"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="himalayan-golden-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-[#4B2E2B] mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-[#4B2E2B] opacity-90 max-w-3xl mx-auto mb-8">
            Have questions about our products, need bulk pricing, or want to place an order? 
            We're here to help you with all your edible oil needs.
          </p>
          <div className="flex justify-center">
            <Badge className="bg-[#4B2E2B] text-white px-6 py-2 text-lg">
              24/7 Customer Support
            </Badge>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Choose the most convenient way to connect with our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">{method.icon}</div>
                  <h3 className="text-xl text-[#4B2E2B]">{method.title}</h3>
                  <div className="space-y-2">
                    {method.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm text-[#4B2E2B] opacity-80">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-xs text-[#4B2E2B] opacity-60">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Office Hours */}
              <Card className="shadow-lg">
                <CardHeader className="bg-[#FFD233] text-[#4B2E2B]">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-[#4B2E2B]">{schedule.day}</span>
                      <span className="text-sm text-[#4B2E2B] opacity-80">{schedule.hours}</span>
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <p className="text-xs text-[#4B2E2B] opacity-60">
                      Emergency support available on WhatsApp
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-lg">
                <CardHeader className="bg-[#FFD233] text-[#4B2E2B]">
                  <CardTitle>Follow Us</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex gap-4 mb-4">
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
                  <p className="text-sm text-[#4B2E2B] opacity-80">
                    Stay updated with our latest products, recipes, and offers on social media.
                  </p>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="shadow-lg">
                <CardHeader className="bg-[#FFD233] text-[#4B2E2B]">
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {quickLinks.map((link, index) => (
                    <div key={index} className="flex items-start gap-3">
                      {link.icon}
                      <div>
                        <h4 className="text-sm text-[#4B2E2B] font-medium">{link.title}</h4>
                        <p className="text-xs text-[#4B2E2B] opacity-60">{link.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-2xl">
                <CardHeader className="bg-[#FFD233] text-[#4B2E2B]">
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-[#4B2E2B] opacity-80">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
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
                      <Label htmlFor="contactReason">Reason for Contact</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {[
                          'Product Inquiry',
                          'Bulk Orders', 
                          'Technical Support',
                          'Partnership',
                          'Complaint',
                          'Feedback',
                          'Media Inquiry',
                          'Other'
                        ].map((reason) => (
                          <Button
                            key={reason}
                            type="button"
                            variant={formData.contactReason === reason ? "default" : "outline"}
                            size="sm"
                            onClick={() => handleInputChange('contactReason', reason)}
                            className={formData.contactReason === reason 
                              ? "bg-[#FFD233] text-[#4B2E2B]" 
                              : "border-[#FFD233] text-[#4B2E2B] hover:bg-[#FFD233]"
                            }
                          >
                            {reason}
                          </Button>
                        ))}
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

                    <Button type="submit" className="w-full himalayan-gradient text-white py-6 text-lg">
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Address */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Visit Our Facility
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Welcome to visit our state-of-the-art manufacturing facility and see our quality processes firsthand
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Google Maps Embed */}
            <Card className="shadow-xl overflow-hidden">
              <CardHeader className="bg-[#FFD233] text-[#4B2E2B]">
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Find Us Here
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <MapEmbed 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.670004440487!2d77.5493919121657!3d28.818906275461547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf5b037345d4b%3A0xde4fc9a6e621c3f5!2sBharat%20Agro%20Oil%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1757487506492!5m2!1sen!2sin"
                  ratio="16/9"
                  className="h-80"
                />
              </CardContent>
            </Card>

            {/* Detailed Address Info */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#4B2E2B]">Factory Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#FFD233] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-[#4B2E2B] font-medium mb-2">Manufacturing Unit</h4>
                      <p className="text-sm text-[#4B2E2B] opacity-80 leading-relaxed">
                        Himalayan Oil Industries<br />
                        Plot No. 45, Industrial Area<br />
                        Sector-2, Greater Noida<br />
                        Uttar Pradesh - 201310<br />
                        India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#4B2E2B]">Transport & Logistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-[#4B2E2B]">Nearest Airport:</span>
                    <span className="text-sm text-[#4B2E2B] opacity-80">Delhi IGI (45 km)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-[#4B2E2B]">Nearest Railway:</span>
                    <span className="text-sm text-[#4B2E2B] opacity-80">Ghaziabad (25 km)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-[#4B2E2B]">Highway Access:</span>
                    <span className="text-sm text-[#4B2E2B] opacity-80">NH-24 (5 km)</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#4B2E2B]">Visiting Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-[#4B2E2B] opacity-80">
                    • Prior appointment required for factory visits
                  </p>
                  <p className="text-sm text-[#4B2E2B] opacity-80">
                    • Safety equipment provided at facility
                  </p>
                  <p className="text-sm text-[#4B2E2B] opacity-80">
                    • Guided tours available Monday-Friday
                  </p>
                  <p className="text-sm text-[#4B2E2B] opacity-80">
                    • Group visits welcome with advance notice
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="himalayan-gradient py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            We'd Love to Hear From You
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Whether you're a customer, distributor, or just curious about our oils, 
            we're here to help with all your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#4B2E2B] hover:bg-gray-100 px-8 py-6">
              Call Now: +91 9876543210
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#4B2E2B] px-8 py-6">
              WhatsApp Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;