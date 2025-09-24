import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Shield, CheckCircle, Download, FileText, Microscope } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "FSSAI",
      fullName: "Food Safety and Standards Authority of India",
      license: "10017051002014",
      description: "Ensures our products meet all food safety standards and regulations in India",
      icon: <Shield className="w-8 h-8 text-[#FFD233]" />,
      validity: "Valid till 2026",
      features: ["Food Safety Compliance", "Regular Audits", "Consumer Protection"]
    },
    {
      name: "ISO",
      fullName: "International Organization for Standardization",
      license: "ISO 22000:2018",
      description: "International quality management system certification for food safety",
      icon: <Award className="w-8 h-8 text-[#FFD233]" />,
      validity: "Valid till 2025",
      features: ["Quality Management", "Process Excellence", "International Standards"]
    },
    {
      name: "AGMARK",
      fullName: "Agricultural Marketing Division",
      license: "AG/MH/2024/001234",
      description: "Government certification ensuring agricultural product quality and purity",
      icon: <CheckCircle className="w-8 h-8 text-[#FFD233]" />,
      validity: "Valid till 2025",
      features: ["Product Purity", "Agricultural Standards", "Government Approved"]
    },
    {
      name: "HACCP",
      fullName: "Hazard Analysis Critical Control Points",
      license: "HACCP/2024/HO-789",
      description: "Systematic preventive approach to food safety from biological, chemical hazards",
      icon: <Microscope className="w-8 h-8 text-[#FFD233]" />,
      validity: "Valid till 2025",
      features: ["Hazard Prevention", "Critical Control Points", "Food Safety Management"]
    }
  ];

  const qualityProcesses = [
    {
      title: "Raw Material Testing",
      description: "Every batch of seeds/nuts is tested for quality, moisture content, and purity before processing."
    },
    {
      title: "Production Monitoring",
      description: "Continuous monitoring of temperature, pressure, and extraction process parameters."
    },
    {
      title: "Laboratory Analysis",
      description: "In-house lab testing for acid value, peroxide value, moisture, and impurities."
    },
    {
      title: "Packaging Standards",
      description: "Hygienic packaging in sterile environment with proper sealing and labeling."
    },
    {
      title: "Storage Protocols",
      description: "Controlled temperature and humidity storage to maintain oil quality and shelf life."
    },
    {
      title: "Regular Audits",
      description: "Third-party audits and inspections to ensure continuous compliance with standards."
    }
  ];

  const whyCertifications = [
    {
      icon: <Shield className="w-6 h-6 text-[#FFD233]" />,
      title: "Consumer Safety",
      description: "Certifications ensure that every drop of oil is safe for consumption and free from harmful substances."
    },
    {
      icon: <Award className="w-6 h-6 text-[#FFD233]" />,
      title: "Quality Assurance",
      description: "Regular testing and compliance checks guarantee consistent quality in every product batch."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#FFD233]" />,
      title: "Trust Building",
      description: "Government and international certifications build customer confidence and trust in our brand."
    },
    {
      icon: <FileText className="w-6 h-6 text-[#FFD233]" />,
      title: "Transparency",
      description: "Open documentation and regular audits ensure complete transparency in our processes."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="himalayan-golden-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-[#4B2E2B] mb-6">
            Our Promise of Purity & Quality
          </h1>
          <p className="text-xl text-[#4B2E2B] opacity-90 max-w-3xl mx-auto mb-8">
            Certified excellence in every drop. Our comprehensive certifications ensure the highest standards of quality, safety, and purity in all our products.
          </p>
          <div className="flex justify-center">
            <Badge className="bg-[#4B2E2B] text-white px-4 py-2 text-base">
              45+ Years of Trusted Quality
            </Badge>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 bg-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Our Certifications
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Recognized by leading authorities for maintaining the highest standards in food safety and quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">{cert.icon}</div>
                  <CardTitle className="text-[#4B2E2B] text-xl">{cert.name}</CardTitle>
                  <p className="text-sm text-[#4B2E2B] opacity-60">{cert.fullName}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Badge variant="outline" className="border-[#FFD233] text-[#4B2E2B] mb-2">
                      {cert.license}
                    </Badge>
                    <p className="text-xs text-green-600 font-medium">{cert.validity}</p>
                  </div>
                  
                  <p className="text-sm text-[#4B2E2B] opacity-80 text-center">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-2">
                    {cert.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-[#FFD233] flex-shrink-0" />
                        <span className="text-xs text-[#4B2E2B] opacity-80">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full border-[#FFD233] text-[#4B2E2B] hover:bg-[#FFD233]">
                    <Download className="w-3 h-3 mr-2" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Display Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Certificate Gallery
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              View our official certificates and quality documents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.slice(0, 3).map((cert, index) => (
              <Card key={index} className="overflow-hidden shadow-lg">
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1728595220875-413fd313712e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMHF1YWxpdHklMjBhc3N1cmFuY2V8ZW58MXx8fHwxNzU3NDg2MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt={`${cert.name} Certificate`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <FileText className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-medium">{cert.name} Certificate</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-[#4B2E2B] font-medium">{cert.name}</h4>
                      <p className="text-sm text-[#4B2E2B] opacity-60">{cert.license}</p>
                    </div>
                    <Button size="sm" className="himalayan-gradient text-white">
                      <Download className="w-3 h-3 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Process */}
      <section className="py-20 bg-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Quality Assurance Process
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Our comprehensive quality control measures ensure excellence at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityProcesses.map((process, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#FFD233] rounded-full flex items-center justify-center text-[#4B2E2B] font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-[#4B2E2B] mb-2">{process.title}</h4>
                      <p className="text-sm text-[#4B2E2B] opacity-80">{process.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Certifications Matter */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#4B2E2B] mb-4">
              Why Certifications Matter
            </h2>
            <p className="text-lg text-[#4B2E2B] opacity-80 max-w-2xl mx-auto">
              Understanding the importance of quality certifications in food industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCertifications.map((item, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">{item.icon}</div>
                  <h3 className="text-[#4B2E2B]">{item.title}</h3>
                  <p className="text-sm text-[#4B2E2B] opacity-80">
                    {item.description}
                  </p>
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
            Trust Himalayan Oil in Every Drop
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Experience the difference that certified quality makes in your kitchen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#4B2E2B] hover:bg-gray-100 px-8 py-6">
              Explore Our Products
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#4B2E2B] px-8 py-6">
              Download Certificates
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;